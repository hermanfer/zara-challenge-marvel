import { useEffect, useState } from "react";

const useFetchDataComicId = (url) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const responseData = await response.json();
        const comicsData = responseData.data.results; // Aquí ajusta la ruta para los cómics en la respuesta
        setComics(comicsData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { comics, isLoading, error };
};

export default useFetchDataComicId;
