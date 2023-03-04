import React, { useState } from 'react';

const UsersHome = () => {
  const user = {
    firstName: 'Madivh',
    lastName: 'Kassel',
    phonenumber: 0000000000,
    Gender: "none",
    email: 'zhuoang2@iilinois.edu',
    age: 20,
    college: 'UIUC',
    bio: 'I am a computer sciecne student in UIUC. I love to write code and solve problems.',
    interests: ['Programming', 'Gaming', 'Soccer'],
  };

  return (
    <div>
      <h1>{user.firstName}'s Homepage</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>college: {user.college}</p>
      <p>Bio: {user.bio}</p>
      <p>Interests: {user.interests.join(', ')}</p>
    </div>
  );
};
  
export default UsersHome;