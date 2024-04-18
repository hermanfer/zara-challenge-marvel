import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log('Respuesta de la API:', jsonData);
        setTotalResults(jsonData.data.total || 0);
        console.log('total results:', jsonData.data.total);
        setData(jsonData.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, totalResults, isLoading };
}
