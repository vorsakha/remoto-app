import React from 'react';
import { List } from '../components';
import { JobsTypes, useJobs } from '../services/useJobs';
import { usePagination } from '../services/usePagination';

function Home() {
  const [data, loading] = useJobs();
  const [paginatedData, refetch] = usePagination(data as JobsTypes);

  return <List data={paginatedData} refetch={refetch} loading={loading} />;
}

export default Home;
