import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProfileItem.module.css";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    location,
    genres,
  },
}) => {
  console.log(_id);
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {genres.slice(0, 4).map((genre, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-music'></i> {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
