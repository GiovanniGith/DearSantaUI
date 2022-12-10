import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ user }) {
  return (
    <>
      <div className="text-center mt-5">
        <h1>Welcome, {user.displayName}!</h1>
        <img
          referrerPolicy="no-referrer"
          src={user.photoURL}
          alt={user.displayName}
        />
      </div>
      <Link to="/AddFamily">Click Here to Register Your Family</Link>
    </>
  );
}
