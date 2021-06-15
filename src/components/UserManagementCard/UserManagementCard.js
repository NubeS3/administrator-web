import React from 'react';
import UserManagementCardDropdown from './UserManagementCardDropdown';

const UserManagementCard = () => {
  return (
    <div className=" rounded overflow-hidden border lg:w-4/12 md:w-6/12 bg-white mx-3 md:mx-0 lg:mx-0">
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
            <button className="mr-5 bg-gray-100 hover:bg-gray-200 text-black font-medium py-2 px-4 rounded">
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
    </div>
  );
};

export default UserManagementCard;
