import React, { cloneElement, useState } from 'react';

const SideDrawerN = ({ children }) => {
  const [isShow, setShow] = useState(false);

  let drawerClasses = ' transition transform translate-x-full ';
  let backdropClasses = ' ';
  let closeBtn = <></>;

  if (isShow) {
    drawerClasses = 'transition transform translate-x-0';
    backdropClasses = ' backdrop-filter backdrop-brightness-50 ';
    closeBtn = <button className="w-screen h-screen" onClick={close} />;
  }

  function open() {
    setShow(true);
  }

  function close() {
    setShow(false);
    closeBtn = <></>;
  }

  return (
    <div className={backdropClasses + `w-screen h-screen`}>
      <div
        className={
          drawerClasses +
          ' absolute bg-white dark:bg-gray-800 inline-block right-0 duration-300 ease-out'
        }
      >
        <div className="flex flex-col sm:flex-row sm:justify-around ">
          <div className="w-72 h-screen">{children} </div>
        </div>
      </div>
      <div onClick={open}>HEY HEY HEY</div>
      {closeBtn}
    </div>
  );
};

export default SideDrawerN;
