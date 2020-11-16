import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../posts/Posts.module.css";
function TopTenCard() {
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const songOne = "https://soundcloud.com/plukomusic/lorde-flumesworth";
  const songTwo = "https://soundcloud.com/ecco2k-music/calcium-1";
  const songThree = "https://soundcloud.com/oddkidout/walking-on-a-dream";
  const songFour = "https://soundcloud.com/dogdick/let-it-go";
  const songFive = "https://soundcloud.com/bladee1000/4-34-edit";

  return (
    <div className={styles.rightColumn}>
      <div className={styles.fixedColumnRight}>
        <h5 className={styles.trendingTitle}>Trending Weekly</h5>
        <div className={styles.trendingSongs}>
          <div className={styles.actualSongs}>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>
                {" "}
                <iframe
                  width='242'
                  height='75'
                  scrolling='no'
                  frameBorder='no'
                  allow='autoplay'
                  src={soundcloudOne + songOne + soundCloudThree}
                ></iframe>
              </div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> Pluko
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>
                {" "}
                <iframe
                  width='242'
                  height='75'
                  scrolling='no'
                  frameBorder='no'
                  allow='autoplay'
                  src={soundcloudOne + songTwo + soundCloudThree}
                ></iframe>
              </div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> ecco2k
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>
                {" "}
                <iframe
                  width='242'
                  height='75'
                  scrolling='no'
                  frameBorder='no'
                  allow='autoplay'
                  src={soundcloudOne + songThree + soundCloudThree}
                ></iframe>
              </div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> OddKidOut
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>
                {" "}
                <iframe
                  width='242'
                  height='75'
                  scrolling='no'
                  frameBorder='no'
                  allow='autoplay'
                  src={soundcloudOne + songFour + soundCloudThree}
                ></iframe>
              </div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> Dog
              </p>
            </div>
            <div className={styles.trendingSong}>
              <div className={styles.scWidget}>
                {" "}
                <iframe
                  width='242'
                  height='75'
                  scrolling='no'
                  frameBorder='no'
                  allow='autoplay'
                  src={soundcloudOne + songFive + soundCloudThree}
                ></iframe>
              </div>
              <p className={styles.trendingSongLabel}>
                <i class='fas fa-user'></i> Bladee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopTenCard;
