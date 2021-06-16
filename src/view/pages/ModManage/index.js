import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PortalFrame from '../../../components/PortalFrame';
import store from '../../../store';
import { getUserList } from '../../../store/userManage';
import ListButtonAdmin from './components/ListButtonAdmin';
import ModTable from './components/ModTable';
import CreateMod from '../../../components/CreateUser/CreateMod';
import AddModSuccess from '../../../components/AddUserSuccess/AddModSuccess';
import SideDrawer from '../../../components/SideDrawer/SideDrawer';
import { clearState } from '../../../store/modManage';

const ModManage = ({ authToken, modList, isRejected, isFulfilled }) => {
  useEffect(() => {
    store.dispatch(getUserList({ authToken: authToken }));
    return () => {};
  }, []);

  const [createModState, setCreateModState] = useState(false);
  useEffect(() => {
    if (isFulfilled) {
      setCreateModState(true);
      store.dispatch(clearState());
    }
    if (isRejected) {
      setCreateModState(false);
      store.dispatch(clearState());
    }
  }, [isFulfilled, isRejected]);
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
          <SideDrawer>
            {createModState ? (
              <CreateMod authToken={authToken} />
            ) : (
              <AddModSuccess />
            )}
          </SideDrawer>
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
  const isFulfilled = state.modManage.isFulfilled;
  const isRejected = state.modManage.isRejected;
  return { authToken, modList, isFulfilled, isRejected };
};

export default connect(mapStateToProps)(ModManage);
