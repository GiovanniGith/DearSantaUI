import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WishlistItem({ itemId, setItem }) {
  const [WSItem, setWSItem] = useState({});
  console.log(itemId);

  useEffect(() => {
    fetch(`https://localhost:7041/api/WishlistItem/${itemId} `)
      .then((res) => res.json())
      .then((data) => {
        setWSItem(data);
      });
  }, []);

  const ItemImage = (
    <div>
      <img
        alt="GenericGiftImage"
        src={WSItem.itemImage ? WSItem.itemImage : ''}
      />
    </div>
  );

  return (
    <>
      <div>
        <h1>WishList Item: {WSItem.itemName}</h1>
        {ItemImage}
        <p>Price: {WSItem.itemPrice}</p>
        <p>Any preferences? -- {WSItem.itemDescription}</p>
        <p>Is this a must have? {WSItem.isTopItem ? 'Yes' : 'No'} </p>
        <p>Has this Item Been Purchased? {WSItem.isPurchased ? 'Yes' : 'No'}</p>
      </div>
      <button type="button" onClick={() => setItem(WSItem)}>
        <Link to="/UpdateWishListItem">Edit WishList Item</Link>{' '}
      </button>
    </>
  );
}
