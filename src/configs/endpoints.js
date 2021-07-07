const BASE = `${process.env.REACT_APP_BACK_END_URL}`;

const endpoints = {
  BASE,

  LOGIN_ADMIN: `${BASE}/admin/signin`,
  GET_ALL_USER: `${BASE}/admin/auth/users-list`,
  GET_NO_BAN_USER: `${BASE}/admin/auth/users-list/no-ban`,
  GET_BANNED_USER: `${BASE}/admin/auth/users-list/banned`,
  GET_ALL_ADMIN: `${BASE}/admin/auth/admins-list`,
  // GET_ALL_ADMIN: `${BASE}/admin/auth/admins-list/no-ban`,
  // GET_ALL_ADMIN: `${BASE}/admin/auth/admins-list/banned`,
  ADD_MOD: `${BASE}/admin/auth/mod`,
  ADD_USER: `${BASE}/admin/auth/user`,
  BAN_USER: `${BASE}/admin/auth/ban-user`,
  BAN_MOD: `${BASE}/admin/auth/disable-mod`,
  GET_ERROR_LOG: `${BASE}/admin/auth/err-log`,
  GET_SYSTEM_BANDWIDTH: `${BASE}/admin/auth/bandwidth-report/system`,
  GET_SYSTEM_REQ_COUNT: `${BASE}/admin/auth/req-log/count/system`
};

export default endpoints;
