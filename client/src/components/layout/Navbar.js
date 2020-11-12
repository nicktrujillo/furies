import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import logo from "../../img/done.png";
import styles from "./Navbar.module.css";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinksMiddle = (
    <>
      <Link to='/posts'>
        <p className={styles.middleLink}>Home</p>
      </Link>

      <Link to='/charts'>
        <p className={styles.middleLink}>Charts</p>
      </Link>

      <Link to='/services'>
        <p className={styles.middleLink}>Services</p>
      </Link>
    </>
  );

  const authLinksRight = (
    <>
      <a className={styles.rightLink} onClick={logout} href='/'>
        <p className='hide-sm'>
          <i className='fas fa-sign-out-alt' /> Logout
        </p>
      </a>
    </>
  );

  const guestLinks = (
    <>
      <Link to='/login'>
        <p className={styles.rightLinkGuest}>Login</p>
      </Link>
      <Link to='/register'>
        <p className={styles.rightLinkGuest}>Register</p>
      </Link>
    </>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <Link to='/'>
          <img className={styles.navbarLogoTwo} src={logo}></img>
        </Link>
      </div>
      <>
        {isAuthenticated ? (
          <>
            <div className={styles.middleNav}>{authLinksMiddle}</div>
            <div className={styles.rightNav}>{authLinksRight}</div>
          </>
        ) : (
          <>
            <div className={styles.middleNav}>{authLinksMiddle}</div>
            <div className={styles.rightNavGuest}>{guestLinks}</div>
          </>
        )}
      </>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
