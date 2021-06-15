import React from 'react';
import DropdownMenu from '../../../../components/DropdownMenu/DropdownMenu';

const UserTable = () => {
  return (
    <div className="flex flex-col 2xl:max-w-2xl mx-auto">
      <table className="w-full table-collapse">
        <thead>
          <tr>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
              Display Name
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
              Username
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
              Licenses
            </th>
            <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200 text-center">
              Choose Columns
            </th>
            <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200"></th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr className="group cursor-pointer hover:bg-gray-100">
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              <div className="inline-block mr-12">
                <p className="text-xl">Van A</p>
              </div>
              <DropdownMenu></DropdownMenu>
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              nguyenvana@gmail.com
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
              Unlicensed
            </td>
            <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
