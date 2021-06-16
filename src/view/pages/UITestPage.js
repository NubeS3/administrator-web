import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';
import AddUserSuccess from '../../components/AddUserSuccess/AddUserSuccess';

const UITestPage = (props) => {
  return (
    <div className="w-2/3">
      <SideDrawer id="ngu">
        <AddUserSuccess></AddUserSuccess>
      </SideDrawer>
    </div>
  );
};

export default UITestPage;
