import React from 'react';

const CreateUser = () => {
  return (
    <div className="w-screen">
      <p className="font-medium text-lg py-2 px-12">Add a user</p>
      <hr />
      <div>
        <p className="font-medium text-2xl px-12 py-10">Set up the basics</p>
        <p className="text-sm px-12 text-gray-400">
          To get started fill out some basic information about who you are
          adding as a user
        </p>
        <div className="px-12 py-12">
          <div>
            <label htmlFor="">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 block mt-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-2/3 block mt-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
        </div>
        <div className="px-12 mb-6">
          <div className="flex flex-col">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-400"
              />
              <span className="ml-2 text-gray-700">
                Automatic create password
              </span>
            </label>
          </div>
          {/*<div className="flex flex-col">*/}
          {/*  <label className="inline-flex items-center mt-3">*/}
          {/*    <input*/}
          {/*      type="checkbox"*/}
          {/*      className="form-checkbox h-5 w-5 text-blue-400"*/}
          {/*    />*/}
          {/*    <span className="ml-2 text-gray-700">*/}
          {/*      Require User To Change Their Password After Login*/}
          {/*    </span>*/}
          {/*  </label>*/}
          {/*</div>*/}
          <div className="flex flex-col">
            <label className="inline-flex items-center mt-3">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-400"
              />
              <span className="ml-2 text-gray-700">Send password to email</span>
            </label>
          </div>
        </div>
        <hr />
        <div className="px-12">
          <div className="mt-6">
            <button className="mr-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
