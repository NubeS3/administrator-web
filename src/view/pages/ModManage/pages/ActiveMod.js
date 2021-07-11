import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CreateMod from '../../../../components/CreateUser/CreateMod';
import SideDrawer from '../../../../components/SideDrawer/SideDrawer';
import store from '../../../../store';
import { getModList } from '../../../../store/modManage';
import ListButtonAdmin from '../components/ListButtonAdmin';
import ModTable from '../components/ModTable';
import BanUser from '../../../../components/DeleteUserSideDrawer/BanUser';

const ActiveMod = ({ authToken, modList }) => {
  const [openCreateMod, setOpenCreateMod] = React.useState(false);
  const [openBanMod, setOpenBanMod] = React.useState(false);

  const [selected, setSelected] = React.useState([]);

  useEffect(() => {
    store.dispatch(getModList({ authToken: authToken, limit: 10, offset: 0 }));
    return () => {};
  }, []);

  const onAddModClick = () => {
    setOpenCreateMod(true);
  };

  const onBanModClick = () => {
    setOpenBanMod(true);
  };

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <div className="relative flex flex-col justify-start h-full px-3 md:w-full">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div className="flex items-end text-black dark:text-white text-4xl">
              Active Moderators
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
            banAction={true}
            selected={selected}
            onClose={() => setOpenBanMod(false)}
            setSelected={setSelected}
            user={selected?.length > 0 ? selected?.[0].username : ''}
            type={'mod'}
          />
        </SideDrawer>

        <ListButtonAdmin
          onAddUserClick={onAddModClick}
          onBanUserClick={onBanModClick}
          selected={selected}
        />
        <ModTable
          authToken={authToken}
          items={modList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const modList = state.modManage.modList;
  return { authToken, modList };
};

export default connect(mapStateToProps)(ActiveMod);
