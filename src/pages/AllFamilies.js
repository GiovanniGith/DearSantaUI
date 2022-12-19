import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AllFamilies({ setfamonclick }) {
  const [families, setFamily] = useState([]);

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
          {families.length > 0
            && families?.map((fam) => (
              <div>
                <p key={fam.familyId}>
                  {fam.familyName}{' '}
                  <button
                    type="button"
                    onClick={() => setfamonclick(fam.familyId)}
                  >
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
