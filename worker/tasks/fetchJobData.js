import scrapeIndeed from "./scraperIndeed.js";
import { createClient } from "redis";

const baseURL = "https://de.indeed.com/Jobs?q=web+developer";

//let startPage = 0;
let allPages = [];

export async function fetchJobsData() {
  const startTime = Date.now();
  const client = await createClient();
  client.on("error", (err) => console.log("Redis Client Error", err));

  const allJobs = await scrapeIndeed(`${baseURL}&sort=date`);
  
  // filter jobs
  const filteredJobs = [];

  console.log(`filtering jobs`);
  for (let index = 0; index < allJobs.length; index++) {
    const element = allJobs[index];

    //remove ads containing "senior"
    if (element.title.toLowerCase().includes("senior")) {
      console.log(`filtered out ad id:${element.id} title:${element.title}`);
      continue;
    }

    filteredJobs.push(element);
  }

  console.log(
    `filtered jobs: ${filteredJobs.length} left from ${allJobs.length}`
  );

  //set in Redis
  await client.connect();
  await client.set("indeedJobs", JSON.stringify(filteredJobs));

  const testValue = await client.get("indeedJobs");

  const endTime = Date.now();

  console.log(`Process done in ${endTime - startTime}ms.`);
}

//fetchJobsData();
