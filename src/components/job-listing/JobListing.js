import React from 'react';
import styled from 'styled-components';

import JobCard from '../job-card/JobCard';

const Button = styled.button`
  color: red;
`;

const JobListing = () => {

  return (
    <div>
      hey
      <Button>click me</Button>

      <JobCard />
    </div>
  );

}

export default JobListing;