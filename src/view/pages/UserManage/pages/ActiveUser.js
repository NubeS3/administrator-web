import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CreateUser from '../../../../components/CreateUser/CreateUser';
import SideDrawer from '../../../../components/SideDrawer/SideDrawer';
import store from '../../../../store';
import { getUserList } from '../../../../store/userManage';
import ListButtonAdmin from '../components/ListButtonAdmin';
import UserTable from '../components/UserTable';
import BanUser from '../../../../components/DeleteUserSideDrawer/BanUser';

const ActiveUser = ({ authToken, userList }) => {
  const [openCreateUser, setOpenCreateUser] = useState(false);
  const [openBanUser, setOpenBanUser] = useState(false);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    store.dispatch(getUserList({ authToken: authToken, limit: 20, offset: 0 }));
    return () => {};
  }, []);

  const onAddUserClick = () => {
    setOpenCreateUser(true);
  };

  const onBanUserClick = () => {
    setOpenBanUser(true);
  };

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <div className="relative flex flex-col justify-start h-full md:w-full">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div className="flex items-end text-black dark:text-white text-4xl">
              Active Users
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
            onClose={() => setOpenBanUser(false)}
            selected={selected}
            setSelected={setSelected}
            user={selected?.length > 0 ? selected?.[0].email : ''}
            type={'user'}
          />
        </SideDrawer>
        <ListButtonAdmin
          onAddUserClick={onAddUserClick}
          onBanUserClick={onBanUserClick}
          selected={selected}
        />
        <UserTable
          authToken={authToken}
          items={userList}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  const userList = state.userManage.userList;
  return { authToken, userList };
};

export default connect(mapStateToProps)(ActiveUser);
