import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function AddFamilyMember({ famId }) {
  const [familyId, setFamilyId] = useState(1);
  const [families, setFamily] = useState([]);
  const FamilyMemberName = useRef();
  const FamilyMemberAge = useRef();
  const FamilyMemberGender = useRef();
  const history = useHistory();

  const [member, setMember] = useState({});
  const clickHandle = (e) => {
    setFamilyId(e.target.value);
  };

  useEffect(() => {
    fetch('https://localhost:7041/api/Family')
      .then((res) => res.json())
      .then((data) => {
        setFamily(Array.isArray(data) ? data : [data]);
      });
  }, []);

  const AddMemberToFamily = async (e) => {
    e.preventDefault();
    console.log(famId);
    const newMember = {
      FamilyMemberName: FamilyMemberName.current.value,
      FamilyMemberAge: FamilyMemberAge.current.value,
      FamilyMemberGender: FamilyMemberGender.current.value,
      FamilyId: familyId,
    };

    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    };

    const res = await fetch(
      'https://localhost:7041/api/FamilyMember',
      fetchOption,
    );
    await res.json();
    history.push('/AddWishListItem');
  };
  console.log(families);
  return (
    <>
      <form className="addFamilyMember">
        <h2 className="addFamilyMember__title">Add A Member To Your Family</h2>
        <fieldset>
          <div>
            What Family Do you want to add a member to?
            <select onChange={clickHandle}>
              {families.map((e) => (
                <option key={`family--${e.familyId}`} value={e.familyId}>
                  {e.familyName}
                </option>
              ))}
            </select>
          </div>
        </fieldset>

        <fieldset>
          <div className="form-group">
            <label htmlFor="FamilyMemberName">Enter Family Member Name:</label>
            <input
              required
              ref={FamilyMemberName}
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => {
                const copy = { ...member };
                copy.FamilyMemberName = e.target.value;
                setMember(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="FamilyMemberAge">Age:</label>
            <input
              type="text"
              ref={FamilyMemberAge}
              onChange={(e) => {
                const copy = { ...member };
                copy.FamilyMemberAge = e.target.value;
                setMember(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="FamilyMemberGender">Gender:</label>
            <input
              type="text"
              ref={FamilyMemberGender}
              onChange={(e) => {
                const copy = { ...member };
                copy.FamilyMemberGender = e.target.value;
                setMember(copy);
              }}
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={AddMemberToFamily}
        >
          <Link to="/AddWishListItem">Add Member</Link>
        </button>
      </form>
    </>
  );
}
