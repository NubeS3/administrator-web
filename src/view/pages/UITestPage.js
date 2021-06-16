import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';

const UITestPage = (props) => {
  return (
    <div>
      <SideDrawer>
        <CustomButton1>abcszzzz</CustomButton1>
      </SideDrawer>
    </div>
  );
};

const CustomButton1 = ({ close, children }) => {
  return (
    <div>
      {/* ....ui owr ddy nhe */}
      <button onClick={close}>{children}</button>;
    </div>
  );
};

export default UITestPage;
