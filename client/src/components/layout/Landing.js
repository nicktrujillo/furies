import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import logo from "../../img/logo.png";
import Posts from "../posts/Posts";
import PostItem from "../posts/PostItem";
import PostForm from "../posts/PostForm";
import LeftSidebar from "../layout/LeftSidebar";
import { getPosts } from "../../actions/post";
import styles from "../posts/Posts.module.css";
import TopTenCard from "../trendingcard/TopTenCard";

const Landing = ({ isAuthenticated, getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (isAuthenticated) {
    return <Redirect to='/posts' />;
  }

  return (
    <>
      <section className='landing'>
        <div className={styles.postsContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.fixedColumnLeft}>
              <h1>hi</h1>
            </div>
          </div>
          <div className={styles.middleColumn}>
            <PostForm />
            <div className='posts'>
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>
          </div>
          <TopTenCard />
        </div>
      </section>
    </>
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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Landing);
