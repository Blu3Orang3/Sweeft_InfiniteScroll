import { useState, useRef, useCallback, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import ProfileCard from '../Components/ProfileCard';
import ProfileDetailsCard from '../Components/ProfileDetailsCard';
import useProfile from '../getterHooks/useProfile';
import useFriendList from "../getterHooks/useFriendList";
import LoadingSpinner from '../Components/LoadingSpinner';

const UserProfileScreen = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(8);

  const { id: userId } = useParams();

  console.log(userId);

  const { isLoading, isError, error, friendData, hasNextPage, setFriendData } = useFriendList(
    page,
    size,
    userId
  );
  const { isUserLoading, isUserError, userError, userData } = useProfile(userId);


  useEffect(() => {
    setPage(1); // reset page to 1 when userId changes
    setFriendData([]);
  }, [userId,setFriendData]);

  console.log(page);

  const intObserver = useRef(null);
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

  // if (isError||isUserError) return <p className='center'>List Error: {error.message } <br /> User Error: {userError.message}</p>;

  const FriendList = friendData.map((user, i) => {
    if (friendData.length === i + 1) {
      return <ProfileCard ref={lastPostRef} key={`${i}`} user={user} />;
    }
    return <ProfileCard key={i} user={user} i={i} />;
  });

  console.log(userData);

  return (
    <>
      <Link to='/'>Go Back</Link>
      {isUserLoading && <p>Image loading....</p>}
      {userData ? <ProfileDetailsCard user={userData} /> : null}
      <h2>Friends:</h2>
      <div className='list-grid-container'> {FriendList}</div>
      {isLoading && <LoadingSpinner />}
    </>
  );
};
export default UserProfileScreen;
