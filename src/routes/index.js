// index for router
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import AddFamily from '../pages/AddFamily';
import AddFamilyMember from '../pages/AddFamilyMember';
import AddWishListItem from '../pages/AddWishListItem';
import AllFamilies from '../pages/AllFamilies';
import UserProfile from '../pages/UserProfile';
import FamilyView from '../pages/FamilyView';
import FamilyMember from '../pages/FamilyMember';
import WishListItem from '../pages/WishListItem';
import UpdateWishListItem from '../pages/UpdateWishListItem';
import UpdateFamilyMember from '../pages/UpdateFamilyMember';

export default function Routes({ user }) {
  const [famId, setFamId] = useState();
  const [member, setMember] = useState();
  const [item, setItem] = useState({});
  const [itemId, setItemId] = useState();

  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home user={user} setMember={setMember} />}
        />
        <Route exact path="/AddFamily" component={() => <AddFamily />} />
        <Route
          exact
          path="/AddFamilyMember"
          component={() => (
            <AddFamilyMember setMember={setMember} famId={famId} />
          )}
        />
        <Route
          path="/AddWishListItem"
          component={() => <AddWishListItem member={member} />}
        />
        <Route
          path="/AllFamilies"
          component={() => <AllFamilies setfamonclick={setFamId} />}
        />
        <Route
          path="/FamilyView"
          component={() => <FamilyView setMember={setMember} famId={famId} />}
        />
        <Route
          path="/UserProfile"
          component={() => <UserProfile user={user} />}
        />
        <Route
          path="/FamilyMember"
          component={() => (
            <FamilyMember member={member} setItemId={setItemId} />
          )}
        />
        <Route
          path="/WishListItem"
          component={() => <WishListItem itemId={itemId} setItem={setItem} />}
        />
        <Route
          path="/UpdateWishListItem"
          component={() => <UpdateWishListItem item={item} setItem={setItem} />}
        />
        <Route
          path="/UpdateFamilyMember"
          component={() => <UpdateFamilyMember member={member} />}
        />
        <Route path="*" component={() => <Home user={user} />} />
      </Switch>
    </div>
  );
}
