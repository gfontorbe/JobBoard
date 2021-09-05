import { CronJob } from "cron";
import { fetchJobsData } from "./tasks/fetchJobData.js";
import { createClient } from 'redis';

var job = new CronJob(
  "0 * * * * *",
  function () {
    fetchJobsData();
  },
  null,
  true,
  "America/Los_Angeles"
);

job.start();
