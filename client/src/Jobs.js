
import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


import Job from './Job';
import JobModal from './JobModal';
import { Typography } from '@material-ui/core';

export default function Jobs({jobs}) {
  // pagination
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(jobs.length/10);
  const jobsOnPage = jobs.slice(activeStep * 10, activeStep * 10 + 10);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

    return (
      <div className={'jobs'}>
        <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
        <Typography variant="h5" component="h2" className='text-center'>Found {jobs.length} jobs</Typography>

        {
            jobsOnPage.map(job=><Job job={job} key={job.id} onClick={() => {selectJob(job);handleClickOpen()}}/>)
        }
        
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      </div>
    );
}
