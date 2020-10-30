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
      <>
        <Link to='/profiles'>Artists</Link>
      </>
      <>
        <Link to='/posts'>Home</Link>
      </>
      <>
        <Link to='/dashboard'>
          <span className='hide-sm'>Settings</span>
        </Link>
      </>
    </>
  );

  const authLinksRight = (
    <>
      <a onClick={logout} href='/'>
        <i className='fas fa-sign-out-alt' />{" "}
        <span className='hide-sm'>Logout</span>
      </a>
    </>
  );

  const guestLinks = (
    <>
      <>
        <Link to='/register'>Register</Link>
      </>
      <>
        <Link to='/login'>Login</Link>
      </>
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
          <div className={styles.rightNavGuest}>{guestLinks}</div>
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
