import React, { cloneElement, useState } from 'react';

const SideDrawer = ({ children, mainPage }) => {
  const [isShow, setShow] = useState(true);

  let drawerClasses = ' transition transform translate-x-full ';
  let backdropClasses = ' ';
  let closeBtn = <></>;

  const customChildren = cloneElement(children, { close });

  if (isShow) {
    drawerClasses = 'transition transform translate-x-0';
    backdropClasses =
      'fixed top-0 backdrop-filter backdrop-brightness-50 w-screen h-screen';
    closeBtn = (
      <button className="fixed top-0 w-screen h-screen" onClick={close} />
    );
  } else {
    backdropClasses = ' backdrop-filter-none  w-full h-full';
  }

  function open() {
    setShow(true);
  }

  function close() {
    setShow(false);
    closeBtn = <></>;
  }

  return (
    <div className={backdropClasses}>
      <div
        className={
          drawerClasses +
          ' fixed  bg-white dark:bg-gray-800 inline-block right-0  duration-300 ease-out'
        }
      >
        <div className=" flex flex-col sm:flex-row sm:justify-around ">
          <div className=" h-screen">{customChildren}</div>
        </div>
      </div>

      {closeBtn}
    </div>
  );
};

export default SideDrawer;
