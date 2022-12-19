import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function WishlistItem({ itemId }) {
  const [item, setItem] = useState({});
  console.log(itemId);

  useEffect(() => {
    fetch(`https://localhost:7041/api/WishlistItem/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  const ItemImage = (
    <div>
      <img alt="GenericGiftImage" src={item.itemImage} />
    </div>
  );

  return (
    <div>
      <h1>WishList Item: {item.itemName}</h1>
      {ItemImage}
      <p>Price: {item.itemPrice}</p>
      <p>Any preferences? -- {item.itemDescription}</p>
      <p>Is this a must have? {item.isTopItem ? 'Yes' : 'No'} </p>
      <p>Has this Item Been Purchased? {item.isPurchased ? 'Yes' : 'No'}</p>
    </div>
  );
}
