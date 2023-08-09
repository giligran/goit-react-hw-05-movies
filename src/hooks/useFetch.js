import { useCallback, useState } from 'react';

export const useFetch = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = useCallback(async requestFunction => {
    setIsFetching(true);
    try {
      const data = await requestFunction;

      setData(data);
    } catch (e) {
      setError(e);
    } finally {
      setIsFetching(false);
    }
  }, []);

  return { isFetching, data, error, fetchData };
};
