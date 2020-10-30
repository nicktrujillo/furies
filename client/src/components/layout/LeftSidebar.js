import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./LeftSidebar.modules.css";

const LeftSidebar = ({ profile: { _id } }) => {
  <>
    <div>
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
      <i class='fas fa-cog'></i> Settings
    </div>
  </>;
};

LeftSidebar.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(LeftSidebar);
