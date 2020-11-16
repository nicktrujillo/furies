import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";
import styles from "./comment.css";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div className='post comments-section'>
    <div>
      <div className='nameAndDelete'>
        <div className='commentsNameAndAvi'>
          <Link to={`/profile/${user}`}>
            <img className='round-img' src={avatar} alt='' />
          </Link>
          <Link className='commentsNameAndDate' to={`/profile/${user}`}>
            <h4 className='commentsName'>{name}</h4>
            <p className='post-date'>
              <Moment startof='hour' fromNow>
                {date}
              </Moment>
            </p>
          </Link>
        </div>
        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type='button'
            className='deleteButton'
          >
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
    <div>
      <p className='my-1 commentsText'>{text}</p>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);

// import React from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import Moment from "react-moment";
// import { deleteComment } from "../../actions/post";

// const CommentItem = ({
//   postId,
//   comment: { _id, text, name, avatar, user, date },
//   auth,
//   deleteComment,
// }) => (
//   <div className='post bg-white p-1 my-1'>
//     <div>
//       <Link to={`/profile/${user}`}>
//         <img className='round-img' src={avatar} alt='' />
//         <h4>{name}</h4>
//       </Link>
//     </div>
//     <div>
//       <p className='my-1'>{text}</p>
//       <p className='post-date'>
//         Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
//       </p>
//       {!auth.loading && user === auth.user._id && (
//         <button
//           onClick={() => deleteComment(postId, _id)}
//           type='button'
//           className='btn btn-danger'
//         >
//           <i className='fas fa-times' />
//         </button>
//       )}
//     </div>
//   </div>
// );

// CommentItem.propTypes = {
//   postId: PropTypes.string.isRequired,
//   comment: PropTypes.object.isRequired,
//   auth: PropTypes.object.isRequired,
//   deleteComment: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
// });

// export default connect(mapStateToProps, { deleteComment })(CommentItem);
