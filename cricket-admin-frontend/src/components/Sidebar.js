import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Sidebar(props) {
  let activeStyle = {
    color: "#9333ea",
    backgroundColor: "#e9d5ff",
    fontWeight: "bold",
    borderRight: "5px solid #9333ea",
  };
  const [dropped, setDropped] = useState(false);
  const [cancel, setCancel] = useState(false);
  useEffect(() => {
    console.log("navv", props.nav);
    // props.setLoginType(localStorage.getItem('loginType'));
  }, [props.nav]);

  let navigate = useNavigate();
  const redirect = () => {
    let url = "/";
    navigate(url, { replace: true });
  };
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const logout = () => {
    try {
      axios
        .get(`${props.ipAddress}/logout`, { headers: headers })
        .then((response) => {
          console.log("logout", response.data);
          localStorage.removeItem("token");
          redirect();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="  ">
      <div className="absolute  top-2 left-2 md:hidden">
        <button onClick={props.toggle}></button>
      </div>
      <aside
        style={{ width: props.isOpen ? "240px" : "80px" }}
        className={`${
          props.isOpen ? "absolute" : "hidden"
        } p-3 z-10 h-screen border-r md:flex md:flex-col md:fixed w-72`}
      >
        <div>
          <button onClick={props.toggle}></button>
        </div>
        <div
          style={{
            height: props.isOpen ? "240px" : "240px",
            width: props.isOpen ? "240px" : "0px",
          }}
          className="p-3"
        ></div>
        <nav
          style={{ width: props.isOpen ? "220px" : "70px" }}
          className="flex flex-col justify-between h-full text-base "
        >
          <div>
            <NavLink
              className={
                "flex items-center p-2    hover:bg-gray-300 hover:scale-105 "
              }
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/pool"
            >
              {props.isOpen && <span className="ml-3">Pool Games</span>}
            </NavLink>
            <NavLink
              className={
                "flex items-center p-2    hover:bg-gray-300 hover:scale-105 "
              }
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/prizemodels"
            >
              {props.isOpen && (
                <span className="ml-3">Prize Distribution models</span>
              )}
            </NavLink>
            <NavLink
              className={
                "flex items-center p-2    hover:bg-gray-300 hover:scale-105 "
              }
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/marketplace"
            >
              {props.isOpen && <span className="ml-3">Market Place</span>}
            </NavLink>
            <NavLink
              className={
                "flex items-center p-2    hover:bg-gray-300 hover:scale-105 "
              }
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/announcements"
            >
              {props.isOpen && <span className="ml-3">Announcements</span>}
            </NavLink>
            {props.loginType === "ADMIN" && (
              <NavLink
                className={
                  "flex items-center p-2    hover:bg-gray-300 hover:scale-105 "
                }
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/content/blockly"
              >
                {props.isOpen && <span className="ml-3">Blockly</span>}
              </NavLink>
            )}
          </div>
          <div>
            <button
              onClick={() => setCancel(true)}
              className={
                " text-red-500 flex w-full items-center p-2    hover:bg-gray-300 hover:scale-105 "
              }
            >
              {props.isOpen && (
                <span className="ml-3 text-black ">Log out</span>
              )}
            </button>
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
