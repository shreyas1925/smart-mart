import React from "react";
import { useDispatch, useSelector } from "react-redux"; //bring something useSelctor and for dispatching use "const dispatch = useDispatch()"
import { Link } from "react-router-dom";
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
            <Link to="/cart">Cart</Link>
          </li>
          <li className="mr-5">
            <Link to="/profile">Profile</Link>
          </li>
          {userInfo ? (
            <li className="mr-5">
              <div className="l" onClick={userLogout}>
                <Link to="">Logout</Link>
              </div>
            </li>
          ) : (
            <li className="mr-5">
              <Link to="/login">Login</Link>
            </li>
          )}
          {userInfo && userInfo.isAdmin && (
            // <NavDropdown title="Admin" id="adminmenu" className="mt-1">
            <>
              <li className="mr-5">
                <Link to="/admin/userlist">
                  Users
                </Link>
              </li>
              <li className="mr-5">
                <Link to="/admin/productlist">
                  Products
                </Link>
              </li>
              <li className="mr-5">
                <Link to="/admin/orderlist">
                  Orders
                </Link>
              </li>
              {/* </NavDropdown> */}
            </>
          )}
        </div>
      </div>
    </nav >
  );
};

export default NavBar;
