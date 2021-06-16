import React from 'react';
import AppBar from '../AdminAppBar/AppBar';
const PageFrame = (props) => {
  return (
    <>
      <AppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

export default PageFrame;
