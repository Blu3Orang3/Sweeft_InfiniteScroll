import { useState, useRef, useCallback } from 'react';
import ProfileCard from '../Components/ProfileCard';
import useList from '../hooks/useList';
import LoadingSpinner from '../Components/LoadingSpinner';

const UserListScreen = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);
  const { isLoading, isError, error, results, hasNextPage } = useList(
    page,
    size
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (user) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((users) => {
        if (users[0].isIntersecting && hasNextPage) {
          setPage((prev) => prev + 1);
        }
      });

      if (user) intObserver.current.observe(user);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className='center'>Error: {error.message}</p>;
  console.log(size, page, 'userlistscreen');

  const content = results.map((user, i) => {
    if (results.length === i + 1) {
      return <ProfileCard ref={lastPostRef} key={user.id} user={user} />;
    }
    return <ProfileCard key={user.id} user={user} i={i} />;
  });

  return (
    <div className="wrapper-container">
      <div className='list-grid-container'> {content}</div>

      {isLoading && <LoadingSpinner />}
    </div>
  );
};
export default UserListScreen;
