import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Button, Typography } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobModal({ job, open, handleClose }) {
  if (!job.title) {
    return <div />;
  }
  let date = new Date(Number(job.fetchedOn)).toString();
  let displayDate = date.split(' ').slice(1,4).join(' ');

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{job.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="h6" component="span">
              {job.company}
              <br></br>
            </Typography>
            <Typography variant="h6" component="span">
              {job.location}
              <br></br>
            </Typography>
            <Typography variant="h6" component="span">
              {displayDate}
            </Typography>
          </DialogContentText>
          <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
        </DialogContent>
        <DialogActions>
          <a target="_blank" href={job.link} rel="noreferrer">
            <Button color="primary">Go to ad</Button>
          </a>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
