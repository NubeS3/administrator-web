const preValidateUsernameLogin = (username = '') => {
  if (username === '') {
    return 'Please enter your username';
  }

  // if (!/^[a-zA-Z][a-zA-Z0-9_\.]{7,24}$/.test(username)) {
  //   return 'Invalid username. Try again.';
  // }

  return '';
};

const preValidatePasswordLogin = ({ password = '' }) => {
  if (password === '') {
    return 'Please enter password';
  }

  // if (password.length < 8) {
  //   return 'Invalid username or password. Try again.';
  // }

  return '';
};

export { preValidateUsernameLogin, preValidatePasswordLogin };
