import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UpdateFamilyMember({ member }) {
  const FamilyMemberName = useRef();
  const FamilyMemberAge = useRef();
  const FamilyMemberGender = useRef();
  const [updatedMember, setUpdated] = useState();
  console.log(member);
  const UpdateMember = async (e) => {
    e.preventDefault();
    const FinalMember = {
      FamilyMemberId: member.familyMemberId,
      FamilyMemberName: FamilyMemberName.current.value,
      FamilyMemberAge: FamilyMemberAge.current.value,
      FamilyMemberGender: FamilyMemberGender.current.value,
      FamilyId: member.familyId,
    };

    const fetchOption = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(FinalMember),
    };

    fetch('https://localhost:7041/api/FamilyMember', fetchOption).then(
      () => {},
    );
  };

  return (
    <>
      <form className="editFamilyMember">
        <h2 className="editFamilyMember__title">Edit Family Member</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="FamilyMemberName">Enter Family Member Name:</label>
            <input
              required
              ref={FamilyMemberName}
              type="text"
              placeholder={member.familyMemberName}
              onChange={(e) => {
                const copy = { ...updatedMember };
                copy.familyMemberName = e.target.value;
                setUpdated(copy);
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
              placeholder={member.familyMemberAge}
              onChange={(e) => {
                const copy = { ...updatedMember };
                copy.familyMemberAge = e.target.value;
                setUpdated(copy);
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
              placeholder={member.familyMemberGender}
              onChange={(e) => {
                const copy = { ...updatedMember };
                copy.familyMemberGender = e.target.value;
                setUpdated(copy);
              }}
            />
          </div>
        </fieldset>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={UpdateMember}
        >
          <Link to="/FamilyView">Add Member</Link>
        </button>
      </form>
    </>
  );
}
