import React from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <>
      <div>
        <p>Hi</p>
        <Link to="/AddFamily">
          Click Here to Register Your Family
        </Link> <br /> <br />
        <Link to="/AllFamilies">Click Here to View All Families</Link>
      </div>
    </>
  );
}
