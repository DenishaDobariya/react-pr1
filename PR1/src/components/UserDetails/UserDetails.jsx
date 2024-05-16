import React from 'react';

const UserDetails = ({ user }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className="user-card">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <div className="user-details">
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <p>Username : {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Phone: {user.phone}</p>
          <p>Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}</p>
        </div>
        </div>
      </div>
    </div>
    
  );
}

export default UserDetails;
