import React, { useState, useEffect } from 'react';

export default function FamilyView({ famId }) {
  const [members, setMembers] = useState();
  const [families, setFamily] = useState();

  useEffect(() => {
    fetch(`https://localhost:7041/api/Family/${famId}`)
      .then((res) => res.json())
      .then((data) => {
        setFamily(data);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://localhost:7041/api/Family/GetMembersInAFamilyByFamilyId/${famId}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);
  console.log(members);
  console.log(families);

  return (
    <>
      <div>
        <p>Family Name: </p>
        <div>
          {families?.map((fam) => (
            <div>
              <p key={fam}>{fam.familyName} </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        {members?.map((mem) => (
          <div>
            <p key={mem}>{mem.familyMemberName} </p>
          </div>
        ))}
      </div>
    </>
  );
}
