import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../posts/Posts.module.css";
function TopTenCard() {
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const soundCloudTwo = "https://soundcloud.com/21savage/many-men";
  const soundcloudWidget = (
    <iframe
      width='242'
      height='75'
      scrolling='no'
      frameBorder='no'
      allow='autoplay'
      src={soundcloudOne + soundCloudTwo + soundCloudThree}
    ></iframe>
  );
  return (
    <div className={styles.rightColumn}>
      <div className={styles.fixedColumnRight}>
        <h5 className={styles.trendingTitle}>Trending Weekly</h5>
        <div className={styles.trendingSongs}>
          <div className={styles.actualSongs}>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>{soundcloudWidget}</div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> 21 Savage
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>{soundcloudWidget}</div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> 21 Savage
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>{soundcloudWidget}</div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> 21 Savage
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>{soundcloudWidget}</div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> 21 Savage
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>{soundcloudWidget}</div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> 21 Savage
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopTenCard;
