import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';
import AddUserSuccess from '../../components/AddUserSuccess/AddUserSuccess';
import BanUser from '../../components/DeleteUserSideDrawer/BanUser';
import SuccessBanUser from '../../components/DeleteUserSideDrawer/SuccessBanUser';

const UITestPage = (props) => {
  return (
    <div className="w-2/3">
      <SideDrawer>
        <BanUser></BanUser>
      </SideDrawer>
    </div>
  );
};

export default UITestPage;
