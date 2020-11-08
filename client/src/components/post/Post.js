import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "../posts/PostItem";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";
import { getPost } from "../../actions/post";
import LeftSidebar from "../layout/LeftSidebar";
import styles from "../posts/Posts.module.css";
import styling from "./comment.css";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <div className={styles.postsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.fixedColumnLeft}>
            <LeftSidebar />
          </div>
        </div>
        <div className={styles.middleColumn}>
          <Link to='/posts' className='backHome'>
            <i class='fa fa-arrow-left' aria-hidden='true'></i> back to posts
          </Link>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <div className='comments'>
            {post.comments.map((comment) => (
              <CommentItem
                key={comment._id}
                comment={comment}
                postId={post._id}
              />
            ))}
          </div>
        </div>
        <div className={styles.rightColumn}>
          <div className={styles.fixedColumnRight}>
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
    // <div className='postPage'>
    //   <Link to='/posts' className='backHome'>
    //     <i class='fa fa-arrow-left' aria-hidden='true'></i> back to posts
    //   </Link>
    //   <PostItem post={post} showActions={false} />
    //   <CommentForm postId={post._id} />
    //   <div className='comments'>
    //     {post.comments.map((comment) => (
    //       <CommentItem key={comment._id} comment={comment} postId={post._id} />
    //     ))}
    //   </div>
    // </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
