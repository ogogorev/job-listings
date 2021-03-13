import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useJobs } from '../../hooks/jobs.hook';
import JobCard from '../job-card/JobCard';
import SearchBar from '../search-bar/SearchBar';
import { screen } from '../../breakpoints';

const backgroundImageMobile = require('../../assets/img/bg-header-mobile.svg');
const backgroundImageDesktop = require('../../assets/img/bg-header-desktop.svg');

const Container = styled.div``;
  
const BackgroundImage = styled.div`
  height: 156px; 
  background: url(${backgroundImageMobile.default}), var(--primary);

  @media ${screen.desktop} {
    background: url(${backgroundImageDesktop.default}), var(--primary);
  }
`;

const Content = styled.div`
  margin: -24px 24px 24px;
`;
  
const JobList = styled.div``;

// TODO: Use ul and li instead of divs

const JobListing = () => {
  const [jobs, isLoading, filterByTags] = useJobs();
  const [selectedTags, setSelectedTags] = useState([]);

  console.log({ jobs })

  const addTag = (tag) => {
    if (selectedTags.indexOf(tag) < 0) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag) => {
    const tagToRemoveI = selectedTags.findIndex(t => t === tag);
    if (tagToRemoveI > -1) {
      selectedTags.splice(tagToRemoveI, 1);
      setSelectedTags([...selectedTags]);
    }
  };

  const removeAllTags = () => {
    setSelectedTags([]);
  };

  useEffect(() => {
    filterByTags(selectedTags);
  }, [selectedTags]);

  return (
    <Container>
      <BackgroundImage />

      <Content>
        <SearchBar
          tags={selectedTags} 
          onTagRemove={removeTag}
          onClearButtonClick={removeAllTags}
        />

        <JobList>
          {isLoading && ('Loading...')}
          {!isLoading && (
            jobs.map(j => (
              !!j.isVisible && <JobCard key={j.data.id} jobPosting={j.data} onTagClick={addTag} />
            ))
          )}
        </JobList>
      </Content>
    </Container>
  );
}

export default JobListing;