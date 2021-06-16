import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';
import AddUserSuccess from '../../components/AddUserSuccess/AddUserSuccess';

const UITestPage = (props) => {
  return (
    <div>
      <SideDrawer>
        <DrawerLayout>abcszzzz</DrawerLayout>
      </SideDrawer>
    </div>
  );
};

const DrawerLayout = ({ close, children }) => {
  return (
    <div>
      {/* ....UI o day */}
      <button onClick={close}>{children}</button>;
    </div>
  );
};

export default UITestPage;
