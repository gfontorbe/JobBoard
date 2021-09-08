
import React from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import Job from './Job';
import { Typography } from '@material-ui/core';

export default function Jobs({jobs}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(jobs.length/10);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

    return (
      <div className={'jobs'}>
        <Typography variant="h5" component="h2" className='text-center'>Found {jobs.length} jobs</Typography>

        {
            jobs.map(job=><Job job={job} key={job.id}/>)
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
