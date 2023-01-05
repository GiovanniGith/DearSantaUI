import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function AddWishListItem({ member }) {
  const history = useHistory();
  const ItemName = useRef();
  const ItemDescription = useRef();
  const ItemPrice = useRef();
  const ItemImage = useRef();
  const IsTopItem = useRef();
  console.log(member);

  const AddItemToWishList = async (e) => {
    e.preventDefault();

    const newItem = {
      ItemName: ItemName.current.value,
      ItemDescription: ItemDescription.current.value,
      ItemPrice: ItemPrice.current.value,
      ItemImage:
        ItemImage.current.value !== ''
          ? ItemImage.current.value
          : 'https://tse2.mm.bing.net/th?id=OIP.wnnsQ_etSItpbg3vr7Mx7QHaHa&pid=Api&P=0',
      IsTopItem: false,
      IsPurchased: false,
    };

    const fetchOption = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    };

    const res = await fetch(
      `https://localhost:7041/api/WishListItem/CreateWishListItem/${member.familyMemberId}`,
      fetchOption,
    );
    await res.json();
    history.push('/FamilyMember');
  };

  return (
    <>
      <form className="addWishListItem">
        <h2 className="addWishListItem__title">Add To Your WishList</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemName">Enter your wishlist Item:</label>
            <input required ref={ItemName} type="text" placeholder="Name" />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemDescription">Anything Special to Know?</label>
            <input type="text" ref={ItemDescription} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemPrice">Price:</label>
            <input type="text" ref={ItemPrice} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemImage">Inert Image URL:</label>
            <input type="text" ref={ItemImage} />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="IsTopItem">Is This an item you really want??</label>
            <input type="checkbox" ref={IsTopItem} />
          </div>
        </fieldset>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={AddItemToWishList}
        >
          <Link to="/Home">Add item</Link>
        </button>
      </form>
    </>
  );
}
