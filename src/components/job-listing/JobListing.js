import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useJobs } from '../../hooks/jobs.hook';
import JobCard from '../job-card/JobCard';
import SearchBar from '../search-bar/SearchBar';

const JobListing = () => {
  const [jobs, isLoading] = useJobs();
  const [selectedTags, setSelectedTags] = useState([]);

  console.log({ jobs })

  const addTag = (tag) => {
    if (selectedTags.map(t => t.value).indexOf(tag.value) < 0) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const removeTag = (tag) => {
    const tagToRemoveI = selectedTags.findIndex(t => t.value === tag.value);
    if (tagToRemoveI > -1) {
      selectedTags.splice(tagToRemoveI, 1);
      setSelectedTags([...selectedTags]);
    }
  };

  const removeAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div>
      <SearchBar
        tags={selectedTags} 
        onTagRemove={removeTag}
        onClearButtonClick={removeAllTags}
      />

      {isLoading && ('Loading...')}
      {!isLoading && (
        jobs.map(j => (
          <JobCard key={j.data.id} jobPosting={j.data} onTagClick={addTag} />
        ))
      )}
    </div>
  );
}

export default JobListing;