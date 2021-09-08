import express from "express";
import { createClient } from "redis";

//const express = require("express");
const app = express();
const port = 3001;

const client = await createClient();
client.on("error", (err) => console.log("Redis Client Error", err));
await client.connect();

app.get("/jobs", async (req, res) => {
  const jobs = await client.get("indeedJobs");
  console.log(JSON.parse(jobs));

  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.send(jobs);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});