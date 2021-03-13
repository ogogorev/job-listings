import { useEffect, useState } from 'react';
import jobsData from '../data/data.json';

// TODO: There is a bug: Javascript and JavaScript are handled as different tags.

function getJobs() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(jobsData);
    }, 500)
  });
}

const transformJob = (jobData) => {
  return {
    ...jobData,
    tags: [
      jobData.role,
      jobData.level,
      ...jobData.languages,
      ...jobData.tools,
    ],
  };
};

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const jobsData = await getJobs();
      setJobs(jobsData.map(j => ({ data: transformJob(j), isVisible: true })));
      setIsLoading(false);
    })();
  }, []);

  const filterByTags = (tags) => {
    for (let j of jobs) {
      j.isVisible = true;
      
      // OR
      // if (tags.length > 0 && !j.data.tags.some(t => tags.indexOf(t) > -1)) {
      //   j.isVisible = false;
      // }

      // AND
      if (tags.length > 0 && !tags.every(t => j.data.tags.indexOf(t) > -1)) {
        j.isVisible = false;
      }
    }
    
    setJobs([...jobs]);
  };

  return [jobs, isLoading, filterByTags];
}
