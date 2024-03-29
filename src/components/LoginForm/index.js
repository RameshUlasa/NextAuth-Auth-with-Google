import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'

import './index.css'

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form-container">
        <div className="logo-container">
          <h1 className="main-head">Board.</h1>
        </div>
        <div className="form-container">
          <div className="form-content-container">
            <h1 className="sign-in-head">
              Sign In
              <br />
              <span className="sign-in-tag">Sign in to your account</span>
            </h1>
            <div className="login-with-btn-container">
              <button className="sign-in-with-btn" type="button">
                <FcGoogle className="google-apple-icon" />
                Sign in with Google
              </button>
              <button className="sign-in-with-btn" type="button">
                <AiFillApple className="google-apple-icon" />
                Sign in with Apple
              </button>
            </div>
            <form className="form-card">
              <label className="input-label" htmlFor="mail">
                Email address
              </label>
              <input
                className="input"
                id="mail"
                type="email"
                placeholder="Email"
              />
              <label className="input-label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                id="password"
                type="password"
                placeholder="Password"
              />
              <p className="forgot-password">Forgot password?</p>
              <button className="submit-btn" type="submit">
                Sign In
              </button>
            </form>
            <p className="dont-have-acc">
              Don't have an account?{' '}
              <span className="register">Register here</span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
