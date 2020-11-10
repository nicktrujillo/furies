import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./formservice.css";

function FormService() {
  return (
    <form>
      <label for='name'>Name:</label>
      <br></br>
      <input
        className={styles.serviceForm}
        type='text'
        id='name'
        name='name'
      ></input>
      <br></br>
      <label for='email'>Email:</label>
      <br></br>
      <input
        className={styles.serviceForm}
        type='text'
        id='email'
        name='email'
      ></input>
      <br></br>
      <label for='link'>Link:</label>
      <br></br>
      <input
        className={styles.serviceForm}
        type='text'
        id='link'
        name='link'
        placeholder='Please include the link to your song/video'
      ></input>
      <br></br>
      <label for='Note'>Note:</label>
      <br></br>
      <input
        className={styles.serviceFormNote}
        type='text'
        id='note'
        name='note'
      ></input>
      <br></br>
      <p>
        *For mixing and mastering please email your stem files to
        support@millody.com
      </p>
    </form>
  );
}
export default FormService;
