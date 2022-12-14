import React from 'react';
import { Link } from 'react-router-dom';

export default function Home({ user }) {
  return (
    <>
      <div className="text-center mt-5">
        <h1>Dear Santa!</h1>
        <p>
          Welcome {user.displayName} to a wonderful easy to use experience to
          keep track of all of your christmas wishlists!
        </p>
        <Link to="/AddFamily">Click Here to Register Your Family</Link>
      </div>
    </>
  );
}
