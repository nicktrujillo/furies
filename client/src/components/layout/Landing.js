import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../../img/logo.png";
import Posts from "../posts/Posts";
import LandingPostItem from "./LandingPostItem";
import PostForm from "../posts/PostForm";
import LeftSidebar from "../layout/LeftSidebar";
import { getPosts } from "../../actions/post";
import styles from "../posts/Posts.module.css";
import TopTenCard from "../trendingcard/TopTenCard";
import styling from "./landing.css";

const Landing = ({
  isAuthenticated,
  getPosts,
  post: { posts },
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
}) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (isAuthenticated) {
    return <Redirect to='/posts' />;
  }

  return (
    <div className={styles.landingContainer}>
      <div className='container'>
        <div className={styles.postsContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.fixedColumnLeft}>
              <>
                <Link to={`/login`}>
                  <div className={styles.leftColumnItem}>
                    <i class='fas fa-user'></i>&nbsp;&nbsp;&nbsp; Profile
                  </div>
                </Link>

                <Link to={`/login`}>
                  <div className={styles.leftColumnItem}>
                    <i class='fas fa-comments'></i>&nbsp;&nbsp;&nbsp;Discussions
                  </div>
                </Link>

                <Link to='/messages'>
                  <div className={styles.leftColumnItem}>
                    <i class='fas fa-envelope-open-text'></i>
                    &nbsp;&nbsp;&nbsp;Messages
                  </div>
                </Link>

                <Link to='/dashboard'>
                  <div className={styles.leftColumnItem}>
                    <i class='fas fa-cog'></i>&nbsp;&nbsp;&nbsp;Settings
                  </div>
                </Link>
              </>
            </div>
          </div>
          <div className={styles.middleColumn}>
            <PostForm />
            <div className='posts'>
              {posts.map((post) => (
                <LandingPostItem key={post._id} post={post} />
              ))}
            </div>
          </div>
          <TopTenCard />
        </div>
      </div>
    </div>

    // <section className='landing'>
    //   <div className='landing-inner'>
    //     <img className='landing-logo' src={logo}></img>
    //     <div className='buttons'>
    //       <Link to='/register' className='btn btn-primary'>
    //         Sign Up
    //       </Link>
    //       <Link to='/login' className='btn btn-light'>
    //         Login
    //       </Link>
    //     </div>
    //   </div>
    // </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  showActions: true,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(Landing);
