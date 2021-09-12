import {Paper, Typography} from "@material-ui/core"
import React from "react";

export default function Job({ job, onClick }) {
  return (
    <Paper onClick={onClick} className={'job'}>
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography variant="h6">{job.location}</Typography>
      </div>
      <div>
        <Typography>{Date(job.fetchedOn).split(' ').slice(1,4).join(' ')}</Typography>
      </div>
    </Paper>
  );
}
