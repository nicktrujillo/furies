import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";
import styles from "./Posts.module.css";
import LeftSidebar from "../layout/LeftSidebar";

const Posts = ({ getPosts, post: { posts } }) => {
  console.log(posts);
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <div className={styles.postsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.fixedColumn}>
            <div className={styles.leftColumnItem}>
              <Link to={`/profile/`}>
                <i class='fas fa-user'></i> Profile
              </Link>
            </div>
            <div className={styles.leftColumnItem}>
              <i class='fas fa-bell'></i> Notifications
            </div>
            <div className={styles.leftColumnItem}>
              <i class='fas fa-envelope-open-text'></i> Messages
            </div>
            <div className={styles.leftColumnItem}>
              <i class='fas fa-cog'></i> Settings
            </div>
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
        <div className={styles.rightColumn}>
          <div className={styles.fixedColumn}>
            <h5 className={styles.trendingTitle}>Trending Weekly Top 10</h5>
            <div className={styles.trendingSongs}>
              <ol>
                <li className={styles.trendingSong}> Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
                <li className={styles.trendingSong}>Nick Lace - Kobe</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
