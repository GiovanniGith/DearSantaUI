import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function FamilyMember({ member, setItemId }) {
  const [famMember, setFamilyMember] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://localhost:7041/api/FamilyMember/GetWishListByFamilyMemberId/${member.familyMemberId}`,
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFamilyMember(data);
      });
  }, []);

  const Delete = (id) => {
    fetch(`https://localhost:7041/api/WishListItem/${id}`, {
      method: 'DELETE',
    })
      .then(history.push('/AllFamilies'))
      .then(history.go());
  };

  const setItemDetails = (mem) => {
    setItemId(mem.wishListItemId);
  };

  return (
    <>
      <div className="text-center mt-5">
        <h1>Family Member</h1>
        <h2>{famMember.length > 0 ? famMember[0].familyMemberName : ''}</h2>
        <p>
          Age:{' '}
          <span>
            {famMember.length > 0 ? famMember[0].familyMemberAge : ''}
          </span>
        </p>
        <p>
          Gender:{' '}
          <span>
            {famMember.length > 0 ? famMember[0].familyMemberGender : ''}
          </span>
        </p>
        <div>
          <button type="button">
            <Link to="/UpdateFamilyMember">Update Family Member</Link>
          </button>
        </div>
        <br />
        <div>
          <button type="button">
            <Link to="/AddWishListItem">Add Item to your WishList</Link>
          </button>
        </div>
        <br />
        <br />
        <div>
          {famMember.length > 0
            && famMember.map((mem) => (
              <p>
                {mem.itemName} ${mem.itemPrice}
                <button type="button" onClick={() => setItemDetails(mem)}>
                  <Link to="/WishListItem">View Item</Link>{' '}
                </button>
                <button
                  type="button"
                  onClick={() => Delete(mem.wishListItemId)}
                >
                  Delete Item
                </button>
              </p>
            ))}
        </div>
      </div>
    </>
  );
}
