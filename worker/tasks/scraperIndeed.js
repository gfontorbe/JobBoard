import { job } from "cron";
import puppeteer from "puppeteer";

//TODO: refactor scraper to run all variables in a single go

export default async function scrapeIndeed(url) {
  console.log("launching puppeteer...");
  const browser = await puppeteer.launch();

  console.log("opening new page...");
  const page = await browser.newPage();

  console.log(`going to ${url}`);
  await page.goto(url);

  //TODO: Export to a separate function

  //scrape titles
  console.log(`scraping titles...`);
  let titles = await page.evaluate(() => {
    let data = [];

    let elements = document.querySelectorAll(".jobTitle > span");
    for (var element of elements) {
      data.push(element.textContent);
    }
    return data;
  });
  console.log(`found ${titles.length} titles.`);

  //scrape ids
  console.log(`scraping ids...`);
  let ids = await page.evaluate(() => {
    let data = [];

    let elements = document.querySelectorAll(".tapItem");
    for (var element of elements) {
      data.push(element.id);
    }
    return data;
  });
  console.log(`found ${ids.length} ids.`);

  //scrape links
  let links = await page.evaluate(() => {
    let data = [];

    let elements = document.querySelectorAll(".tapItem");
    for (var element of elements) {
      data.push(element.href);
    }
    return data;
  });

  //scrape company names
  console.log(`scraping company names...`);
  let companies = await page.evaluate(() => {
    let data = [];

    let elements = document.querySelectorAll(".companyName");
    for (var element of elements) {
      data.push(element.textContent);
    }
    return data;
  });
  console.log(`found ${companies.length} company names.`);

  //scrape locations
  console.log(`scraping locations...`);
  let locations = await page.evaluate(() => {
    let data = [];

    let elements = document.querySelectorAll(".companyLocation");
    for (var element of elements) {
      data.push(element.textContent);
    }
    return data;
  });
  console.log(`found ${locations.length} locations.`);
  console.log(`scraping complete.`)
  //turn scraped values into an array of objects
  const jobs = [];

  for (let index = 0; index < titles.length; index++) {
    const job = {
      id: ids[index],
      title: titles[index],
      company: companies[index],
      location: locations[index],
      link: links[index],
      fetchedOn : Date.now();
    };

    jobs.push(job);
  }

  await browser.close();

  return jobs;
}

//scrapeIndeed("https://de.indeed.com/Jobs?q=web+developer");

//export {scrapeIndeed};
