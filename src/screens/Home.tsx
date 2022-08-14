import React from 'react';
import { Layout, List } from '../components';
import { JobsTypes, useJobs } from '../services/useJobs';
import { usePagination } from '../services/usePagination';

function Home() {
  const [data, loading] = useJobs();
  const [paginatedData, refetch] = usePagination(data as JobsTypes);

  return (
    <Layout title="Todas as vagas">
      <List data={paginatedData} refetch={refetch} loading={loading} />
    </Layout>
  );
}

export default Home;
