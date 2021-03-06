import React from 'react';
import styled from 'styled-components';
import { useJobs } from '../../hooks/jobs.hook';

import JobCard from '../job-card/JobCard';

const JobListing = () => {
  const [jobs, isLoading] = useJobs();

  console.log({ jobs })

  return (
    <div>
      {isLoading && ('Loading...')}
      <JobCard />
    </div>
  );
}

export default JobListing;