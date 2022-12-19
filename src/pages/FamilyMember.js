import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function FamilyMember({ memId, setItemId }) {
  const [famMember, setFamilyMember] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://localhost:7041/api/FamilyMember/GetWishListByFamilyMemberId/${memId}`,
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
  return (
    <>
      <div>
        <h1>
          Family Member:
          <span>
            {famMember.length > 0 ? famMember[0].familyMemberName : ''}
          </span>
        </h1>
        <button type="button">
          <Link to="/AddWishListItem">Add to your WishList!</Link>
        </button>{' '}
        <br />
        <br />
        <div>
          {famMember.length > 0
            && famMember.map((mem) => (
              <p>
                {mem.itemName} ${mem.itemPrice}
                <button
                  type="button"
                  onClick={() => setItemId(mem.wishListItemId)}
                >
                  <Link to="/WishListItem">Edit WishList Item</Link>{' '}
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
