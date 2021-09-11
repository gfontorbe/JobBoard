import scrapeIndeed from "./scraperIndeed.js";
import { createClient } from "redis";
import { json } from "express";

const baseURL = "https://de.indeed.com/Jobs?q=web+developer";

export async function fetchJobsData() {
  const startTime = Date.now();
  const client = await createClient();
  client.on("error", (err) => console.log("Redis Client Error", err));

  const allJobs = await scrapeIndeed(`${baseURL}&sort=date`);

  // filter jobs
  const filteredJobs = [];
  await client.connect();
  const jobsInMemory = await client.get("indeedJobs");

  console.log(`filtering jobs...`);
  for (let index = 0; index < allJobs.length; index++) {
    const element = allJobs[index];
    // remove jobs already in memory
    if (jobsInMemory != null && jobsInMemory.includes(element.id)) {
      console.log(`job ${element.id} already in memory`);
      continue;
    }
    // remove ads containing "senior"
    if (element.title.toLowerCase().includes("senior")) {
      console.log(`filtered out ad id:${element.id} title:${element.title}`);
      continue;
    }
    // remove ads containing "student"
    if (element.title.toLowerCase().includes("student")) {
      console.log(`filtered out ad id:${element.id} title:${element.title}`);
      continue;
    }
    filteredJobs.push(element);
  }

  console.log(
    `filtered jobs: ${filteredJobs.length} left from ${allJobs.length}`
  );

  // add new filtered jobs to memory
  let newJobList = "";
  if (jobsInMemory != null) {
    if (filteredJobs.length != 0) { // if jobs in memory and new jobs, add them together to memory
      newJobList = (JSON.stringify(filteredJobs) + jobsInMemory).replace(
        "][",
        ","
      );
    } else { // if no jobs in memory but new jobs, add new jobs to memory
      newJobList = jobsInMemory;
    }
    await client.set("indeedJobs", newJobList); //set in Redis
  } else if (filteredJobs.length != 0) {
    newJobList = JSON.stringify(filteredJobs);
    await client.set("indeedJobs", newJobList); //set in Redis
  } // if no jobs in memory and no new jobs fetched, do nothing
  const endTime = Date.now();

  console.log(`Process done in ${endTime - startTime}ms.`);
}
