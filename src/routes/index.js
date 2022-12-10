// index for router
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddFamilyMember from '../pages/AddFamilyMember';
import Home from '../pages/Home';
import AddFamily from '../pages/AddFamily';

export default function Routes({ user, SetFamilyId }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={() => <Home user={user} />} />
        <Route path="*" component={() => <Home user={user} />} />
        <Route
          path="/AddFamily"
          component={() => <AddFamily user={user} SetFamilyId={SetFamilyId} />}
        />
        <Route path="/AddFamilyMember" component={() => <AddFamilyMember />} />
      </Switch>
    </div>
  );
}
/*
<Route path="/AddWishListItem" component={() => <AddWishListItem />} />
<Route path="/AllFamilies" component={() => <AllFamilies />} />
<Route path="/FamilyMember" component={() => <FamilyMember />} />
<Route path="/WishListItem" component={() => <WishListItem />} /> */
