import styled from 'styled-components';
import { useJobs } from '../../hooks/jobs.hook';

import JobCard from '../job-card/JobCard';
import SearchBar from '../search-bar/SearchBar';

const transformJobs = (jobsData) => {
  return jobsData.map(j => {
    return {
      ...j,
      // create function for parsing of tags, should be more general
      tags: [
        { type: 'role', value: j.role },
        { type: 'level', value: j.level },
        ...j.languages.map(l => ({ type: 'language', value: l })),
        ...j.tools.map(t => ({ type: 'tool', value: t })),
      ],
    };
  });
};

const testTags = [
  { type: 'level', value: 'Senior' },
  { type: 'level', value: 'Junior' },
];

const JobListing = () => {
  const [jobs, isLoading] = useJobs(transformJobs);

  console.log({ jobs })

  const onTagRemove = (tag) => {
    console.log({ tag })
  };

  return (
    <div>
      <SearchBar tags={testTags} onTagRemove={onTagRemove} />
      
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