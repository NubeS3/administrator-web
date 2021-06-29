import React, { useEffect, useState } from 'react';
import UserManagementCardDropdown from './UserManagementCardDropdown';
import CreateUser from '../../components/CreateUser/CreateUser';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BanUser from '../../components/DeleteUserSideDrawer/BanUser';
import { connect } from 'react-redux';

const UserManagementCard = ({ authToken }) => {
  const [openCreateUser, setOpenCreateUser] = useState(false);
  const [openBanUser, setOpenBanUser] = useState(false);

  const onAddUserClick = () => {
    setOpenCreateUser(true);
  };

  const onBanUserClick = () => {
    setOpenBanUser(true);
  };

  return (
    <div className=" rounded overflow-hidden border xl:w-3/12 lg:w-4/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
          <span className="pt-1 ml-2 font-medium text-sm">User management</span>
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
      </div>
      <hr />
      <div className="px-3 pb-2">
        <div className="mt-6 mb-6">
          <p className="font-bold text-2xl">User management</p>
        </div>
        <div className="mb-16">
          Add, Edit, Remove user account, Reset Password
        </div>
        <div className="mb-2 relative mb-20">
          <div>
            <button
              className="mr-5 bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded"
              onClick={onAddUserClick}
            >
              Add user
            </button>
            <button className="mr-5 bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded">
              Edit a user
            </button>
            <button className="mr-5 bg-gray-100 hover:bg-gray-200 text-black font-medium py-1.5 px-4 rounded">
              <UserManagementCardDropdown></UserManagementCardDropdown>
            </button>
          </div>
        </div>
      </div>
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
          selected={[]}
          type={'user'}
        />
      </SideDrawer>
    </div>
  );
};

const mapStateToProps = (state) => {
  const authToken = state.authen.authToken;
  return { authToken };
};

export default connect(mapStateToProps)(UserManagementCard);
