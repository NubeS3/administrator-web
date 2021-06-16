import React, { useState } from 'react';
import { connect } from 'react-redux';
import paths from '../../../configs/paths';
import store from '../../../store';

import LoginPassword from './LoginPassword';
import LoginUsername from './LoginUsername';
import PageFrame from '../../../components/PageFrame';

const Login = (props) => {
  const [toggleEmail, setToggleEmail] = useState(true);
  const emailToggler = () => {
    setToggleEmail(!toggleEmail);
  };
  return (
    <PageFrame>
      <div className="mx-auto flex flex-col items-center justify-center max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-40">
        {/* <h1 className="pt-6 pb-8 text-2xl">Sign in to your NubeS3 account</h1> */}
        {toggleEmail ? (
          <LoginUsername toggler={emailToggler} />
        ) : (
          <LoginPassword toggler={emailToggler} />
        )}
      </div>
    </PageFrame>
  );
};

const mapStateToProps = (state) => ({
  loginUsername: state.authen.loginUsername
});

export default connect(mapStateToProps)(Login);
