import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useJobs } from '../../hooks/jobs.hook';
import JobCard from '../job-card/JobCard';
import SearchBar from '../search-bar/SearchBar';

const Container = styled.div`
  margin: 24px;
`;

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
      {/* <SearchBar
        tags={selectedTags} 
        onTagRemove={removeTag}
        onClearButtonClick={removeAllTags}
      /> */}

      {isLoading && ('Loading...')}
      {!isLoading && (
        jobs.map(j => (
          !!j.isVisible && <JobCard key={j.data.id} jobPosting={j.data} onTagClick={addTag} />
        ))
      )}
    </Container>
  );
}

export default JobListing;