import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";
export default function Menu() {
  let { path, url } = useRouteMatch();
  console.log(`${url}/users`);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to={`${url}`}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink
              className="nav-link"
              to={`${url}/about`}
              activeClassName="active"
            >
              About
            </NavLink>

            <NavLink
              className="nav-link"
              to={`${url}/users`}
              activeClassName="active"
            >
              Users
            </NavLink>
            <NavLink
              className="nav-link"
              to={`${url}/Action`}
              activeClassName="active"
            >
              Action
            </NavLink>
            <NavLink
              className="nav-link"
              to={`${url}/AnotherAction`}
              activeClassName="active"
            >
              Another action
            </NavLink>

            <NavLink
              className="nav-link"
              to={`${url}/SomethingElseHere`}
              activeClassName="active"
            >
              Something else here
            </NavLink>
            
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
