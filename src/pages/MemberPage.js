import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';

const MemberPage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default MemberPage;
