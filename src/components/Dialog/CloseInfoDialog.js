import React from 'react';

const CloseInfo = ({ onClose }) => {
  return (
    <dialog open={true}>
      <div className="fixed z-10 inset-0 overflow-auto bg-gray-500 bg-opacity-70">
        <div className="flex flex-col mx-auto mt-20 justify-center max-w-xl w-auto px-4 bg-white shadow rounded-sm my-auto text-gray-600">
          <div className="flex flex-col items-center">
            <div className="flex flex-row w-full">
              <div className="flex flex-row w-full justify-center py-4">
                <h1 className="text-2xl font-medium">
                  Are you sure you want to close?
                </h1>
              </div>
              <button
                className="self-start my-2 focus:outline-none"
                onClick={onClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 mt-2"
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
            <div className="flex flex-col my-6 justify-center items-center text-sm">
              <p className="text-base">
                All the info you've entered for your user will be lost.
              </p>
              <div className="h-10" />
              <div className="col-span-5 flex flex-row justify-center">
                <button className="rounded-sm py-2 px-4 mr-2 w-24 border border-transparent text-sm font-medium text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none">
                  Yes
                </button>
                <button
                  className="rounded-sm py-2 px-4 w-24 border border-transparent text-sm font-medium text-black bg-gray-300 hover:bg-gray-400 focus:outline-none"
                  onClick={onClose}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default CloseInfo;
