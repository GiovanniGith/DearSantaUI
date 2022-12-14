import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AllFamilies({ setFamId }) {
  const [families, setFamily] = useState();

  useEffect(() => {
    fetch('https://localhost:7041/api/Family')
      .then((res) => res.json())
      .then((data) => {
        setFamily(data);
      });
  }, []);

  return (
    <>
      <h1> Families </h1>
      <div className="content">
        <div>
          {families?.map((fam) => (
            <div>
              <p key={fam}>
                {fam.familyName}{' '}
                <button type="button" onClick={setFamId(fam.FamilyId)}>
                  <Link to="/FamilyView">Edit Family</Link>
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
