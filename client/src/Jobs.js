import React from 'react';

import Job from './Job';

export default function Jobs({jobs}) {
    return (
      <div className={'jobs'}>
        {
            jobs.map(job=><Job job={job} key={job.id}/>)
        }
      </div>
    );
}
