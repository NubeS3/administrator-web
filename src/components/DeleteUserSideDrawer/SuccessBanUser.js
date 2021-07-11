import React from 'react';

const SuccessBanUser = ({ close, user, banAction }) => {
  return (
    <div className="flex flex-col w-96">
      <div className="flex flex-row justify-between px-4 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-7"
          viewBox="0 0 20 20"
          fill="green"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        {banAction ? (
          <h1 className="text-2xl font-medium">{user} has been banned</h1>
        ) : (
          <h1 className="text-2xl font-medium">{user} has been unbanned</h1>
        )}
        <button className="self-start focus:outline-none" onClick={close}>
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
      {banAction ? <p className="px-5">You can unban them later.</p> : null}
      <button
        className="absolute bottom-10 left-8 py-2 px-4 bg-gray-400 text-black w-24 transition ease-in duration-200 hover:bg-gray-600 text-center text-base focus:outline-none rounded-sm"
        onClick={close}
      >
        Close
      </button>
    </div>
  );
};

export default SuccessBanUser;
