import React from "react";
import spinner from "./spinner.svg";

export default () => (
  <>
    <img
      src={spinner}
      style={{ width: "70%", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </>
);
