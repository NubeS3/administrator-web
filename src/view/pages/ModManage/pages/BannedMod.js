import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CreateMod from '../../../../components/CreateUser/CreateMod';
import SideDrawer from '../../../../components/SideDrawer/SideDrawer';
import store from '../../../../store';
import { getBannedModList } from '../../../../store/modManage';
// import ListButtonAdmin from '../components/ListButtonAdmin';
import ModTable from '../components/ModTable';
import BanUser from '../../../../components/DeleteUserSideDrawer/BanUser';
import BanButton from '../components/BanButton';

const BannedMod = ({ authToken, bannedModList }) => {
  const [openCreateMod, setOpenCreateMod] = useState(false);
  const [openBanMod, setOpenBanMod] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    store.dispatch(
      getBannedModList({ authToken: authToken, limit: 10, offset: 0 })
    );
    return () => {};
  }, []);

  const onAddModClick = () => {
    setOpenCreateMod(true);
  };

  const onUnbanModClick = () => {
    setOpenBanMod(true);
  };

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div className="flex items-end text-black dark:text-white text-4xl">
              Banned Moderators
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col py-2 px-2">
        <SideDrawer
          show={openCreateMod}
          setShow={() => setOpenCreateMod(true)}
          setHide={() => setOpenCreateMod(false)}
        >
          <CreateMod
            authToken={authToken}
            onCancel={() => setOpenCreateMod(false)}
            onClose={() => setOpenCreateMod(false)}
          />
        </SideDrawer>
        <SideDrawer
          show={openBanMod}
          setShow={() => setOpenBanMod(true)}
          setHide={() => setOpenBanMod(false)}
        >
          <BanUser
            banAction={false}
            selected={selected}
            onClose={() => setOpenBanMod(false)}
            setSelected={setSelected}
            user={selected?.length > 0 ? selected?.[0].username : ''}
            type={'mod'}
          />
        </SideDrawer>
        <BanButton selected={selected} onUnbanUserClick={onUnbanModClick} />
        {/* <ListButtonAdmin
          onAddModClick={onAddModClick}
          onBanModClick={onBanModClick}
          selected={selected}
        /> */}
        <ModTable
          authToken={authToken}
          items={bannedModList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const bannedModList = state.modManage.bannedModList;
  return { authToken, bannedModList };
};

export default connect(mapStateToProps)(BannedMod);
