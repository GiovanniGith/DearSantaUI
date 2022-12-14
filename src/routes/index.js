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

export default function Routes({ user }) {
  const [famId, setFamId] = useState();

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
          component={() => <AllFamilies setFamId={setFamId} />}
        />
        <Route
          path="/FamilyView"
          component={() => <FamilyView famId={famId} />}
        />
        <Route path="/UserProfile" component={() => <UserProfile />} />
        <Route path="*" component={() => <Home user={user} />} />
      </Switch>
    </div>
  );
}
/*
<Route path="/FamilyMember" component={() => <FamilyMember />} />
<Route path="/WishListItem" component={() => <WishListItem />} /> */
