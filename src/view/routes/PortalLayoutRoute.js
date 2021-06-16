import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PortalAppBar from '../../components/AdminAppBar/PortalAppBar';

const PortalLayout = (props) => {
  return (
    <>
      <PortalAppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

const PortalLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <PortalLayout>
          <Component {...matchProps} />
        </PortalLayout>
      )}
    />
  );
};

export default PortalLayoutRoute;
