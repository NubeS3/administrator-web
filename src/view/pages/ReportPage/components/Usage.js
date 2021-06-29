import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import store from '../../../../store';
import {
  getSystemBandwidth,
  getUserTotalBandwidth
} from '../../../../store/report';
import LineChartCard from './LineChart';

const UsageReport = ({
  authToken,
  uid,
  userList = [],
  bannedUserList,
  userBandwidth,
  systemBandwidth
}) => {
  useEffect(() => {
    //let fromDate = new Date();
    //let toDate = new Date();

    //if (fromDate.getMonth() !== 0) {
    //  toDate.setMonth(toDate.getMonth() - 1);
    //} else {
    //  toDate.setMonth(11);
    //  toDate.setFullYear(fromDate.getFullYear() - 1);
    //}
    //fromDate = fromDate.getTime();
    //toDate = toDate.getTime();

    store.dispatch(getSystemBandwidth({ authToken: authToken }));
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
          {/*System Bandwidth (this year)*/}
        </div>
        <LineChartCard title="System Bandwidth" data={systemBandwidth} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    authToken: state.authen.authToken,
    userList: state.userManage.userList,
    bannedUserList: state.userManage.bannedUserList,
    userBandwidth: state.report.userBandwidth,
    systemBandwidth: state.report.systemBandwidth
  };
};

export default connect(mapStateToProps)(UsageReport);
