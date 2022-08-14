import { JobsDataTypes } from '../services/useJobs';

export const filterByDate = (data: JobsDataTypes[]) =>
  data?.sort((a, b) => {
    const dateA: any = new Date(a.created_at);
    const dateB: any = new Date(b.created_at);

    return dateB - dateA;
  });
