import {Paper, Typography} from "@material-ui/core"
import React from "react";

export default function Job({ job, onClick }) {

  console.log(`Date: ${job.fetchedOn}`);

  // change fetchedOn to format 'Day Month Day# Year hh:mm:ss GMT+hhmm (Central Europe Time)'
  let date = new Date(job.fetchedOn).toString();

  // display date in format 'Month Day# Year'
  let displayDate = date.split(' ').slice(1,4).join(' ');

  return (
    <Paper onClick={onClick} className={'job'}>
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography variant="h6">{job.location}</Typography>
      </div>
      <div>
        <Typography>{displayDate}</Typography>
      </div>
    </Paper>
  );
}
