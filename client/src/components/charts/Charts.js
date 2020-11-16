import React from "react";
import { Link } from "react-router-dom";
import styles from "./charts.css";
function Charts() {
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const songOne = "https://soundcloud.com/nicklacemusic/kobe";
  const songTwo = "https://soundcloud.com/thaiboy-digital/nervous";
  const songThree = "https://soundcloud.com/bladee1000/4-34-edit";
  const songFour = "https://soundcloud.com/ecco2k-music/calcium-1";
  const songFive = "https://soundcloud.com/plukomusic/lorde-flumesworth";
  const songSix =
    "https://soundcloud.com/phantoms/somebody-feat-hannah-robinson?in=phantoms/sets/moonlight-735133911";
  const songSeven = "https://soundcloud.com/nicklacemusic/carlo-heat-diss";
  const songEight = "https://soundcloud.com/oddkidout/walking-on-a-dream";
  const songNine = "https://soundcloud.com/bladee1000/obedient-ft-ecco2k";
  const songTen = "https://soundcloud.com/plukomusic/goo";

  return (
    <div className='chartsContainer'>
      <div className='charts-row-1'>
        <div className='charts-avi-title'>
          <div className='chartsAvi'></div>

          <p className='charts-subtext-2'>Weekly Top 10</p>
        </div>
      </div>
      <div className='charts-row-2'>
        <table className='chartsTable'>
          <tr>
            <th className='tableHeader'>#</th>
            <th className='tableHeaderSongs'>Songs</th>
            <th className='tableHeaderDate'>Date Added</th>
            <th className='tableHeaderArtist'>Artist</th>
          </tr>
          <tr>
            <td>1</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songOne + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> Nick Lace </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songTwo + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}>
                {" "}
                thaiboy digital{" "}
              </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songThree + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> BLADEE </Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songFour + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> Ecco2k </Link>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songFive + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> pluko </Link>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songSix + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> Phantoms </Link>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songSeven + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> Nick Lace </Link>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songEight + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> OddKidOut </Link>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songNine + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> BLADEE </Link>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td className='chartsSongs'>
              {" "}
              <iframe
                width='560'
                height='100'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={soundcloudOne + songTen + soundCloudThree}
                className='scWidget'
              ></iframe>
            </td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> pluko </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Charts;
