import { useEffect, useState } from 'react';
import jobsData from '../data/data.json';

function getJobs() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(jobsData);
    }, 2500)
  });
}

// const TAG_PROPS = ['role', 'level', 'languages', 'tools'];

const transformJob = (jobData) => {
  return {
    ...jobData,
    tags: [
      { type: 'role', value: jobData.role },
      { type: 'level', value: jobData.level },
      ...jobData.languages.map(l => ({ type: 'language', value: l })),
      ...jobData.tools.map(t => ({ type: 'tool', value: t })),
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
      setJobs(jobsData.map(j => ({ data: transformJob(j), })));
      setIsLoading(false);
    })();
  }, []);

  return [jobs, isLoading];
}
