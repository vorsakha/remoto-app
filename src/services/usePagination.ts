import { useEffect, useState } from 'react';
import { JobsDataTypes, JobsTypes } from './useJobs';

type PaginationReturnProps = [JobsDataTypes[] | null, () => void];

export const usePagination = (jobs: JobsTypes): PaginationReturnProps => {
  const [paginatedData, setPaginatedData] = useState<JobsDataTypes[] | null>(
    null,
  );
  const [limit, setLimit] = useState(10);

  const refetch = () => setLimit(limit + 10);

  const handleData = () => {
    setPaginatedData(jobs.data.slice(0, limit));
  };

  useEffect(() => {
    if (jobs) {
      handleData();
    }
  }, [limit, jobs]);

  return [paginatedData, refetch];
};
