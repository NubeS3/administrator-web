import React from 'react';

const AddUserSuccess = ({ type, newUser, onClose }) => {
  return (
    <div className="w-full">
      <div>
        <div className="px-12 py-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="font-bold text-2xl inline ml-3">
            {type === 'user'
              ? 'User added to active users'
              : 'Mod added to active moderators'}
          </p>
        </div>

        <p className="text-sm px-12 text-gray-400">
          {type === 'user'
            ? 'User will now appear in your user list'
            : 'Mod will now appear in your moderator list'}
        </p>
        <div className="px-12 py-12">
          <p className="font-bold text-sm mb-3">User Details</p>
          <p>
            ID number: <span>{newUser?.id}</span>
          </p>
          {type === 'user' ? (
            <p>
              Email: <span>{newUser?.email}</span>
            </p>
          ) : (
            <p>
              Username: <span>{newUser?.username}</span>
            </p>
          )}

          {/* <p>
            Password: <span>asdfjlkasdf</span>
          </p> */}
        </div>
        <hr />
        <div className="px-12">
          <div className="mt-6">
            <button
              onClick={onClose}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserSuccess;
