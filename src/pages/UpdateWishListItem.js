import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function UpdateWishListItem({ item, setItem }) {
  const ItemName = useRef();
  const ItemDescription = useRef();
  const ItemPrice = useRef();
  const ItemImage = useRef();
  const IsTopItem = useRef();
  console.log(item);

  const UpdateItem = async (e) => {
    e.preventDefault();
    console.log(IsTopItem);
    const updatedItem = {
      ItemName: ItemName.current.value,
      ItemDescription: ItemDescription.current.value,
      ItemPrice: ItemPrice.current.value,
      ItemImage:
        ItemImage.current.value !== ''
          ? ItemImage.current.value
          : 'https://tse2.mm.bing.net/th?id=OIP.wnnsQ_etSItpbg3vr7Mx7QHaHa&pid=Api&P=0',
      IsTopItem: false,
      IsPurchased: false,
      WishListItemId: item.wishListItemId,
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
        setItem(data);
      },
    );
  };

  return (
    <>
      <form className="form-group">
        <h2 className="addWishListItem__title">
          Update This Members WishList Item
        </h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemName">Enter the wishlist Item:</label>
            <input
              required
              ref={ItemName}
              type="text"
              placeholder={item?.itemName}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemDescription">Anything Special to Know?</label>
            <input
              type="text"
              ref={ItemDescription}
              placeholder={item?.ItemDescription}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemPrice">Price:</label>
            <input type="text" ref={ItemPrice} placeholder={item?.itemPrice} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemImage">Inert Image URL:</label>
            <input type="text" ref={ItemImage} placeholder={item?.itemImage} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="IsTopItem">Is This an item you really want??</label>
            <input
              type="checkbox"
              ref={IsTopItem}
              placeholder={item?.IsTopItem}
            />
          </div>
        </fieldset>
        <button type="submit" className="btn btn-primary" onClick={UpdateItem}>
          <Link to="/FamilyMember">Update Item</Link>
        </button>
      </form>
    </>
  );
}
