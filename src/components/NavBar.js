import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <>
      <div className="navbar">
        <div>
          <button type="button" className="navbar__item active">
            <Link className="navbar__link" to="/Home">
              Home
            </Link>
          </button>
        </div>
        <div>
          <button type="button" className="navbar__item active">
            <Link to="/UserProfile">Profile</Link>
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={signOut}
            className="navbar__item active"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
