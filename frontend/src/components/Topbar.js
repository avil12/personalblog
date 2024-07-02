import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import AuthContext from '../AuthContext';
import { useContext } from 'react';

export default function Topbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call the logout function from the AuthContext
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            {!isAuthenticated && (
              <>
                <li className="topListItem">
                  <Link className="link" id="active" to="/">
                    HOME
                  </Link>
                </li>
                {/* <li className="topListItem">ABOUT</li> */}
              </>
            )}



          {!isAuthenticated ? (
            <li className="topListItem">
              <Link className="link" to="/login">
                BLOG
              </Link>
            </li>
          ) : (
            <li className="topListItem">
              <span className="link" onClick={handleLogout}>
                LOGOUT
              </span>
            </li>
          )}

        </ul>
      </div>
      
    </div>
  );
}
