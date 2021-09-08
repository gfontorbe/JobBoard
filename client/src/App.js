import { Typography } from "@material-ui/core";
import React from "react";
import "./App.css";

import Jobs from "./Jobs";

const mockJobs = [
  { title: "SWE 1", company: "Google" },
  {
    title: "SWE 2",
    company: "Microsoft",
  },
];

const JOB_API_URL = "http://localhost:3001/jobs";

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);

  const jobs = await res.json();

  updateCb(jobs);

  console.log(jobs);
}

function App() {
  const [jobList, updateJobs] = React.useState([]);

  React.useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Typography variant="h4" component="h1" className={'text-center'}>
        Entry- and Mid-level Web Developer Jobs in Germany
      </Typography>
      
      <Jobs jobs={jobList} />
      
    </div>
  );
}

export default App;
