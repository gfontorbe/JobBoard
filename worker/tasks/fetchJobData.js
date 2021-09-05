import scrapeIndeed from "./scraperIndeed.js";
import { createClient } from "redis";
/*
const response = await fetch('https://github.com/');
const body = await response.text();
*/

const baseURL = "https://de.indeed.com/Jobs?q=web+developer";
//use the url https://reqres.in/api/products/3 for testing purposes, returns a sample JSON file
//for later use, make a scrapper for https://de.indeed.com/Jobs?q=web+developer&start=0 (iterates to 10 for each page)

//let startPage = 0;
let allPages = [];

export async function fetchJobsData() {
  const startTime = Date.now();
  const client = await createClient();
  client.on("error", (err) => console.log("Redis Client Error", err));

  const allJobs = await scrapeIndeed(`${baseURL}&sort=date`);

  const filteredJobs = [];

  console.log(`filtering jobs`);
  // filter jobs
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

fetchJobsData();
