import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FormService.module.css";
import PaypalButtons from "./PaypalButtons";
function FormService(props) {
  const [showPaypal, setShowPaypal] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setShowPaypal(true);
  }
  return (
    <>
      {showPaypal ? (
        <div className={styles.paypalButtons}>
          <PaypalButtons price={props.price} product={props.product} />
        </div>
      ) : (
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <p>Please complete the information below before paying! </p>
            <br></br>
            <input
              placeholder='Name:'
              className={styles.serviceForm}
              type='text'
              id='name'
              name='name'
            ></input>
            <br></br>
            <br></br>
            <input
              placeholder='Email:'
              className={styles.serviceForm}
              type='text'
              id='email'
              name='email'
            ></input>
            <br></br>
            <br></br>
            <input
              className={styles.serviceForm}
              type='text'
              id='link'
              name='link'
              placeholder='Link: Please include the link to your song/video'
            ></input>
            <br></br>
            <textarea
              placeholder='Note:'
              className={styles.serviceFormNote}
              type='text'
              id='note'
              name='note'
            ></textarea>
            <br></br>
            <p className={styles.formStar}>
              * For mixing and mastering please email your stem files to
              <br />
              <a className={styles.mailLink} href='mailto:support@millody.com'>
                {" "}
                support@millody.com
              </a>
            </p>
            <div className={styles.divSupportBtn}>
              <input className={styles.supportBtn} type='submit' />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default FormService;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./FormService.module.css";
// import PaypalButtons from "./PaypalButtons";

// function FormService(props) {
//   const [showPaypal, setShowPaypal] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setShowPaypal(true);
//   }

//   return (
//     <>
//       {showPaypal ? (
//         <div className={styles.paypalButtons}>
//           <PaypalButtons price={props.price} product={props.product} />
//         </div>
//       ) : (
//         <div className={styles.formContainer}>
//           <form onSubmit={handleSubmit}>
//             <label for='name'>Name:</label>
//             <br></br>
//             <input
//               className={styles.serviceForm}
//               type='text'
//               id='name'
//               name='name'
//             ></input>
//             <br></br>
//             <label for='email'>Email:</label>
//             <br></br>
//             <input
//               className={styles.serviceForm}
//               type='text'
//               id='email'
//               name='email'
//             ></input>
//             <br></br>
//             <label for='link'>Link:</label>
//             <br></br>
//             <input
//               className={styles.serviceForm}
//               type='text'
//               id='link'
//               name='link'
//               placeholder='Please include the link to your song/video'
//             ></input>
//             <br></br>
//             <p className={styles.noteLabel} for='Note'>
//               Note:
//             </p>
//             <textarea
//               className={styles.serviceFormNote}
//               type='text'
//               id='note'
//               name='note'
//             ></textarea>
//             <br></br>
//             <p className={styles.formStar}>
//               *For mixing and mastering please email your stem files to
//               <a className={styles.mailLink} href='mailto:support@millody.com'>
//                 {" "}
//                 support@millody.com
//               </a>
//             </p>
//             <input className={styles.formSubmit} type='submit' />
//           </form>
//         </div>
//       )}
//     </>
//   );
// }
// export default FormService;
