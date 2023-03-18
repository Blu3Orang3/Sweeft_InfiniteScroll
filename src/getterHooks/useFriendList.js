import { useState, useEffect } from 'react';
import { getUserFriendsList } from '../api/axios';
import { useParams } from "react-router-dom";

const useFriendList = (page = 1, size = 8, userId,) => {
  const [friendData, setFriendData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextPage, setHasNextPage] = useState(false);

  const {id} = useParams();


  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getUserFriendsList(page, size,userId,{ signal })
      .then((data) => {
        setFriendData((prev) => [...prev, ...data]);
        setHasNextPage(Boolean(data.length));
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({message: error.message})
      });

    return () => controller.abort();
  }, [page,size,userId]);


  return { isLoading, isError, error, friendData, hasNextPage, setFriendData };
};

export default useFriendList;
