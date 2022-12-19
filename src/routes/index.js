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

export default function Routes({ user }) {
  const [famId, setFamId] = useState();
  const [memId, setMemId] = useState();
  const [itemId, setItemId] = useState();

  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route exact path="/AddFamily" component={() => <AddFamily />} />
        <Route
          exact
          path="/AddFamilyMember"
          component={() => <AddFamilyMember famId={famId} />}
        />
        <Route path="/AddWishListItem" component={() => <AddWishListItem />} />
        <Route
          path="/AllFamilies"
          component={() => <AllFamilies setfamonclick={setFamId} />}
        />
        <Route
          path="/FamilyView"
          component={() => <FamilyView setMemId={setMemId} famId={famId} />}
        />
        <Route path="/UserProfile" component={() => <UserProfile />} />
        <Route
          path="/FamilyMember"
          component={() => <FamilyMember memId={memId} setItemId={setItemId} />}
        />
        <Route
          path="/WishListItem"
          component={() => <WishListItem itemId={itemId} />}
        />{' '}
        */
        <Route path="*" component={() => <Home user={user} />} />
      </Switch>
    </div>
  );
}
