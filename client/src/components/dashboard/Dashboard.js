import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashboardActions from "./DashboardActions";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";
import styling from "./Dashboard.module.css";
import LeftSidebar from "../layout/LeftSidebar";
import styles from "../posts/Posts.module.css";
import TopTenCard from "../trendingcard/TopTenCard";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>
      <div className={styles.postsContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.fixedColumnLeft}>
            <LeftSidebar />
          </div>
        </div>
        <div className={styles.middleColumn}>
          <>
            <h1 className={styles.settingsTitle}>Settings</h1>
            {profile !== null ? (
              <>
                <div className={styles.buttonContainer}>
                  <DashboardActions />
                  <button
                    className={styles.deleteBtn}
                    onClick={() => deleteAccount()}
                  >
                    <i className='fas fa-user-minus' /> Delete My Account
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className={styles.welcome}>
                  <i class='fas fa-music'></i> Welcome {user && user.name}{" "}
                  <i class='fas fa-music'></i>
                </h1>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to='/create-profile' className='btn btn-primary my-1'>
                  Create Profile
                </Link>
              </>
            )}
          </>
        </div>
        <TopTenCard />
      </div>
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);

// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import DashboardActions from "./DashboardActions";
// import { getCurrentProfile, deleteAccount } from "../../actions/profile";
// import styles from "./Dashboard.module.css";

// const Dashboard = ({
//   getCurrentProfile,
//   deleteAccount,
//   auth: { user },
//   profile: { profile },
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, [getCurrentProfile]);

//   return (
//     <>
//       <h1 className='large text-primary'>Settings</h1>
//       <p className={styles.welcome}>
//         <i className='fas fa-user' /> Welcome {user && user.name}
//       </p>
//       {profile !== null ? (
//         <>
//           <DashboardActions />
//           <div className='my-2'>
//             <button className='btn btn-danger' onClick={() => deleteAccount()}>
//               <i className='fas fa-user-minus' /> Delete My Account
//             </button>
//           </div>
//         </>
//       ) : (
//         <>
//           <p>You have not yet setup a profile, please add some info</p>
//           <Link to='/create-profile' className='btn btn-primary my-1'>
//             Create Profile
//           </Link>
//         </>
//       )}
//     </>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   deleteAccount: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   profile: state.profile,
// });

// export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
//   Dashboard
// );
