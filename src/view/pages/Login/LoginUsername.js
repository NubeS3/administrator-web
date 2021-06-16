import React from 'react';
import { connect } from 'react-redux';
import { preValidateUsernameLogin } from '../../../helpers/preValidateLoginData';
import paths from '../../../configs/paths';
import store from '../../../store';

import { loginUsername } from '../../../store/authen';

const LoginUsername = (props) => {
  let [username, setUsername] = React.useState(props.loginUsername);
  let [err, setErr] = React.useState(' ');

  const handleUsernameSubmit = (e) => {
    e.preventDefault();

    let error = preValidateUsernameLogin(username);
    if (error !== '') {
      return setErr(error);
    }
    setErr('');

    store.dispatch(loginUsername({ username: username }));
    props.toggler();
    // props.history.push(paths.LOGIN_PASSWORD);
  };

  return (
    <>
      <form className="pt-4 w-5/6">
        <div className="flex flex-col text-sm">
          <p className="text-gray-600">NubeS3</p>
          <p className="text-xl font-bold mt-2">Sign in</p>
          <input
            type="text"
            autoFocus
            defaultValue={props.loginUsername}
            onChange={(e) => {
              setUsername(e.target.value);
              setErr('');
            }}
            className="w-full mt-2 px-1 py-1 border-b focus:border-green-600 focus:bg-blue-100 focus:outline-none"
            placeholder="Username"
            autocomplete="off"
          />
          <p className="mt-4">
            Not account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Create one!
            </a>
          </p>
          <a href="#" className="mt-4 text-blue-500 hover:underline">
            Sign in with security key
          </a>
          <button
            className="mt-8 px-8 py-1 bg-blue-600 hover:bg-indigo-600 text-white self-end"
            onClick={handleUsernameSubmit}
          >
            Next
          </button>
        </div>
      </form>
      <p className="text-red-500 my-4">{err}</p>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginUsername: state.authen.loginUsername
});

export default connect(mapStateToProps)(LoginUsername);
