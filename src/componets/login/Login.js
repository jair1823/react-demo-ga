import { useHistory } from "react-router-dom";
import React from "react";

export default function Login() {
  
  const history = useHistory();
  
  const logger = (event) => {
    event.preventDefault();
    history.push("/home");
  };

  return (
    <div className="card w-50 m-auto">
      <article className="card-body">
        <a className="float-right btn btn-outline-primary" href="/">
          Sign up
        </a>
        <h4 className="card-title mb-4 mt-1">Sign in</h4>
        <form>
          <div className="form-group">
            <label>Your email</label>
            <input
              name="username"
              className="form-control"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="form-group">
            <a className="float-right" href="/">
              Forgot?
            </a>
            <label>Your password</label>
            <input
              className="form-control"
              placeholder="******"
              type="password"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={logger}
            >
              Login
            </button>
          </div>
        </form>
      </article>
    </div>
  );
}
