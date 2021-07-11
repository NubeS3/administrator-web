import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CreateUser from '../../../../components/CreateUser/CreateUser';
import SideDrawer from '../../../../components/SideDrawer/SideDrawer';
import store from '../../../../store';
import { getUserList, getBannedUserList } from '../../../../store/userManage';
import ListButtonAdmin from '../components/ListButtonAdmin';
import UserTable from '../components/UserTable';
import BanUser from '../../../../components/DeleteUserSideDrawer/BanUser';
import BanButton from '../components/BanButton';

const BannedUser = ({ authToken, bannedUserList, isRejected, isFulfilled }) => {
  const [openCreateUser, setOpenCreateUser] = useState(false);
  const [openBanUser, setOpenBanUser] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    store.dispatch(
      getBannedUserList({ authToken: authToken, limit: 10, offset: 0 })
    );
    return () => {};
  }, []);

  const onAddUserClick = () => {
    setOpenCreateUser(true);
  };

  const onUnbanUserClick = () => {
    setOpenBanUser(true);
  };

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <div className="relative flex flex-col justify-start h-full md:w-full">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div className="flex items-end text-black dark:text-white text-4xl">
              Banned Users
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col py-2 px-2">
        <SideDrawer
          show={openCreateUser}
          setShow={() => setOpenCreateUser(true)}
          setHide={() => setOpenCreateUser(false)}
        >
          <CreateUser
            authToken={authToken}
            onCancel={() => setOpenCreateUser(false)}
            onClose={() => setOpenCreateUser(false)}
          />
        </SideDrawer>
        <SideDrawer
          show={openBanUser}
          setShow={() => setOpenBanUser(true)}
          setHide={() => setOpenBanUser(false)}
        >
          <BanUser
            banAction={false}
            onClose={() => setOpenBanUser(false)}
            selected={selected}
            setSelected={setSelected}
            user={selected?.length > 0 ? selected?.[0].email : ''}
            type={'user'}
          />
        </SideDrawer>
        {/* <ListButtonAdmin
          onAddUserClick={onAddUserClick}
          onBanUserClick={onBanUserClick}
          selected={selected}
        /> */}
        <BanButton selected={selected} onUnbanUserClick={onUnbanUserClick} />
        <UserTable
          authToken={authToken}
          items={bannedUserList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const bannedUserList = state.userManage.bannedUserList;
  const isFulfilled = state.userManage.isFulfilled;
  const isRejected = state.userManage.isRejected;
  console.log(isFulfilled, isRejected);
  return { authToken, bannedUserList, isFulfilled, isRejected };
};

export default connect(mapStateToProps)(BannedUser);
