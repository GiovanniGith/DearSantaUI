import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function FamilyView({ famId, setMember }) {
  const [members, setMembers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://localhost:7041/api/Family/GetMembersInAFamilyByFamilyId/${famId}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setMembers(Array.isArray(data) ? data : [data]);
      });
  }, []);

  const Delete = (id) => {
    fetch(`https://localhost:7041/api/FamilyMember/${id}`, {
      method: 'DELETE',
    })
      .then(history.push('/AllFamilies'))
      .then(history.go());
  };

  return (
    <>
      <div>
        <h1>
          Hello{' '}
          {Array.isArray(members) && members.length > 0
            ? members[0].familyName
            : ''}{' '}
          Family!
        </h1>
      </div>
      <button type="button">
        <Link to="/AddFamilyMember">Add Member!</Link>
      </button>
      <br />
      <br />
      <div>
        {members.length > 0
          && members?.map((mem) => (
            <div>
              <p key={mem}>
                {mem.familyMemberName}
                <button type="button" onClick={() => setMember(mem)}>
                  <Link to="/FamilyMember">View Profile</Link>{' '}
                </button>
                <button
                  type="button"
                  onClick={() => Delete(mem.familyMemberId)}
                >
                  Delete Member
                </button>
              </p>
            </div>
          ))}
      </div>
    </>
  );
}
