import React from 'react';
import UserDetails from '../UserDetails/UserDetails';
    
const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserDetails key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
