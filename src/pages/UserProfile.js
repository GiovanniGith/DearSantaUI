import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile({ user }) {
  console.log(user.photoURL);

  const UserProfileImage = (
    <div>
      <img alt="User" src={user.photoURL} />
    </div>
  );

  return (
    <>
      <div className="userProfileView">
        <p>Hi {user.displayName}</p>
        {UserProfileImage}
        <Link to="/AddFamily">
          Click Here to Register Your Family
        </Link> <br /> <br />
        <Link to="/AllFamilies">Click Here to View All Families</Link>
      </div>
    </>
  );
}
