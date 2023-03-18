import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = React.forwardRef(({ user }, ref) => {
  const userCardBody = (
    <div>
      <Link to={`/user/${user.id}`} >
        <img src={`${user.imageUrl}?t=${user.id}`} alt=''/>
        <div className='cardbody'>
          <p>
            <b>
              {user.prefix} {user.name} {user.lastName}
            </b>
          </p>
          <p>{user.title}</p>
          {/* <p>ID: {user.id}</p> */}
        </div>
      </Link>
    </div>
  );

  const content = ref ? (
    <div ref={ref} className='grid-item'>
      {userCardBody}
    </div>
  ) : (
    <div className='grid-item'>{userCardBody}</div>
  );

  return content;
});
export default ProfileCard;
