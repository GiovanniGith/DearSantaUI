import React, { useRef, useState } from 'react';

export default function AddFamilyMember({ FamilyId }) {
  const FamilyMemberName = useRef();
  const FamilyMemberAge = useRef();
  const FamilyMemberGender = useRef();

  const [member, setMember] = useState({
    description: '',
    emergency: false,
  });

  const AddMemberToFamily = () => {
    const newMember = {
      FamilyMemberName: FamilyMemberName.current.value,
      FamilyMemberAge: FamilyMemberAge.current.value,
      FamilyMemberGender: FamilyMemberGender.current.value,
      FamilyId: { FamilyId },
    };

    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMember),
    };

    return fetch('http://localhost:7041/FamilyMember', fetchOption).then();
  };

  return (
    <>
      <form className="addFamilyMember">
        <h2 className="addFamilyMember__title">Add A Member To Your Family</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="FamilyMemberName" ref={FamilyMemberName}>
              Enter Family Member Name:
            </label>
            <input
              required
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
            <label htmlFor="FamilyMemberAge" ref={FamilyMemberAge}>
              Age:
            </label>
            <input
              type="text"
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
            <label htmlFor="FamilyMemberGender" ref={FamilyMemberGender}>
              Gender:
            </label>
            <input
              type="text"
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
          Add Member
        </button>
      </form>
    </>
  );
}
