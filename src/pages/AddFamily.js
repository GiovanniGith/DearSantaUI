import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AddFamily({ SetFamilyId }) {
  const [families, setFamily] = useState([]);
  const newFamName = useRef();

  useEffect(() => {
    fetch('https://localhost:7041/api/Family')
      .then((res) => res.json())
      .then(setFamily);
  }, []);

  const CreateFamily = () => {
    const newFam = {
      FamilyId: families.length + 1,
      FamilyName: newFamName,
    };
    SetFamilyId(newFam.FamilyId);

    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFam),
    };

    return fetch('http://localhost:7041/api/Family', fetchOption).then();
  };

  return (
    <>
      <h1> Welcome to DearSanta</h1>
      <p>Enter Family Name</p>
      <input type="text" ref={newFamName} />
      <Link to="/AddFamilyMember" onClick={CreateFamily}>
        Register Family
      </Link>
      <div>
        {families.map((fam) => (
          <div>
            <p>{fam.FamilyName}</p>
          </div>
        ))}
      </div>
    </>
  );
}
