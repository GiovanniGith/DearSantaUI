import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function AddFamily() {
  const history = useHistory();
  const newFamName = useRef();

  const CreateFamily = async (e) => {
    e.preventDefault();

    const newFam = {
      FamilyName: newFamName.current.value,
    };

    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFam),
    };

    const res = await fetch('https://localhost:7041/api/Family', fetchOption);
    await res.json();
    history.push('/AddFamilyMember');
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1>Family Name</h1>
        <form>
          <label htmlFor="FamilyName"> </label> <br />
          <input type="text" ref={newFamName} />
        </form>{' '}
        <br />
        <Link to="/AllFamilies">View Families</Link>
        <Link to="/AddFamilyMember" onClick={CreateFamily}>
          Register Family
        </Link>
      </div>
    </>
  );
}
