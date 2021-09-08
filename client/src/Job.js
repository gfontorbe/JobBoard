import {Paper, Typography} from "@material-ui/core"
import React from "react";

export default function Job({ job }) {
  return (
    <Paper className={'job'}>
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>Fetched at</Typography>
      </div>
    </Paper>
  );
}
