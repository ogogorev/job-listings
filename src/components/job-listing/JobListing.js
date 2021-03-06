import styled from 'styled-components';
import { useJobs } from '../../hooks/jobs.hook';

import JobCard from '../job-card/JobCard';

const JobListing = () => {
  const [jobs, isLoading] = useJobs();

  console.log({ jobs })

  return (
    <div>
      {isLoading && ('Loading...')}
      {!isLoading && (
        jobs.map(j => (
          <JobCard key={j.id} jobPosting={j} />
        ))
      )}
    </div>
  );
}

export default JobListing;