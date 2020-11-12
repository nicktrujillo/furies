import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import styles from "../posts/PostItem.css";
const LandingPostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: {
    _id,
    text,
    soundcloud,
    youtube,
    name,
    avatar,
    user,
    likes,
    comments,
    date,
  },
  showActions,
}) => {
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const soundcloudWidget = (
    <iframe
      width='560'
      height='100'
      scrolling='no'
      frameBorder='no'
      allow='autoplay'
      src={soundcloudOne + soundcloud + soundCloudThree}
      className='scWidget'
    ></iframe>
  );
  return (
    <div className='post postContainer'>
      <div>
        <Link to={`/profile/${user}`}>
          <div className='nameAndAvi'>
            <img className='round-img' src={avatar} alt='' />
            <div className='postNameAndDate'>
              <h4 className='postItemName'>{name}</h4>
              <p className='post-date postDate'>
                <Moment startof='hour' fromNow>
                  {date}
                </Moment>
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div>
        <p className='my-1 postText'>{text}</p>
        {soundcloud ? <p className='my-1'>{soundcloudWidget}</p> : null}
        {youtube ? (
          <p className='my-1'>
            {
              <iframe
                width='560'
                height='315'
                src={`https://www.youtube.com/embed/${youtube.split("=")[1]}`}
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
              ></iframe>
            }
          </p>
        ) : null}
        <div className='postBottom'></div>
      </div>
    </div>
  );
};
LandingPostItem.defaultProps = {
  showActions: true,
};
LandingPostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  LandingPostItem
);
