import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PortalFrame from '../../../components/PortalFrame';
import ActiveUser from './pages/ActiveUser';
import BannedUser from './pages/BannedUser';

const UserManage = () => {
  const match = useRouteMatch();

  return (
    <PortalFrame>
      <div className="h-screen lg:block relative w-full">
        <Switch>
          <Route exact path={`${match.url}/`}>
            <ActiveUser />
          </Route>
          <Route exact path={`${match.url}/banned`}>
            <BannedUser />
          </Route>
        </Switch>
      </div>
    </PortalFrame>
  );
};

export default UserManage;
