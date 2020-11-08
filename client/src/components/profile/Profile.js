import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileTop from "./ProfileTop";
import { getProfileById } from "../../actions/profile";
import { getPostsById } from "../../actions/post";
import styles from "../posts/Posts.module.css";
import PostItem from "../posts/PostItem";
import LeftSidebar from "../layout/LeftSidebar";
import styling from "./profile.css";

const Profile = ({
  getProfileById,
  profile: { profile },
  auth,
  match,
  getPostsById,
  post: { posts },
}) => {
  console.log(auth);
  console.log(profile);

  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  useEffect(() => {
    getPostsById(match.params.id);
  }, [getPostsById, match.params.id]);

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
    <div className='profile-page-container'>
      {profile === null ? (
        <Spinner />
      ) : (
        <>
          <div className='profile-homepage-col-1'>
            <div className={styles.leftColumn}>
              <div className={styles.fixedColumnLeft}>
                <LeftSidebar />
              </div>
            </div>
          </div>

          <div className='profile-homepage-col-2'>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to='/edit-profile' className='editProfile'>
                  Edit Profile
                </Link>
              )}
            <div className='profile-content'>
              <div>
                {" "}
                <ProfileTop profile={profile} />
              </div>
              <div className='posts'>
                {posts
                  // .filter((allPosts) => {
                  //   return allPosts.user === profile.user._id;
                  // })
                  .map((allPosts) => {
                    return (
                      <div>
                        <PostItem key={allPosts._id} post={allPosts} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  getPostsById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    profile: state.profile,
    auth: state.auth,
    post: state.post,
  };
};
export default connect(mapStateToProps, {
  getProfileById,
  getPostsById,
})(Profile);

// import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import Spinner from "../layout/Spinner";
// import ProfileTop from "./ProfileTop";
// import ProfileAbout from "./ProfileAbout";
// import { getProfileById } from "../../actions/profile";

// const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
//   useEffect(() => {
//     getProfileById(match.params.id);
//   }, [getProfileById, match.params.id]);

//   return (
//     <>
//       {profile === null ? (
//         <Spinner />
//       ) : (
//         <>
//           <Link to='/profiles' className='btn btn-light'>
//             Back To Profiles
//           </Link>
//           {auth.isAuthenticated &&
//             auth.loading === false &&
//             auth.user._id === profile.user._id && (
//               <Link to='/edit-profile' className='btn btn-dark'>
//                 Edit Profile
//               </Link>
//             )}
//           <div className='profile-grid my-1'>
//             <ProfileTop profile={profile} />
//             <ProfileAbout profile={profile} />
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// Profile.propTypes = {
//   getProfileById: PropTypes.func.isRequired,
//   profile: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   profile: state.profile,
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { getProfileById })(Profile);
