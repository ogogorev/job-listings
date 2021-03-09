import { useEffect, useState } from 'react';
import jobsData from '../data/data.json';

function getJobs() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(jobsData);
    }, 2500)
  });
}

export function useJobs(transformJobs) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const jobsData = await getJobs();
      setJobs(transformJobs(jobsData));
      setIsLoading(false);
    })();
  }, []);

  return [jobs, isLoading];
}
