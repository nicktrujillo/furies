import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profile";
import styles from "./profile.css";
import { Link } from "react-router-dom";

const ProfileTop = ({
  profile: {
    status,
    location,
    website,
    social,
    bio,
    genres,
    user: { name, avatar, _id },
  },
}) => {
  return (
    <div className='updated-profile-bio'>
      <div className='updated-profile-bio-container'>
        <div className='updated-profile-bio-container-row-1'>
          <div className='profileBanner'>
            <div className='bannerAvi'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg/1040px-Sunset_Toronto_Skyline_Panorama_Crop_from_Snake_Island.jpg' />
            </div>
          </div>
          <div className='profile-page-info'>
            <div className='avatarSectionProfile'>
              <div>
                <img
                  className='profileAvi'
                  src={
                    avatar
                      ? avatar
                      : "//www.gravatar.com/avatar/d3c45204c30f578c0e18bc96502eed0b?s=200&r=pg&d=mm"
                  }
                  alt=''
                />
              </div>
              <div>
                <Link
                  to={`/messages/${_id}`}
                  className='profile-section-message'
                >
                  <i className='fa fa-envelope' aria-hidden='true'></i>
                </Link>
              </div>
            </div>
            <div className='profile-info-section'>
              <div className='profileTitle'>
                <h1 className='profileName'>{name}</h1>

                <h4 className='titleSeperator'>&nbsp;|&nbsp;</h4>

                <p>{status}</p>
              </div>
              <p className='profileLocation'>
                <i className='fas fa-map-marker-alt'></i>&nbsp;
                {location && <span>{location}</span>}
              </p>
              <div className='profileGenres'>
                {genres.map((genre, index) => (
                  <div key={index}>
                    <i className='fas fa-music'></i>
                    {genre}&nbsp;&nbsp;
                  </div>
                ))}
              </div>
              <div className='profileLinksFlex'>
                <div className='profileLinks'>
                  {website && (
                    <a href={website} target='_blank' rel='noopener noreferrer'>
                      <i className='fas fa-globe fa-2x' />
                    </a>
                  )}{" "}
                  {social && social.twitter && (
                    <a
                      href={social.twitter}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-twitter fa-2x' />
                    </a>
                  )}{" "}
                  {social && social.facebook && (
                    <a
                      href={social.facebook}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-facebook fa-2x' />
                    </a>
                  )}{" "}
                  {social && social.soundcloud && (
                    <a
                      href={social.soundcloud}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-soundcloud'></i>
                    </a>
                  )}{" "}
                  {social && social.youtube && (
                    <a
                      href={social.youtube}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-youtube fa-2x' />
                    </a>
                  )}{" "}
                  {social && social.instagram && (
                    <a
                      href={social.instagram}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-instagram fa-2x' />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;

// import React from "react";
// import PropTypes from "prop-types";

// const ProfileTop = ({
//   profile: {
//     status,
//     location,
//     website,
//     social,
//     user: { name, avatar },
//   },
// }) => {
//   return (
//     <div className='profile-top bg-primary p-2'>
//       <img className='round-img my-1' src={avatar} alt='' />
//       <h1 className='large'>{name}</h1>
//       <p className='lead'>{status}</p>
//       <p>{location && <span>{location}</span>}</p>
//       <div className='icons my-1'>
//         {website && (
//           <a href={website} target='_blank' rel='noopener noreferrer'>
//             <i className='fas fa-globe fa-2x' />
//           </a>
//         )}
//         {social && social.twitter && (
//           <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
//             <i className='fab fa-twitter fa-2x' />
//           </a>
//         )}
//         {social && social.facebook && (
//           <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
//             <i className='fab fa-facebook fa-2x' />
//           </a>
//         )}
//         {social && social.soundcloud && (
//           <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
//             <i className='fab fa-soundcloud'></i>
//           </a>
//         )}
//         {social && social.youtube && (
//           <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
//             <i className='fab fa-youtube fa-2x' />
//           </a>
//         )}
//         {social && social.instagram && (
//           <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
//             <i className='fab fa-instagram fa-2x' />
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// ProfileTop.propTypes = {
//   profile: PropTypes.object.isRequired,
// };

// export default ProfileTop;
