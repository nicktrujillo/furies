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
        <Link to='/dashboard'>
          <i class='fas fa-cog'></i> Settings
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
