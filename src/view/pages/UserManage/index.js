import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CreateUser from '../../../components/CreateUser/CreateUser';
import AddUserSuccess from '../../../components/AddUserSuccess/AddUserSuccess';
import SideDrawer from '../../../components/SideDrawer/SideDrawer';
import PortalFrame from '../../../components/PortalFrame';
import store from '../../../store';
import { clearState, getUserList } from '../../../store/userManage';
import ListButtonAdmin from './components/ListButtonAdmin';
import UserTable from './components/UserTable';

const UserManage = ({ authToken, userList, isRejected, isFulfilled }) => {
  useEffect(() => {
    store.dispatch(getUserList({ authToken: authToken }));
    return () => {};
  }, []);

  const [createUserState, setCreateUserState] = useState(false);
  useEffect(() => {
    if (isFulfilled) {
      setCreateUserState(true);
      store.dispatch(clearState());
    }
    if (isRejected) {
      setCreateUserState(false);
      store.dispatch(clearState());
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
          <SideDrawer>
            {createUserState ? (
              <AddUserSuccess />
            ) : (
              <CreateUser authToken={authToken} />
            )}
          </SideDrawer>
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
  console.log(isFulfilled, isRejected);
  return { authToken, userList, isFulfilled, isRejected };
};

export default connect(mapStateToProps)(UserManage);
