import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PortalFrame from '../../../components/PortalFrame';
import store from '../../../store';
import { getUserList } from '../../../store/userManage';
import ListButtonAdmin from './components/ListButtonAdmin';
import ModTable from './components/ModTable';

const UserManage = ({ authToken, modList }) => {
  useEffect(() => {
    store.dispatch(getUserList({ authToken: authToken }));
    return () => {};
  }, []);

  return (
    <PortalFrame>
      <div className="h-screen lg:block relative w-full">
        <header className="w-full h-16 flex items-center justify-between">
          <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
            <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
              <div className="flex items-end text-black dark:text-white text-4xl">
                Active Moderators
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col justify-center items-center py-2 px-2">
          <ListButtonAdmin />
          <ModTable items={modList} />
        </div>
      </div>
    </PortalFrame>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const modList = state.modManage.modList;
  return { authToken, modList };
};

export default connect(mapStateToProps)(UserManage);
