import React from 'react';
import SideDrawerN from '../SideDrawer/SideDrawer';

const DeleteUser = ({ onClose }) => {
  return (
    <SideDrawerN>
      <div className="w-72">
        {/* <h1 className="text-2xl font-medium">Delete this user?</h1>
        <button
          className="self-start my-1 focus:outline-none"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}
      </div>
    </SideDrawerN>
  );
};

export default DeleteUser;
