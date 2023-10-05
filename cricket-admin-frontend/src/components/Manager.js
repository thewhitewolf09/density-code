import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
function Manager(props) {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className=" flex flex-nowrap font-JetBrains ">
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <div className={`block ${isOpen ? "md:ml-60" : "md:ml-20"} ml-0 w-full `}>
        <Outlet />
      </div>
    </div>
  );
}

export default Manager;
