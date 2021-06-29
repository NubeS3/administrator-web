import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import { disableMod } from '../../store/modManage';
import { clearUserState, disableUser } from '../../store/userManage';
import SuccessBanUser from './SuccessBanUser';

const BanUser = ({
  authToken,
  onClose,
  selected,
  user,
  setSelected,
  type,
  isUserFulfilled,
  isUserRejected,
  isModFulfilled,
  isModRejected
}) => {
  const [success, setSuccess] = useState(false);
  const onBan = () => {
    if (type === 'user') {
      store.dispatch(
        disableUser({ authToken: authToken, email: selected[0].email })
      );
    }
    if (type === 'mod') {
      store.dispatch(
        disableMod({ authToken: authToken, username: selected[0].username })
      );
    }
  };

  useEffect(() => {
    if (isUserFulfilled) {
      setSuccess(true);
      store.dispatch(clearUserState());
      setSelected([]);
    }
    if (isUserRejected) {
      setSuccess(false);
      store.dispatch(clearUserState());
    }
  }, [isUserFulfilled, isUserRejected]);

  useEffect(() => {
    if (isModFulfilled) {
      setSuccess(true);
      store.dispatch(clearUserState());
      setSelected([]);
    }
    if (isModRejected) {
      setSuccess(false);
      store.dispatch(clearUserState());
    }
  }, [isModFulfilled, isModRejected]);

  return (
    <>
      {!success ? (
        <div className="flex flex-col w-96">
          <div className="flex flex-row justify-between px-4 py-4">
            <h1 className="text-2xl font-medium">
              Ban {user || `this ${type}`}?
            </h1>
            <button
              className="self-start my-1 focus:outline-none"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <p className="px-5">
            Are you sure want to ban {user || 'user'} as a {type}? You can
            unbann this {type} later.
          </p>
          <button
            className="absolute bottom-10 ml-6 py-2 px-4 bg-indigo-400 text-white w-24 transition ease-in duration-200 hover:bg-indigo-600 text-center text-base focus:outline-none rounded-sm"
            onClick={onBan}
          >
            Ban user
          </button>
        </div>
      ) : (
        <SuccessBanUser close={onClose} user={type} />
      )}{' '}
    </>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const isUserFulfilled = state.userManage.isFulfilled;
  const isUserRejected = state.userManage.isRejected;
  const isModFulfilled = state.modManage.isFulfilled;
  const isModRejected = state.modManage.isRejected;
  return {
    authToken,
    isUserFulfilled,
    isUserRejected,
    isModFulfilled,
    isModRejected
  };
};

export default connect(mapStateToProps)(BanUser);
