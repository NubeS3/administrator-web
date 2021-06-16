import React from 'react';
import SideDrawerN from '../SideDrawer/SideDrawer';

const BanUser = ({ close, onBan }) => {
  return (
    <div className="flex flex-col w-96">
      <div className="flex flex-row justify-between px-4 py-4">
        <h1 className="text-2xl font-medium">Ban this user?</h1>
        <button className="self-start my-1 focus:outline-none" onClick={close}>
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
        </button>
      </div>
      <p className="px-5">
        Are you sure want to ban this user? You can unbanned users later.
      </p>
      <button
        className="absolute bottom-10 ml-6 py-2 px-4 bg-indigo-400 text-white w-24 transition ease-in duration-200 hover:bg-indigo-600 text-center text-base focus:outline-none rounded-sm"
        onClick={onBan}
      >
        Ban user
      </button>
    </div>
  );
};

export default BanUser;
