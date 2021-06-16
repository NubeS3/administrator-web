import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PortalFrame from '../../../components/PortalFrame';
import store from '../../../store';
import { getModList } from '../../../store/modManage';
import ListButtonAdmin from './components/ListButtonAdmin';
import ModTable from './components/ModTable';
import CreateMod from '../../../components/CreateUser/CreateMod';
import SideDrawerN from '../../../components/SideDrawer/SideDrawer';
import AddUserSuccess from '../../../components/AddUserSuccess/AddUserSuccess';

const ModManage = ({ authToken, modList, isFulfilled, isRejected }) => {
  const [openCreateMod, setOpenCreateMod] = React.useState(false);
  const [openBanMod, setOpenBanMod] = React.useState(false);
  const [createModState, setCreateModState] = React.useState(false);
  const [banModState, setBanModState] = React.useState(false);

  useEffect(() => {
    store.dispatch(getModList({ authToken: authToken, limit: 10, offset: 0 }));
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
          <SideDrawerN>
            {openCreateMod ? (
              <AddUserSuccess />
            ) : (
              <CreateMod authToken={authToken} />
            )}
          </SideDrawerN>
          <ListButtonAdmin />
          <ModTable authToken={authToken} items={modList} />
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
