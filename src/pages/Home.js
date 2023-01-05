import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home({ user, setMember }) {
  const [members, setMembers] = useState([]);
  const [families, setFamilies] = useState([]);
  console.log(user);

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

  return (
    <>
      <div className="text-center mt-5">
        <h1>All Families:</h1>
        <div className="allFamiliesContainer">
          {families.map((f) => (
            <div>
              <h1>{f.familyName}</h1>{' '}
              <span>
                {' '}
                {members.map((m) => (m.familyId === f.familyId ? (
                  <div>
                    <Link onClick={() => setMember(m)} to="/FamilyMember">
                      {m.familyMemberName} {}{' '}
                    </Link>
                  </div>
                ) : (
                  ''
                )))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
