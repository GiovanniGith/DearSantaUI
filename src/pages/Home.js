import React, { useState, useEffect } from 'react';

export default function Home({ user }) {
  const [members, setMembers] = useState([]);
  const [families, setFamilies] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7041/api/FamilyMember')
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);

  useEffect(() => {
    fetch('https://localhost:7041/api/Family')
      .then((res) => res.json())
      .then((data) => {
        setFamilies(data);
      });
  }, []);
  console.log(families);

  return (
    <>
      <div className="text-center mt-5">
        <h1>Dear Santa!</h1>
        <p>
          Welcome {user.displayName} to a wonderful easy to use experience to
          keep track of all of your christmas wishlists!
        </p>
      </div>
      <h1>All Families:</h1>{' '}
      <div>
        <ul>
          <li>
            {families.map((f) => f.familyName)}
            <ul>
              <li>{members.map((m) => m.familyMemberName != null)}</li>
            </ul>
          </li>
        </ul>
        {members
          .sort((a, b) => a.familyId - b.familyId)
          .map((mem) => mem.familyMemberName)}
      </div>
    </>
  );
}
/* step 1: grab all family members
step2: organize list by FamilyId in ascending order
2.5: create state that's an array- hold int's that rep familyId - does array contain family id - if not display family name and add to state
step 3: map over list and if its the first time looking at a new member add H1 tag */
