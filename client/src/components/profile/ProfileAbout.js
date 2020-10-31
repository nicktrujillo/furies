import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    bio,
    genres,
    user: { name },
  },
}) => (
  <div className='profile-about bg-light p-2'>
    {bio && (
      <>
        <h2 className='text-primary'>{name.trim().split(" ")[0]}'s Bio</h2>
        <p>{bio}</p>
        <div className='line' />
      </>
    )}
    <h2 className='text-primary'>Genre(s)</h2>
    <div className='skills'>
      {genres.map((genre, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-music'></i> {genre}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
