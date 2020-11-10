import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile'>
        <button className={styles.editProfileBTN}>
          <i className='fas fa-user-circle text-primary' /> Edit Profile
        </button>
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
