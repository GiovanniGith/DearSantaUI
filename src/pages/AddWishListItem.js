import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function AddWishListItem() {
  const history = useHistory();
  const ItemName = useRef();
  const ItemDescription = useRef();
  const ItemPrice = useRef();
  const ItemImage = useRef();
  const IsTopItem = useRef();

  const [items, setItem] = useState({});

  const AddItemToWishList = async (e) => {
    e.preventDefault();

    const newItem = {
      ItemName: ItemName.current.value,
      ItemDescription: ItemDescription.current.value,
      ItemPrice: ItemPrice.current.value,
      ItemImage: ItemImage.current.value,
      // IsTopItem: Boolean = IsTopItem.current.value ,
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
      'https://localhost:7041/api/WishListItem',
      fetchOption,
    );
    await res.json();
    history.push('/Home');
  };

  return (
    <>
      <form className="addWishListItem">
        <h2 className="addWishListItem__title">Add To Your WishList</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemName">Enter your wishlist Item:</label>
            <input
              required
              ref={ItemName}
              type="text"
              className="form-control"
              placeholder="Name"
              onChange={(e) => {
                const copy = { ...items };
                copy.ItemName = e.target.value;
                setItem(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemDescription">Anything Special to Know?</label>
            <input
              type="text"
              ref={ItemDescription}
              onChange={(e) => {
                const copy = { ...items };
                copy.ItemDescription = e.target.value;
                setItem(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemPrice">Price:</label>
            <input
              type="text"
              ref={ItemPrice}
              onChange={(e) => {
                const copy = { ...items };
                copy.ItemPrice = e.target.value;
                setItem(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="ItemImage">Inert Image URL:</label>
            <input
              type="text"
              ref={ItemImage}
              onChange={(e) => {
                const copy = { ...items };
                copy.ItemImage = e.target.value;
                setItem(copy);
              }}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="IsTopItem">Is This an item you really want??</label>
            <input
              type="checkbox"
              ref={IsTopItem}
              onChange={(e) => {
                const copy = { ...items };
                copy.IsTopItem = e.target.value;
                setItem(copy);
              }}
            />
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
