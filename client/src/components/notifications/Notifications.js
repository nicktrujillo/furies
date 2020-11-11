import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostItem from "../posts/PostItem";
import LeftSidebar from "../layout/LeftSidebar";
import { getPostsById } from "../../actions/post";
import styles from "../posts/Posts.module.css";
import CommentItem from "../post/CommentItem";
import { getProfileById, getCurrentProfile } from "../../actions/profile";
import TopTenCard from "../trendingcard/TopTenCard";
import Moment from "react-moment";
// import posts from "../posts/Posts"
// import post from "../post/Post"
import Spinner from "../layout/Spinner";
import styling from "../post/comment.css";

const Notifications = ({
  getCurrentProfile,
  getPostsById,
  post: { posts, loading, id },
  match,
  getProfileById,
  profile: { profile },
  auth: { user },
}) => {
  // useEffect(() => {
  //   checkComments();
  // }, []);

  useEffect(() => {
    getPostsById(match.params.id);
    // checkComments();
  }, [getPostsById, match.params.id]);

  console.log(posts);

  const [commentsExist, setCommentsExist] = useState(true);

  // const checkComments = () => {
  //   posts.forEach(function (post) {
  //     if (post.comments.length > 0) {
  //       setCommentsExist(true);
  //     }
  //     return;
  //   });
  // };

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
            {posts
              .slice(0)
              .reverse()
              .map((allPosts) => {
                return allPosts.comments.map((comments) => {
                  return (
                    <Link to={`/posts/${allPosts._id}`}>
                      <div className='post comments-section'>
                        <div className='commentsNameAndAvi'>
                          <Link to={`/profile/${comments.user}`}>
                            <img
                              className='round-img'
                              src={comments.avatar}
                              alt=''
                            />
                          </Link>
                          <Link
                            className='commentsNameAndDate'
                            to={`/profile/${comments.user}`}
                          >
                            <h4 className='commentsName'>{comments.name}</h4>
                            <h5 className='commentDescription'>
                              commented on "{allPosts.text}"
                            </h5>

                            <p className='post-date'>
                              <Moment startof='hour' fromNow>
                                {comments.date}
                              </Moment>
                            </p>
                          </Link>
                        </div>
                        <div>
                          <p className='my-1 commentsText'>{comments.text}</p>
                        </div>
                      </div>
                    </Link>
                    // <Link to={`/posts/${allPosts._id}`}>
                    //   <CommentItem comment={comments} />
                    // </Link>
                  );
                });
              })}
          </div>
        </div>
        <TopTenCard />
      </div>
    </>
  );
};

Notifications.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getPostsById: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  getProfileById,
  getPostsById,
  getCurrentProfile,
})(Notifications);

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import PostItem from "../posts/PostItem";
// import LeftSidebar from "../layout/LeftSidebar";
// import { getPosts } from "../../actions/post";
// import styles from "../posts/Posts.module.css";
// import CommentItem from "../post/CommentItem";
// // import posts from "../posts/Posts"
// // import post from "../post/Post"
// const Notifications = ({ getPosts, post: { posts, loading, id }, match }) => {
//   useEffect(() => {
//     getPosts();
//   }, [getPosts]);
//   console.log(posts);
//   return (
//     <>
//       <div className={styles.postsContainer}>
//         <div className={styles.leftColumn}>
//           <div className={styles.fixedColumn}>
//             <LeftSidebar />
//           </div>
//         </div>
//         <div className={styles.middleColumn}>
//           <div className='comments'>
//             {posts.map((item) =>
//               item.comments.map((comment) => (
//                 <Link to={`/posts/${item._id}`}>
//                   <CommentItem comment={comment} />
//                 </Link>
//               ))
//             )}
//           </div>
//         </div>
//         <div className={styles.rightColumn}>
//           <div className={styles.fixedColumn}>
//             <h5 className={styles.trendingTitle}>Trending Weekly Top 10</h5>
//             <div className={styles.trendingSongs}>
//               <ol>
//                 <li className={styles.trendingSong}> Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//                 <li className={styles.trendingSong}>Nick Lace - Kobe</li>
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// Notifications.propTypes = {
//   getPosts: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired,
// };
// const mapStateToProps = (state) => ({
//   post: state.post,
// });
// export default connect(mapStateToProps, { getPosts })(Notifications);
