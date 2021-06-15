import React from 'react';

const PageFrame = (props) => {
  return (
    <>
      <div {...props}>{props.children}</div>
    </>
  );
};

export default PageFrame;
