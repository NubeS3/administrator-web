import React from 'react';
import AdminAppBar from '../AdminAppBar';

const PageFrame = (props) => {
  return (
    <>
      <AdminAppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

export default PageFrame;
