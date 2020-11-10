import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'>
        <div className={styles.editButtons}>
          <button className={styles.editUserBtn}>
            <i className='fas fa-user-circle settingsEdit' /> Edit User Info
          </button>
          <button className={styles.editProfileBtn}>
            <i class='fas fa-edit settingsEdit'></i> Edit Profile
          </button>
        </div>
      </Link>
    </div>
  );
};
export default DashboardActions;

// import React from "react";
// import { Link } from "react-router-dom";

// const DashboardActions = () => {
//   return (
//     <div className='dash-buttons'>
//       <Link to='/edit-profile' className='btn btn-light'>
//         <i className='fas fa-user-circle text-primary' /> Edit Profile
//       </Link>
//     </div>
//   );
// };

// export default DashboardActions;
