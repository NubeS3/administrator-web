import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../../../../store';
import { getUserTotalBandwidth } from '../../../../store/report';

const UsageReport = ({
  authToken,
  uid,
  userList = [],
  bannedUserList,
  userBandwidth
}) => {
  useEffect(() => {
    let fromDate = new Date();
    let toDate = new Date();

    if (fromDate.getMonth() !== 0) {
      toDate.setMonth(toDate.getMonth() - 1);
    } else {
      toDate.setMonth(11);
      toDate.setFullYear(fromDate.getFullYear() - 1);
    }
    fromDate = fromDate.getTime();
    toDate = toDate.getTime();

    userList.forEach((user) => {
      store.dispatch(
        getUserTotalBandwidth({
          authToken: authToken,
          uid: uid,
          from: fromDate,
          to: toDate
        })
      );
    });

    return () => {};
  }, []);

  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <div className="relative flex flex-col justify-start h-full md:w-full">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div className="flex items-end text-black dark:text-white text-4xl">
              Usage
            </div>
          </div>
        </div>
      </header>
      <div className="container px-5 mt-4">
        <div className="flex items-end text-black dark:text-white text-xl mb-4">
          User Bandwidth (past month)
        </div>
        <table className="w-full table-collapse">
          <thead>
            <tr>
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                #
              </th>
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                Uid
              </th>
              <th className="text-sm text-right uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                Total Bandwidth (KB)
              </th>
              <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody className="align-baseline overflow-y-scroll w-full">
            {userBandwidth?.map((item, index) => {
              return (
                <tr className="group cursor-pointer hover:bg-gray-100">
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    <div className="inline-block mr-12">
                      <p className="text-lg">{index + 1}</p>
                    </div>
                    {/* <DropdownMenu></DropdownMenu> */}
                  </td>
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    <p className="text-md">{item?.type}</p>
                  </td>
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    <p className="text-md">
                      {item.at ? new Date(item.at).toISOString() : null}
                    </p>
                  </td>
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap ">
                    {item?.content}
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authen.authToken,
    userList: state.userManage.userList,
    bannedUserList: state.userManage.bannedUserList,
    userBandwidth: state.report.userBandwidth
  };
};

export default connect(mapStateToProps)(UsageReport);
