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
  return (
    <>
      <div className={styles.leftColumnItem}>
        <Link to={`/profile/${_id}`}>
          <i class='fas fa-user'></i>&nbsp;&nbsp; Profile
        </Link>
      </div>
      <div className={styles.leftColumnItem}>
        <Link to={`/notifications/${_id}`}>
          <i class='fas fa-bell'></i>&nbsp;&nbsp; Notifications
        </Link>
      </div>
      <div className={styles.leftColumnItem}>
        <Link to='/chat'>
          <i class='fas fa-envelope-open-text'></i>&nbsp;&nbsp; Messages
        </Link>
      </div>
      <div className={styles.leftColumnItem}>
        <Link to='/dashboard'>
          <i class='fas fa-cog'></i>&nbsp;&nbsp; Settings
        </Link>
      </div>
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
