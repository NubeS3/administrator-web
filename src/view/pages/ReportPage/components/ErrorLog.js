import { connect } from 'react-redux';

const ErrorLog = ({ errLogs }) => {
  return (
    <>
      <header className="w-full h-16 flex items-center justify-between">
        <div className="relative flex flex-col justify-start h-full md:w-full">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-start">
            <div className="flex items-end text-black dark:text-white text-4xl">
              Error Logs
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col w-full mx-auto">
        <table className="w-full table-collapse">
          <thead>
            <tr>
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                #
              </th>
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                Type
              </th>
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200">
                At
              </th>
              <th className="text-sm text-left uppercase font-semibold text-grey-darker p-3 bg-gray-200 text-center">
                Content
              </th>
              <th className="text-sm uppercase font-semibold text-grey-darker p-3 bg-gray-200"></th>
            </tr>
          </thead>
          <tbody className="align-baseline">
            {errLogs?.map((item, index) => {
              return (
                <tr className="group cursor-pointer hover:bg-gray-100">
                  <td className="text-sm p-3 border-t border-grey-light whitespace-no-wrap">
                    <div className="inline-block mr-12">
                      <p className="text-lg">{index}</p>
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
  const errLogs = state.report.errLogs;
  console.log(errLogs);
  return { errLogs };
};
export default connect(mapStateToProps)(ErrorLog);
