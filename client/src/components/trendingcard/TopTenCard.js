import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../posts/Posts.module.css";
function TopTenCard() {
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const soundCloudTwo = "https://soundcloud.com/21savage/many-men";
  const soundcloudWidget = (
    <iframe
      width='560'
      height='80'
      scrolling='no'
      frameBorder='no'
      allow='autoplay'
      src={soundcloudOne + soundCloudTwo + soundCloudThree}
    ></iframe>
  );
  return (
    <div className={styles.rightColumn}>
      <div className={styles.fixedColumnRight}>
        <h5 className={styles.trendingTitle}>Trending Weekly Top 10</h5>
        <div className={styles.trendingSongs}>
          <ol className={styles.actualSongs}>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
            <li>{soundcloudWidget}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default TopTenCard;
