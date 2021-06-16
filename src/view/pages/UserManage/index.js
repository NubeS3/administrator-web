import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CreateUser from '../../../components/CreateUser/CreateUser';
import AddUserSuccess from '../../../components/AddUserSuccess/AddUserSuccess';
import SideDrawerN from '../../../components/SideDrawer/SideDrawer';
import PortalFrame from '../../../components/PortalFrame';
import store from '../../../store';
import { getUserList } from '../../../store/userManage';
import ListButtonAdmin from './components/ListButtonAdmin';
import UserTable from './components/UserTable';

const UserManage = ({ authToken, userList, isRejected, isFulfilled }) => {
  const [createUserState, setCreateUserState] = useState(false);
  useEffect(() => {
    store.dispatch(getUserList({ authToken: authToken }));
    return () => {};
  }, []);

  useEffect(() => {
    if (isFulfilled) {
      setCreateUserState(true);
    }
    if (isRejected) {
      setCreateUserState(false);
    }
  }, [isFulfilled, isRejected]);

  return (
    <PortalFrame>
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-4xl">
                Active Users
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-center items-center py-2 px-2">
          <SideDrawerN>
            {createUserState ? (
              <AddUserSuccess />
            ) : (
              <CreateUser authToken={authToken} />
            )}
          </SideDrawerN>
          <ListButtonAdmin />
          <UserTable items={userList} />
        </div>
      </div>
    </PortalFrame>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const userList = state.userManage.userList;
  const isFulfilled = state.userManage.isFulfilled;
  const isRejected = state.userManage.isRejected;
  return { authToken, userList, isFulfilled, isRejected };
};

export default connect(mapStateToProps)(UserManage);
