import React from "react";
import { Link } from "react-router-dom";
import styles from "./charts.css";
function Charts() {
  const soundcloudOne = "https://w.soundcloud.com/player/?url=";
  const soundCloudThree = "?//api.soundcloud.com/tracks/293";
  const soundCloudTwo = "https://soundcloud.com/21savage/many-men";
  const soundcloudWidget = (
    <iframe
      width='560'
      height='100'
      scrolling='no'
      frameBorder='no'
      allow='autoplay'
      src={soundcloudOne + soundCloudTwo + soundCloudThree}
      className='scWidget'
    ></iframe>
  );
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
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td className='chartsSongs'>{soundcloudWidget}</td>
            <td className='chartsDates'>11-7-2020</td>
            <td className='chartsArtists'>
              <Link to={`/profile/5fab0fbec29440257f93c954`}> 21 Savage </Link>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
export default Charts;
