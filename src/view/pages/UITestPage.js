import React, { useState } from 'react';

import SideDrawer from '../../components/SideDrawer/SideDrawer';

const UITestPage = (props) => {
  return (
    <div>
      <SideDrawer id="ngu">
        <button onClick={SideDrawer.close}>abcs</button>
      </SideDrawer>
    </div>
  );
};

export default UITestPage;
