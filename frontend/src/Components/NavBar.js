import React from "react";
import { useDispatch, useSelector } from "react-redux"; //bring something useSelctor and for dispatching use "const dispatch = useDispatch()"
import { logout } from "../actions/userAction";
import "../styles/styles.css";
import logo from "./main__logo.png";
const NavBar = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="d-flex justify-content-between p-2 navbars">
      <div className="logo">
        <img src={logo} alt="" />
        {/* <h1>Smart Mart</h1> */}
      </div>

      <div className="tags ">
        <div className=" d-flex p-3 m-2 justify-content-around">
          <li className="mr-5">
            <a href="">Cart</a>
          </li>
          <li className="mr-5">
            <a href="">Profile</a>
          </li>
          {userInfo ? (
            <li className="mr-5">
              <a href="">Logout</a>
            </li>
          ) : (
            <li className="mr-5">
              <a href="">Login</a>
            </li>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
