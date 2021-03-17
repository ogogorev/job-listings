import { useEffect, useState } from 'react';
import jobsData from '../data/data.json';

function getJobs() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(jobsData);
    }, 3000)
  });
}

const transformJob = (jobData) => {
  return {
    ...jobData,
    tags: [
      { value: jobData.role.toLowerCase(), label: jobData.role },
      { value: jobData.level.toLowerCase(), label: jobData.level },
      ...jobData.languages.map(l => ({ value: l.toLowerCase(), label: l, })),
      ...jobData.tools.map(t => ({ value: t.toLowerCase(), label: t, })),
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

  // tags expected to be an array of strings
  const filterByTags = (tags) => {
    for (let j of jobs) {
      j.isVisible = true;
      
      // OR
      // if (tags.length > 0 && !j.data.tags.some(t => tags.indexOf(t) > -1)) {
      //   j.isVisible = false;
      // }

      // AND
      if (tags.length > 0 && !tags.every(t => j.data.tags.map(t => t.value).indexOf(t) > -1)) {
        j.isVisible = false;
      }
    }
    
    setJobs([...jobs]);
  };

  return [jobs, isLoading, filterByTags];
}
