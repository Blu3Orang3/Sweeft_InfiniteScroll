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
        <br />
        <p><span>Email: </span> {user.email}</p>
        <p><span>IP Address: </span> {user.ip}</p>
        <p><span>Job Area: </span> {user.jobArea}</p>
        <p><span>Job Type: </span> {user.jobType}</p>
      </div>
      </fieldset>
      <fieldset className="addressField">
        <legend>address</legend>
      <div className='userInfo'>
        {user.address ? (
          <>
            <p><span>City: </span> {user.address.city}</p>
            <p><span>Country: </span> {user.address.country}</p>
            <p><span>State: </span> {user.address.state}</p>
            <p><span>Street Address: </span> {user.address.streetAddress}</p>
            <p><span>Zip: </span> {user.address.zipCode}</p>
          </>
        ) : null}
      </div>
      </fieldset>
    </div>
  );

  return ProfileCardBody;
};
export default ProfileDetailsCard;
