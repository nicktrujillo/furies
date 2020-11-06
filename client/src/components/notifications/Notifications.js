import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "../posts/PostItem";
import LeftSidebar from "../layout/LeftSidebar";
import { getPosts } from "../../actions/post";
import styles from "../posts/Posts.module.css";
import CommentItem from "../post/CommentItem";
// import posts from "../posts/Posts"
// import post from "../post/Post"
const Notifications = ({ getPosts, post: { posts, loading, id }, match }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  console.log(posts);
  return (
    <>
      <div className={styles.postsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.fixedColumn}>
            <LeftSidebar />
          </div>
        </div>
        <div className={styles.middleColumn}>
          <div className='comments'>
            {posts.map((item) =>
              item.comments.map((comment) => (
                <Link to={`/posts/${item._id}`}>
                  <CommentItem comment={comment} />
                </Link>
              ))
            )}
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
Notifications.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Notifications);
