import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import ProfileAbout from "./ProfileAbout";
import { getProfileById } from "../../actions/profile";
import { getPosts, getPost } from "../../actions/post";
const Profile = ({
  getProfileById,
  profile: { profile },
  auth,
  match,
  getPosts,
  post: { posts },
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const soundcloudWidget = (
    <iframe
      width='560'
      height='100'
      scrolling='no'
      frameborder='no'
      allow='autoplay'
      src={soundcloudOne + posts.soundcloud + soundCloudThree}
    ></iframe>
  );
  const youtubeOne = "https://www.youtube.com/embed/";
  return (
    <>
      {profile === null ? (
        <Spinner />
      ) : (
        <>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>
          <div>
            {posts
              .filter((allPosts) => {
                return allPosts.user === profile.user._id;
              })
              .map((allPosts) => {
                return (
                  <div>
                    {allPosts.soundcloud ? (
                      <div>
                        <iframe
                          width='560'
                          height='100'
                          scrolling='no'
                          frameborder='no'
                          allow='autoplay'
                          src={
                            soundcloudOne +
                            allPosts.soundcloud +
                            soundCloudThree
                          }
                        ></iframe>
                      </div>
                    ) : null}
                    {allPosts.youtube ? (
                      <div>
                        <iframe
                          width='560'
                          height='315'
                          src={youtubeOne + allPosts.youtube.split("=")[1]}
                          frameborder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen'
                          allowfullscreen
                        ></iframe>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            ;
          </div>
        </>
      )}
    </>
  );
};
Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post,
});
export default connect(mapStateToProps, { getProfileById, getPosts })(Profile);
