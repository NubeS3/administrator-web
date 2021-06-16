import React from 'react';
import DropdownMenu from '../../../../components/DropdownMenu/DropdownMenu';

const ModTable = ({ items }) => {
  return (
    <div className="flex flex-col w-full mx-auto">
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
          {items?.map((item, index) => (
            <tr className="group cursor-pointer hover:bg-gray-100">
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                <div className="inline-block mr-12">
                  <p className="text-xl">{item?.id || 'Holder'}</p>
                </div>
                <DropdownMenu></DropdownMenu>
              </td>
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                {item?.username || 'Holder'}
              </td>
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                Unlicensed
              </td>
              <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap "></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ModTable;
