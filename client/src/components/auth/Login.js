// JANNY VERSION:
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import "./auth.css";
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const enterPressed = (e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      onSubmit(e);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/posts' />;
  }
  return (
    <>
      <div className='loginContainer'>
        <div className='veen'>
          <div>
            <p className='splits'>Already a member?</p>
            <button>Login</button>
          </div>
          <div className='noAccount'>
            <p className='splits'>Don't have an account?</p>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </div>
          <div className='wrapper'>
            {/* LOGIN SECTION  */}
            <div className='login'>
              <h3 className='loginTitle'>Login</h3>
              <div className='email'>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  required
                />
                <label>Email Address</label>
              </div>
              <div className='passwd'>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  minLength='6'
                  onKeyPress={enterPressed}
                />
                <label>Password</label>
              </div>
              <div className='submit'>
                <button className='dark' onClick={onSubmit}>
                  Login
                </button>
              </div>
            </div>
            {/* REGISTER PART */}
            {/* <div id="register">
              <h3>Register</h3>
              <div className="name">
                <input type="text" />
                <label>Full Name</label>
              </div>
              <div className="email">
                <input type="email" />
                <label>Email</label>
              </div>
              <div className="passwd">
                <input type="password" />
                <label>Password</label>
              </div>
              <div className="passwd">
                <input type="password" />
                <label>Confirm password</label>
              </div>
              <div className="submit">
                <button className="dark">Register</button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);

// import React, { useState } from "react";
// import { Link, Redirect } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { login } from "../../actions/auth";

// const Login = ({ login, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const { email, password } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     login(email, password);
//   };

//   if (isAuthenticated) {
//     return <Redirect to='/posts' />;
//   }

//   return (
//     <>
//       <h1 className='large text-primary'>Sign In</h1>
//       <p className='lead'>
//         <i className='fas fa-user' /> Sign Into Your Account
//       </p>
//       <form className='form' onSubmit={onSubmit}>
//         <div className='form-group'>
//           <input
//             type='email'
//             placeholder='Email Address'
//             name='email'
//             value={email}
//             onChange={onChange}
//             required
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='Password'
//             name='password'
//             value={password}
//             onChange={onChange}
//             minLength='6'
//           />
//         </div>
//         <input type='submit' className='btn btn-primary' value='Login' />
//       </form>
//       <p className='my-1'>
//         Don't have an account? <Link to='/register'>Sign Up</Link>
//       </p>
//     </>
//   );
// };

// Login.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { login })(Login);
