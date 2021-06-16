import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AppBar from '../../components/AdminAppBar/AppBar';

const LandingLayout = (props) => {
  return (
    <>
      <AppBar />
      <div {...props}>{props.children}</div>
    </>
  );
};

const LandingLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LandingLayout>
          <Component {...matchProps} />
        </LandingLayout>
      )}
    />
  );
};

export default LandingLayoutRoute;
