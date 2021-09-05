import { CronJob } from "cron";
import { fetchJobData } from "./tasks/fetchJobData.js";
import { createClient } from 'redis';

var job = new CronJob(
  "0 * * * * *",
  function () {
    console.log(`CronJob started at ${Date.now()}`);
    fetchJobData();
  },
  null,
  true,
  "America/Los_Angeles"
);

job.start();
