import React from 'react';
import { connect } from 'react-redux';
import PageFrame from '../../../components/PageFrame';
import paths from '../../../configs/paths';

const Landing = (props) => {
  return (
    <PageFrame>
      <div className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <div
          className="relative pt-15 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: '75vh'
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-7/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="font-light w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-white">
                    Welcome to Nubes3 Admin Center
                  </h1>
                  <h2 className="font-light max-w-3xl mx-auto w-full text-xl dark:text-white text-white text-center py-8">
                    Manage Nubes3 system users and moderators
                  </h2>
                  <div className="flex items-center justify-center mt-4">
                    <a
                      href={paths.LOGIN}
                      className="uppercase py-2 px-4 bg-blue-500 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-700"
                    >
                      Sign in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageFrame>
  );
};

const mapStateToProps = (state) => ({
  isValidAuthentication: state.authen.isValidAuthentication
});

export default connect(mapStateToProps)(Landing);
