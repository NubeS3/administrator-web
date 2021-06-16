import React from 'react';

const UserTable = ({
  items,
  setBanUserState,
  authToken,
  selected,
  setSelected
}) => {
  const findWithProperty = (arr, prop, value) => {
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  };

  const isSelected = (id) => findWithProperty(selected, 'id', id) !== -1;

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = items.map((n) => n);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleItemCheckboxClick = (e, fileItem) => {
    const selectedIndex = findWithProperty(selected, 'id', fileItem.id);

    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, fileItem);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      console.log(
        selected,
        selected.slice(selectedIndex + 1),
        selected.slice(0, selectedIndex)
      );
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1, selected.length + 1)
      );
    }
    // console.log(newSelected);
    setSelected(newSelected);
  };

  return (
    <div className="flex flex-col w-full mx-auto">
      <table className="w-full table-collapse">
        <thead>
          <tr>
            <th className="p-3 text-left bg-gray-200">
              <input
                type="checkbox"
                checked={selected.length === items.length}
                onClick={handleSelectAllClick}
              />
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
              ID
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
              Username
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
              Verification
            </th>
            {/* <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200 text-center">
              Choose Columns
            </th> */}
            <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200"></th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          {items?.map((item, index) => {
            const isItemSelected = isSelected(item.id);
            const labelId = `enhanced-table-checkbox-${item.id}`;
            return (
              <tr className="group cursor-pointer hover:bg-gray-100">
                <td className="p-3 ">
                  <input
                    aria-labelledby={labelId}
                    type="checkbox"
                    checked={isItemSelected}
                    onChange={(e) => handleItemCheckboxClick(e, item)}
                  />
                </td>
                <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                  <div className="inline-block mr-12">
                    <p className="text-lg">{item?.id || 'Holder'}</p>
                  </div>
                  {/* <DropdownMenu
                    setBanUserState={() => setBanUserState()}
                    authToken={authToken}
                    email={item?.email}
                  ></DropdownMenu> */}
                </td>
                <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                  {item?.email || 'Holder'}
                </td>
                <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                  Not verified
                </td>
                {/* <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "></td> */}
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
