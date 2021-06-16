const AddUserButton = ({ onClick }) => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />
      </svg>
      Add a mod
    </button>
  );
};

const UserTemplateButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      User templates
    </button>
  );
};

const AddMultipleUserButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      Add multiple users
    </button>
  );
};

const MultiFactorAuthenticateButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
      Multi-factor authentications
    </button>
  );
};

const DeleteUserButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6"
        />
      </svg>
      Disable a mod
    </button>
  );
};

const RefreshButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      Refresh
    </button>
  );
};

const ResetPasswordButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
      Reset password
    </button>
  );
};

const ExportUserButton = () => {
  return (
    <button
      type="button"
      class="flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Export users
    </button>
  );
};

const ListButtonAdmin = ({ onAddUserClick }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-1">
        <AddUserButton onClick={onAddUserClick} />
        <AddMultipleUserButton />
        <DeleteUserButton />
        <RefreshButton />
        <ResetPasswordButton />
        <ExportUserButton />
      </div>
    </div>
  );
};

export default ListButtonAdmin;
