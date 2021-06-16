import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PortalFrame from '../../../components/PortalFrame';
import store from '../../../store';
import { getUserList } from '../../../store/userManage';
import ListButtonAdmin from './components/ListButtonAdmin';
import UserTable from './components/UserTable';

const UserManage = ({ authToken, userList }) => {
  useEffect(() => {
    store.dispatch(getUserList({ authToken: authToken, limit: 10, offset: 0 }));
    return () => {};
  }, []);

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
        <div className="flex flex-col justify-center items-start py-2 px-2">
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
  return { authToken, userList };
};

export default connect(mapStateToProps)(UserManage);
