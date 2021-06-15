import React, { useState } from 'react';

const SideDrawerN = (props) => {
  const [isShow, setShow] = useState(false);

  let drawerClasses = ' transition transform translate-x-full ';
  let backdropClasses = ' ';

  if (isShow) {
    drawerClasses = 'transition transform translate-x-0';
    backdropClasses = ' backdrop-filter backdrop-brightness-50 ';
  }

  function open() {
    setShow(true);
  }

  function close() {
    setShow(false);
  }

  return (
    <div className={backdropClasses + `w-screen h-screen`} onClick={close}>
      <div
        className={
          drawerClasses +
          ' absolute bg-white dark:bg-gray-800 inline-block right-0 duration-300 ease-out'
        }
      >
        <div className="flex flex-col sm:flex-row sm:justify-around ">
          <div className="w-72 h-screen">{props.children} </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawerN;
