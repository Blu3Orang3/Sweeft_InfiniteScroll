import { useState, useEffect } from 'react';
import { getUser } from '../api/axios';

const useProfile = (userId) => {
  const [userData, setUser] = useState([]);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [isUserError, setIsUserError] = useState(false);
  const [userError, setUserError] = useState({});

  useEffect(() => {
    setIsUserLoading(true);
    setIsUserError(false);
    setUserError({});

    const controller = new AbortController();
    const { signal } = controller;

    getUser(userId, { signal })
      .then((data) => {
        setUser(data);
        console.log(data);
        setIsUserLoading(false);
      })
      .catch((error) => {
        setIsUserLoading(false);
        if (signal.aborted) return;

        console.log(error.message);
        setIsUserError(true);
        setUserError({ message: error.message });
      });

    return () => controller.abort();
  }, [userId]);

  console.log(userId, 'userlist');

  return { isUserLoading, isUserError, userError, userData };
};

export default useProfile;
