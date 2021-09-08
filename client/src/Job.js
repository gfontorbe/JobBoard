import {Box} from "@mui/material"
import React from "react";

export default function Job({ job }) {
  return (
    <Box boxShadow={1}>
      <div className={"job"}>
        <a target="_blank" href={job.link}>
          {job.title} {job.location} {job.company}
        </a>
      </div>
    </Box>
  );
}
