import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./LeftSidebar.module.css";

const LeftSidebar = ({
  auth: {
    user: { _id },
  },
}) => {
  // const { auth, authenticated } = props;
  // const { _id } = auth || {};
  // const isAuthenticated = _id ? true : false;

  return (
    <>
      <Link to={`/profile/${_id}`}>
        <div className={styles.leftColumnItem}>
          <i class='fas fa-user'></i>&nbsp;&nbsp;&nbsp; Profile
        </div>
      </Link>

      <Link to={`/notifications/${_id}`}>
        <div className={styles.leftColumnItem}>
          <i class='fas fa-comments'></i>&nbsp;&nbsp;&nbsp;Discussions
        </div>
      </Link>

      <Link to='/messages'>
        <div className={styles.leftColumnItem}>
          <i class='fas fa-envelope-open-text'></i>&nbsp;&nbsp;&nbsp;Messages
        </div>
      </Link>

      <Link to='/dashboard'>
        <div className={styles.leftColumnItem}>
          <i class='fas fa-cog'></i>&nbsp;&nbsp;&nbsp;Settings
        </div>
      </Link>
    </>
  );
};

LeftSidebar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(LeftSidebar);
