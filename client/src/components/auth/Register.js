// JANNY VERSION:
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import "./auth.css";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, avatar, email, password, password2 } = formData;
  const NAME_OF_UPLOAD_PRESET = "p86aftxy";
  const YOUR_CLOUDINARY_ID = "dyzy5y1cw";
  async function uploadImage(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", NAME_OF_UPLOAD_PRESET);
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${YOUR_CLOUDINARY_ID}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const avatar = await res.json();
    console.log(avatar.secure_url);
    return avatar.secure_url;
  }
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const handleFileChange = async (event) => {
    const [file] = event.target.files;
    if (!file) return;
    setUploadingAvatar(true);
    const uploadedUrl = await uploadImage(file);
    setFormData({ ...formData, avatar: uploadedUrl });
    setUploadingAvatar(false);
    console.log(formData);
  };
  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, avatar, email, password });
      if (uploadingAvatar) return;
    }
  };
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <>
      <div
        className='loginContainer'
        // style={{ background: "lightgrey" }}
      >
        <div className='veen move'>
          <div>
            <p className='splits'>Already a member?</p>
            <Link to='/login'>
              <button>Login</button>
            </Link>
          </div>
          <div>
            <p className='splits'>Don't have an account?</p>
            <Link to='/register'>
              <button>Register</button>
            </Link>
          </div>
          <div className='wrapper move'>
            {/* <div id="login">
              <h3>Login</h3>
              <div className="email">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  required
                />
                <label>Email Address</label>
              </div>
              <div className="passwd">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  minLength="6"
                />
                <label>Password</label>
              </div>
              <div className="submit">
                <button
                  className="dark"
                  onClick={onSubmit}
                >
                  Login
                </button>
              </div>
            </div> */}
            {/* REGISTER PART  */}
            <div className='register'>
              <h3 className='loginTitle'>Register</h3>
              <div className='name'>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={onChange}
                />
                <label>Full Name</label>
              </div>
              <div className='file'>
                <input
                  type='file'
                  name='image'
                  onChange={handleFileChange}
                  disabled={uploadingAvatar}
                />
                <label>Choose an Image</label>
              </div>
              <div className='email'>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                />
                <label>Email</label>
              </div>
              <div className='passwd'>
                <input
                  type='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                />
                <label>Password</label>
              </div>
              <div className='passwd'>
                <input
                  type='password'
                  name='password2'
                  value={password2}
                  onChange={onChange}
                />
                <label>Confirm password</label>
              </div>
              <div className='submit'>
                <button className='dark' onClick={onSubmit}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { setAlert, register })(Register);

// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
// import { setAlert } from "../../actions/alert";
// import { register } from "../../actions/auth";
// import PropTypes from "prop-types";

// const Register = ({ setAlert, register, isAuthenticated }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     avatar: "",
//     email: "",
//     password: "",
//     password2: "",
//   });

//   const { name, avatar, email, password, password2 } = formData;

//   const NAME_OF_UPLOAD_PRESET = "p86aftxy";
//   const YOUR_CLOUDINARY_ID = "dyzy5y1cw";
//   async function uploadImage(file) {
//     const data = new FormData();
//     data.append("file", file);
//     data.append("upload_preset", NAME_OF_UPLOAD_PRESET);
//     const res = await fetch(
//       `https://api.cloudinary.com/v1_1/${YOUR_CLOUDINARY_ID}/image/upload`,
//       {
//         method: "POST",
//         body: data,
//       }
//     );
//     const avatar = await res.json();
//     console.log(avatar.secure_url);
//     return avatar.secure_url;
//   }
//   const [uploadingAvatar, setUploadingAvatar] = useState(false);
//   const handleFileChange = async (event) => {
//     const [file] = event.target.files;
//     if (!file) return;
//     setUploadingAvatar(true);
//     const uploadedUrl = await uploadImage(file);
//     setFormData({ ...formData, avatar: uploadedUrl });
//     setUploadingAvatar(false);
//     console.log(formData);
//   };

//   const onChange = (e) =>
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== password2) {
//       setAlert("Passwords do not match", "danger");
//     } else {
//       register({ name, avatar, email, password });
//       if (uploadingAvatar) return;
//     }
//   };

//   if (isAuthenticated) {
//     return <Redirect to='/dashboard' />;
//   }

//   return (
//     <>
//       <h1 className='large text-primary'>Sign Up</h1>
//       <p className='lead'>
//         <i className='fas fa-user' /> Create Your Account
//       </p>
//       <form className='form' onSubmit={onSubmit}>
//         <div className='form-group'>
//           <input
//             type='text'
//             placeholder='Name'
//             name='name'
//             value={name}
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <label className='form-label'>Choose an Image</label>
//           <input
//             type='file'
//             className='form-input'
//             name='image'
//             onChange={handleFileChange}
//             disabled={uploadingAvatar}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='email'
//             placeholder='Email Address'
//             name='email'
//             value={email}
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='Password'
//             name='password'
//             value={password}
//             onChange={onChange}
//           />
//         </div>
//         <div className='form-group'>
//           <input
//             type='password'
//             placeholder='Confirm Password'
//             name='password2'
//             value={password2}
//             onChange={onChange}
//           />
//         </div>
//         <input type='submit' className='btn btn-primary' value='Register' />
//       </form>
//       <p className='my-1'>
//         Already have an account? <Link to='/login'>Sign In</Link>
//       </p>
//     </>
//   );
// };

// Register.propTypes = {
//   setAlert: PropTypes.func.isRequired,
//   register: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool,
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps, { setAlert, register })(Register);
