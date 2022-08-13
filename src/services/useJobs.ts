import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DATA_URL } from '../constants';

export interface JobsDataTypes {
  body: string;
  html_url: string;
  created_at: string;
  id: number;
  labels: {
    name: string;
  }[];
  title: string;
  reactions: {
    total_count: number;
  };
}

export interface JobsTypes {
  data: JobsDataTypes[];
}

export const useJobs = () => {
  const [loading, setLoading] = useState(false);
  const [cachedData, setCachedData] = useState<JobsTypes | null>(null);

  const getData = async () => {
    setLoading(true);

    const cacheIntervalInHours = 24;
    const cacheExpiryTime = new Date();
    cacheExpiryTime.setHours(cacheExpiryTime.getHours() + cacheIntervalInHours);
    const lastRequest = await AsyncStorage.getItem('lastRequest');

    if (
      lastRequest === null ||
      new Date(JSON.parse(lastRequest)) > cacheExpiryTime
    ) {
      try {
        const { data } = await axios.get(DATA_URL as string);

        AsyncStorage.setItem('jobList', JSON.stringify(data));
        setCachedData(data);

        setLoading(false);

        return AsyncStorage.setItem('lastRequest', JSON.stringify(new Date()));
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    } else {
      const cache = await AsyncStorage.getItem('jobList');

      if (cache) {
        setCachedData(JSON.parse(cache));
      }
    }

    setLoading(false);
    return null;
  };

  useEffect(() => {
    getData();
  }, []);

  return [cachedData, loading];
};
