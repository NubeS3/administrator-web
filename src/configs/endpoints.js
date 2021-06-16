const BASE = `${process.env.REACT_APP_BACK_END_URL}`;

const endpoints = {
  BASE,

  LOGIN_ADMIN: `${BASE}/admin/signin`,
  GET_ALL_USER: `${BASE}/admin/auth/users-list`,
  GET_ALL_ADMIN: `${BASE}/admin/auth/admins-list`,
  ADD_MOD: `${BASE}/admin/auth/mod`,
  ADD_USER: `${BASE}/admin/auth/user`,
  BAN_USER: `${BASE}/admin/auth/ban-user`,
  BAN_MOD: `${BASE}/admin/auth/disable-mod`
};

export default endpoints;
