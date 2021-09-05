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

export async function fetchJobData() {
  const startTime = Date.now();
  const client = await createClient();
  client.on("error", (err) => console.log("Redis Client Error", err));

  const allJobs = await scrapeIndeed(`${baseURL}&sort=date`);

  //console.log(allJobs);

  await client.connect();
  await client.set("indeedJobs", allJobs);

  const testValue = await client.get("indeedJobs");
  console.log(testValue);
  const endTime = Date.now();

  console.log(`Process done in ${endTime - startTime}ms.`);
}

fetchJobData();
