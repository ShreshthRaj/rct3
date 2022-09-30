import { Link } from "react-router-dom";
import {useContext} from "react"
import {AuthContext} from "../Context/AppContext"
import {Navigate} from 'react-router-dom'


function Login() {
  const {isAuth,toggleAuth} =useContext(AuthContext)
  if(isAuth){
    return <Navigate to="/dashboard"/>
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form">
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button onClick={toggleAuth} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
