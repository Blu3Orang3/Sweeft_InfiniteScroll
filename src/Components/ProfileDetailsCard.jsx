const ProfileDetailsCard = ({ user }) => {
  const ProfileCardBody = (
    <div className='profileInfoCard'>
      <img src={`${user.imageUrl}?t=${user.id}`} alt='' />
      <fieldset className="infoField">
        <legend>info</legend>
      <div className='userAddress'>
        <div className='nameInfo'>
          <p>
            <b>
              {' '}
              {user.prefix} {user.name} {user.lastName}{' '}
            </b>
          </p>
          <p>{user.title}</p>
        </div>
        <p>Email: {user.email}</p>
        <p>IP: {user.ip}</p>
        <p>Job Area: {user.jobArea}</p>
        <p>Job Type: {user.jobType}</p>
      </div>
      </fieldset>
      <fieldset className="addressField">
        <legend>address</legend>
      <div className='userInfo'>
        {user.address ? (
          <>
            <p>City: {user.address.city}</p>
            <p>Country: {user.address.country}</p>
            <p>State: {user.address.state}</p>
            <p>Street Address: {user.address.streetAddress}</p>
            <p>Zip: {user.address.zipCode}</p>
          </>
        ) : null}
      </div>
      </fieldset>
    </div>
  );

  return ProfileCardBody;
};
export default ProfileDetailsCard;
