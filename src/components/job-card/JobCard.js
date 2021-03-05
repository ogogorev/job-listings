import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  color: black;
  background-color: white;
  padding: 16px;
  border-radius: 5px;

  box-shadow: 0 0 5px 5px black;
`;

const JobCard = () => {
  return (
    <Card>
      Frontend Developer
    </Card>
  );
};

export default JobCard;
