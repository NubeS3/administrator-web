import React, { cloneElement, useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const SideDrawer = ({ show, setShow, setHide, ...props }) => {
  let completeButtonRef = useRef(null);

  const customChildren = cloneElement(props.children, { setHide });

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden z-50"
        open={show}
        onClose={setHide}
        initialFocus={completeButtonRef}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative w-screen max-w-md">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-500"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                    <button
                      ref={completeButtonRef}
                      className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={setHide}
                    >
                      <span className="sr-only">Close panel</span>
                    </button>
                  </div>
                </Transition.Child>
                <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                  <div className="px-4 sm:px-6">
                    {/* <Dialog.Title className="text-lg font-medium text-gray-900">
                      Panel title
                    </Dialog.Title> */}
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    {/* Replace with your content */}
                    {/* <div className="absolute inset-0 px-4 sm:px-6">
                      <div
                        className="h-full border-2 border-dashed border-gray-200"
                        aria-hidden="true"
                      />
                    </div> */}
                    {props.children}
                    {/* /End replace */}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );

  // const [isShow, setShow] = useState(true);

  // let drawerClasses = ' transition transform translate-x-full ';
  // let backdropClasses = ' ';
  // let closeBtn = <></>;

  // const customMainPage = cloneElement(mainPage, { open });

  // if (isShow) {
  //   drawerClasses = 'transition transform translate-x-0';
  //   backdropClasses =
  //     'fixed top-0 backdrop-filter backdrop-brightness-50 w-screen h-screen';
  //   closeBtn = (
  //     <button className="fixed top-0 w-screen h-screen" onClick={close} />
  //   );
  // } else {
  //   backdropClasses = ' backdrop-filter-none  w-full h-full';
  // }

  // function open() {
  //   setShow(true);
  // }

  // function close() {
  //   setShow(false);
  //   closeBtn = <></>;
  // }

  // return (
  //   <div className={backdropClasses}>
  //     <div
  //       className={
  //         drawerClasses +
  //         'absolute inset-0 overflow-hidden bg-white dark:bg-gray-800 inline-block right-0 duration-300 ease-out'
  //       }
  //     >
  //       <div className=" flex flex-col sm:flex-row sm:justify-around ">
  //         <div className=" h-full">{customChildren}</div>
  //       </div>
  //     </div>

  //     {closeBtn}
  //   </div>
  // );
};

export default SideDrawer;
