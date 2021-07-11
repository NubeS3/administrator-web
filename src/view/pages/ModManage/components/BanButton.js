const DeleteUserButton = ({ label, onClick, selected }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!!(selected?.length > 1)}
      className={
        selected?.length > 1
          ? 'flex pl-2 py-2 px-4 bg-white text-gray-300 transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm cursor-not-allowed'
          : 'flex pl-2 py-2 px-4 bg-white text-black transition ease-in duration-200 hover:bg-gray-100 text-center text-base focus:outline-none rounded-sm'
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-6 mr-1 text-lockmara"
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
      {label}
    </button>
  );
};

const BanButton = ({ onUnbanUserClick, selected }) => {
  return (
    <div className="flex flex-col align-start mb-2">
      <div className="flex flex-row flex-1">
        {selected?.length > 0 ? (
          <DeleteUserButton
            label={'Unban mod'}
            onClick={onUnbanUserClick}
            selected={selected}
          />
        ) : (
          <DeleteUserButton label={'Unban a mod'} />
        )}
      </div>
    </div>
  );
};

export default BanButton;
