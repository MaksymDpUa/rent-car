import { useState, useEffect } from "react";
import { fetchAdverts } from "../helpers/api/fetchAdverts";

const useFetchAdverts = (page, params = "") => {
  const [fetchedAdverts, setFetchedAdverts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoreAdverts, setNoMoreAdverts] = useState(false);
  //   const [responseLength, setResponseLength] = useState(0);

  useEffect(() => {
    const fulfilledPromise = (newAdverts) => {
      setIsLoading(false);
      setFetchedAdverts((prevValue) => [...prevValue, ...newAdverts]);
      setError(null);
      if (newAdverts.length < 8) setNoMoreAdverts(true);
      //   setResponseLength(newAdverts.length);
    };

    const rejectedPromise = (error) => {
      setError(error);
      setIsLoading(false);
      setNoMoreAdverts(true);
    };

    // if (page === 1) {
    //   setFetchedData([]);
    // }
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
    // responseLength
  };
};

export { useFetchAdverts };
