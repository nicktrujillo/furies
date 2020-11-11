import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import styles from "./profileform.css";
const initialState = {
  website: "",
  location: "",
  status: "",
  genres: "",
  bio: "",
  twitter: "",
  facebook: "",
  soundcloud: "",
  youtube: "",
  instagram: "",
};
const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);
  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(", ");
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    website,
    location,
    status,
    genres,
    bio,
    twitter,
    facebook,
    soundcloud,
    youtube,
    instagram,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <>
      <div className='profileFormContainer'>
        <div className='form'>
          <h1 className='editHeading'>Edit Your Profile</h1>
          <p class='message'>* = required field</p>
          <form onSubmit={onSubmit}>
            <div>
              <select name='status' value={status} onChange={onChange}>
                <option>* Select Profile Type</option>
                <option value='Artist'>Artist</option>
                <option value='Producer'>Producer</option>
                <option value='DJ'>DJ</option>
                <option value='Listener'>Listener</option>
                <option value='Other'>Other</option>
              </select>
              <p class='message'>Give us an idea of who you are</p>
            </div>
            <div>
              <input
                class='input'
                type='text'
                placeholder='Website'
                name='website'
                value={website}
                onChange={onChange}
              />
              <p className='message'>Could be your own or a label website</p>
            </div>
            <div>
              <input
                class='input'
                type='text'
                placeholder='Location'
                name='location'
                value={location}
                onChange={onChange}
              />
              <p className='message'>City & state suggested (eg. Boston, MA)</p>
            </div>
            <div>
              <input
                class='input'
                type='text'
                placeholder='* Genres'
                name='genres'
                value={genres}
                onChange={onChange}
              />
              <p className='message'>
                Please use comma separated values (eg. Hip-Hop, R & B, Rock,
                Pop, Electronic)
              </p>
            </div>
            <div>
              <textarea
                placeholder='A short bio of yourself'
                name='bio'
                value={bio}
                onChange={onChange}
              />
              <p className='message'>Tell us a little about yourself</p>
            </div>
            <div className='add-social'>
              <button
                onClick={() => toggleSocialInputs(!displaySocialInputs)}
                type='button'
                className='add'
              >
                + Social Media
              </button>
            </div>
            {displaySocialInputs && (
              <>
                <div className='social-input'>
                  <i className='fab fa-soundcloud'></i>
                  <input
                    class='input'
                    type='text'
                    placeholder='SoundCloud URL'
                    name='soundcloud'
                    value={soundcloud}
                    onChange={onChange}
                  />
                </div>
                <div className='social-input'>
                  <i className='fab fa-youtube fa-2x' />
                  <input
                    class='input'
                    type='text'
                    placeholder='YouTube URL'
                    name='youtube'
                    value={youtube}
                    onChange={onChange}
                  />
                </div>
                <div className='social-input'>
                  <i className='fab fa-twitter fa-2x' />
                  <input
                    class='input'
                    type='text'
                    placeholder='Twitter URL'
                    name='twitter'
                    value={twitter}
                    onChange={onChange}
                  />
                </div>
                <div className='social-input'>
                  <i className='fab fa-facebook fa-2x' />
                  <input
                    class='input'
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={onChange}
                  />
                </div>
                <div className='social-input'>
                  <i className='fab fa-instagram fa-2x' />
                  <input
                    class='input'
                    type='text'
                    placeholder='Instagram URL'
                    name='instagram'
                    value={instagram}
                    onChange={onChange}
                  />
                </div>
              </>
            )}
            <div className='edit-submit-btn'>
              <button type='submit'>Submit</button>
            </div>
            <Link className='goback' to='/dashboard'>
              <i class='fa fa-arrow-left'></i>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { createProfile, getCurrentProfile } from "../../actions/profile";
// import styles from "./profileform.css";

// const initialState = {
//   website: "",
//   location: "",
//   status: "",
//   genres: "",
//   bio: "",
//   twitter: "",
//   facebook: "",
//   soundcloud: "",
//   youtube: "",
//   instagram: "",
// };

// const ProfileForm = ({
//   profile: { profile, loading },
//   createProfile,
//   getCurrentProfile,
//   history,
// }) => {
//   const [formData, setFormData] = useState(initialState);

//   const [displaySocialInputs, toggleSocialInputs] = useState(false);

//   useEffect(() => {
//     if (!profile) getCurrentProfile();
//     if (!loading && profile) {
//       const profileData = { ...initialState };
//       for (const key in profile) {
//         if (key in profileData) profileData[key] = profile[key];
//       }
//       for (const key in profile.social) {
//         if (key in profileData) profileData[key] = profile.social[key];
//       }
//       if (Array.isArray(profileData.skills))
//         profileData.skills = profileData.skills.join(", ");
//       setFormData(profileData);
//     }
//   }, [loading, getCurrentProfile, profile]);

//   const {
//     website,
//     location,
//     status,
//     genres,
//     bio,
//     twitter,
//     facebook,
//     soundcloud,
//     youtube,
//     instagram,
//   } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     createProfile(formData, history, profile ? true : false);
//   };

//   return (
//     <div className='profileFormPage'>
//       <div className='profileFormContainer'>
//         <h1 className='large text-primary'>Edit Your Profile</h1>
//         <p className='lead'>
//           <i className='fas fa-user' /> Add some changes to your profile
//         </p>
//         <small>* = required field</small>
//         <form className='form' onSubmit={onSubmit}>
//           <div className='form-group'>
//             <select name='status' value={status} onChange={onChange}>
//               <option>* Select Profile Type</option>
//               <option value='Artist'>Artist</option>
//               <option value='Producer'>Producer</option>
//               <option value='DJ'>DJ</option>
//               <option value='Listener'>Listener</option>
//               <option value='Other'>Other</option>
//             </select>
//             <small className='form-text'>Give us an idea of who you are</small>
//           </div>
//           <div className='form-group'>
//             <input
//               type='text'
//               placeholder='Website'
//               name='website'
//               value={website}
//               onChange={onChange}
//             />
//             <small className='form-text'>
//               Could be your own or a label website
//             </small>
//           </div>
//           <div className='form-group'>
//             <input
//               type='text'
//               placeholder='Location'
//               name='location'
//               value={location}
//               onChange={onChange}
//             />
//             <small className='form-text'>
//               City & state suggested (eg. Boston, MA)
//             </small>
//           </div>
//           <div className='form-group'>
//             <input
//               type='text'
//               placeholder='* Genres'
//               name='genres'
//               value={genres}
//               onChange={onChange}
//             />
//             <small className='form-text'>
//               Please use comma separated values (eg. Hip-Hop, R & B, Rock, Pop,
//               Electronic)
//             </small>
//           </div>
//           <div className='form-group'>
//             <textarea
//               placeholder='A short bio of yourself'
//               name='bio'
//               value={bio}
//               onChange={onChange}
//             />
//             <small className='form-text'>Tell us a little about yourself</small>
//           </div>

//           <div className='my-2'>
//             <button
//               onClick={() => toggleSocialInputs(!displaySocialInputs)}
//               type='button'
//               className='btn btn-light'
//             >
//               Add Social Network Links
//             </button>
//             <span>Optional</span>
//           </div>

//           {displaySocialInputs && (
//             <>
//               <div className='form-group social-input'>
//                 <i className='fab fa-soundcloud'></i>
//                 <input
//                   type='text'
//                   placeholder='SoundCloud URL'
//                   name='soundcloud'
//                   value={soundcloud}
//                   onChange={onChange}
//                 />
//               </div>

//               <div className='form-group social-input'>
//                 <i className='fab fa-youtube fa-2x' />
//                 <input
//                   type='text'
//                   placeholder='YouTube URL'
//                   name='youtube'
//                   value={youtube}
//                   onChange={onChange}
//                 />
//               </div>

//               <div className='form-group social-input'>
//                 <i className='fab fa-twitter fa-2x' />
//                 <input
//                   type='text'
//                   placeholder='Twitter URL'
//                   name='twitter'
//                   value={twitter}
//                   onChange={onChange}
//                 />
//               </div>

//               <div className='form-group social-input'>
//                 <i className='fab fa-facebook fa-2x' />
//                 <input
//                   type='text'
//                   placeholder='Facebook URL'
//                   name='facebook'
//                   value={facebook}
//                   onChange={onChange}
//                 />
//               </div>

//               <div className='form-group social-input'>
//                 <i className='fab fa-instagram fa-2x' />
//                 <input
//                   type='text'
//                   placeholder='Instagram URL'
//                   name='instagram'
//                   value={instagram}
//                   onChange={onChange}
//                 />
//               </div>
//             </>
//           )}

//           <input type='submit' className='btn btn-primary my-1' />
//           <Link className='btn btn-light my-1' to='/dashboard'>
//             Go Back
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// ProfileForm.propTypes = {
//   createProfile: PropTypes.func.isRequired,
//   getCurrentProfile: PropTypes.func.isRequired,
//   profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   profile: state.profile,
// });

// export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
//   ProfileForm
// );
