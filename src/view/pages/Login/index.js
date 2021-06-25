import React, { useState } from 'react';
import { connect } from 'react-redux';
import paths from '../../../configs/paths';
import store from '../../../store';

import LoginPassword from './LoginPassword';
import LoginUsername from './LoginUsername';

const Login = (props) => {
  const [toggleEmail, setToggleEmail] = useState(true);
  const emailToggler = () => {
    setToggleEmail(!toggleEmail);
  };
  return (
    <div className="w-screen h-screen pt-40 bg-login">
      <div className="mx-auto flex flex-col items-center justify-center max-w-md py-4 px-8 bg-white shadow-lg rounded-lg">
        {/* <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1> */}
        {toggleEmail ? (
          <LoginUsername toggler={emailToggler} />
        ) : (
          <LoginPassword toggler={emailToggler} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loginUsername: state.authen.loginUsername
});

export default connect(mapStateToProps)(Login);
