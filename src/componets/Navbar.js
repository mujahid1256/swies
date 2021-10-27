import React from "react";
import Logo from "../logo.png";
// react awesome imports 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <a className="navbar-brand" href="#">
                    <img className="logo" src={Logo} alt="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* marginleft is now (ms) */}
                    <ul className="navbar-nav ms-auto">
                        {/* navbar active class  */}
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home <span className="sr-only"></span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Students
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About the schoool
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
