import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { preValidatePasswordLogin } from '../../../helpers/preValidateLoginDate';
import paths from '../../../configs/paths';
import store from '../../../store';
import {
  changeAdminLoginUsername,
  clearState,
  adminLogin
} from '../../../store/authen';
import { useHistory } from 'react-router';

const LoginPassword = ({
  loginUsername,
  errMessage,
  isRejected,
  isFulfilled,
  toggler
}) => {
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const history = useHistory();
  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    let error = preValidatePasswordLogin({ password: pass });
    if (error) {
      return setErr(error);
    }
    setErr('');
    store.dispatch(adminLogin({ username: loginUsername, password: pass }));
  };

  useEffect(() => {
    if (isRejected) {
      setErr(errMessage.error);
      store.dispatch(clearState());
      return;
    }
    if (isFulfilled) {
      store.dispatch(clearState());
      history.push(paths.BASE);
    }
    return () => {
      // cleanup
    };
  }, [isRejected, isFulfilled]);
  const changeLoginUsername = () => {
    store.dispatch(changeAdminLoginUsername());
    toggler();
    // props.history.push(paths.LOGIN_USERNAME);
  };

  return (
    <div className="flex flex-col pt-4 w-5/6 text-sm">
      <p className="text-gray-600">NubeS3</p>
      <div className="flex mt-4 items-center">
        <button className="focus:outline-none" onClick={changeLoginUsername}>
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <p className="ml-2">{loginUsername}</p>
      </div>
      <p className="mt-4 text-xl font-bold">Enter password</p>
      <form onSubmit={handlePasswordSubmit} className="flex flex-col">
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          className="w-full mt-2 px-1 py-1 border-b border-green-600 focus:bg-blue-100 focus:outline-none"
          placeholder="Password"
          autocomplete="off"
          autoFocus
        />
        <div role="group" className="mt-4 flex items-center">
          <input type="checkbox" id="keep-signin" />
          <label htmlFor="keep-signin">&nbsp;Keep me sign in</label>
          <br />
        </div>
        <a href="#" className="mt-4 text-blue-600">
          Forgot password?
        </a>
        <button
          type="submit"
          className="mt-4 px-8 py-1 bg-blue-600 hover:bg-indigo-600 text-white self-end"
        >
          Sign in
        </button>
      </form>
      <p className="text-red-500 mt-6 text-center">{err}</p>
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.authen.err);
  return {
    errMessage: state.authen.err,
    loginUsername: state.authen.loginUsername,
    isLoggingIn: state.authen.isLoggingIn,
    isFulfilled: state.authen.isFulfilled,
    isRejected: state.authen.isRejected
  };
};

export default connect(mapStateToProps)(LoginPassword);
