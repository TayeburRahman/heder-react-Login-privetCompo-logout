import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAugh";
import "./Header.css";

const Header = () => {
  // user data pus auth compo 1
  const { user, Logout } = useAuth();
  return (
    <div>
      <div className="row p-2 header">
        <div className="col-3">
          <img src="" alt="" />
        </div>
        <div className="col-6 p-3">
          <Link className="p-2 ps-3 pe-3 rounded" to="/home">
            Home
          </Link>
          <Link className="p-2 ps-3 pe-3 rounded" to="/project">
            Project
          </Link>

          <Link className="p-2 ps-3 pe-3 rounded" to="/spping">
            Spping
          </Link>
          <Link className="p-2 ps-3 pe-3 rounded" to="/oder">
            Oders
          </Link>
        </div>
        <div className="col-3 p-2 ps-3 pe-3">
          <Link className="p-2 ps-3 pe-3 rounded" to="/register">
            Register
          </Link>
          <Link className="p-2 ps-3 pe-3 m-2 rounded" to="/login">
            login
          </Link>
        </div>
      </div>
      {user?.email && (
        <div className="row p-2">
          <div className="col-4"></div>
          <div className="col-4"></div>
          <div className="col-4">
            <samp className="p-2 text-primary">{user.displayName}</samp>
            {user?.email && (
              <button onClick={Logout} className="btn btn-secondary">
                Log Out
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
