import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';

const UITestPage = (props) => {
  return (
    <div className="w-2/3">
      <SideDrawer id="ngu">
        <CreateUser></CreateUser>
      </SideDrawer>
    </div>
  );
};

export default UITestPage;
