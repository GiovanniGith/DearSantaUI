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

  const UpdateItemWithPurchased = async (e) => {
    e.preventDefault();

    const updatedItem = {
      ItemName: WSItem.itemName,
      ItemDescription: WSItem.itemDescription,
      ItemPrice: WSItem.itemPrice,
      ItemImage:
        WSItem.itemImage !== ''
          ? WSItem.itemImage
          : 'https://tse2.mm.bing.net/th?id=OIP.wnnsQ_etSItpbg3vr7Mx7QHaHa&pid=Api&P=0',
      IsTopItem: false,
      IsPurchased: true,
      WishListItemId: WSItem.wishListItemId,
    };

    const fetchOption = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    };

    fetch('https://localhost:7041/api/WishListItem', fetchOption).then(
      (data) => {
        setWSItem(data);
      },
    );
  };

  const ItemImage = (
    <div>
      <img
        alt="GenericGiftImage"
        src={
          WSItem.itemImage
            ? WSItem.itemImage
            : 'https://tse2.mm.bing.net/th?id=OIP.wnnsQ_etSItpbg3vr7Mx7QHaHa&pid=Api&P=0'
        }
      />
    </div>
  );

  return (
    <>
      <div>
        <h1>WishList Item: {WSItem.itemName}</h1>
        {ItemImage}
        <p>Price: ${WSItem.itemPrice}</p>
        <p>Any preferences? -- {WSItem.itemDescription}</p>
        <p>Is this a must have? {WSItem.isTopItem ? 'Yes' : 'No'} </p>
        <p>Has this Item Been Purchased? {WSItem.isPurchased ? 'Yes' : 'No'}</p>
      </div>
      <button type="button" onClick={() => setItem(WSItem)}>
        <Link to="/UpdateWishListItem">Edit WishList Item</Link>{' '}
      </button>
      <button type="button" onClick={UpdateItemWithPurchased}>
        Purchase Item{' '}
      </button>
    </>
  );
}
