import React from 'react';

const ProfileCard = React.forwardRef(({ user, i }, ref) => {
  const userCardBody = (
    <div>
      <img src={user.imageUrl + i} alt='' />
      <div className='cardbody'>
        <p>
          <b>
            {user.prefix} {user.name} {user.lastName}
          </b>
        </p>
        <p>{user.title}</p>
        {/* <p>ID: {user.id}</p> */}
      </div>
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
