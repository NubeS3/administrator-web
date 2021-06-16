import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';
import CreateUser from '../../components/CreateUser/CreateUser';
import AddUserSuccess from '../../components/AddUserSuccess/AddUserSuccess';
import PageFrame from '../../components/PageFrame';

const UITestPage = (props) => {
  return (
    <div>
      <PageFrame>
        <SideDrawer mainPage={<div>abcs</div>}>
          <DrawerLayout></DrawerLayout>
        </SideDrawer>
        <div>test</div>
      </PageFrame>
    </div>
  );
};

const DrawerLayout = ({ close }) => {
  return (
    <div>
      {/* ....UI  các thứ ở đây */}
      <button onClick={close}>gì gì đó</button>;
    </div>
  );
};


export default UITestPage;
