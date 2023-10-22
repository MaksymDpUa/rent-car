import { useState, useEffect } from "react";
import { fetchAdverts } from "../helpers/api/fetchAdverts";

export const useFetchAdverts = (page, params = "") => {
  const [fetchedAdverts, setFetchedAdverts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoreAdverts, setNoMoreAdverts] = useState(false);

  useEffect(() => {
    const fulfilledPromise = (newAdverts) => {
      setIsLoading(false);
      setFetchedAdverts((prevValue) => [...prevValue, ...newAdverts]);
      setError(null);
      if (newAdverts.length < 8) setNoMoreAdverts(true);
    };

    const rejectedPromise = (error) => {
      setError(error);
      setIsLoading(false);
      setNoMoreAdverts(true);
    };


    setIsLoading(true);
    fetchAdverts({ page, limit: 8, ...params })
      .then(fulfilledPromise)
      .catch(rejectedPromise);
  }, [page, params]);

  return {
    adverts: fetchedAdverts,
    error,
    isLoading,
    noMoreAdverts,
  };
};


