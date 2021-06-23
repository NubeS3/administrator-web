import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PortalFrame from '../../../components/PortalFrame';
import ActiveMod from './pages/ActiveMod';
import BannedMod from './pages/BannedMod';

const ModManage = () => {
  const match = useRouteMatch();

  return (
    <PortalFrame>
      <div className="h-screen lg:block relative w-full">
        <Switch>
          <Route exact path={`${match.url}/`}>
            <ActiveMod />
          </Route>
          <Route exact path={`${match.url}/banned`}>
            <BannedMod />
          </Route>
        </Switch>
      </div>
    </PortalFrame>
  );
};

export default ModManage;
