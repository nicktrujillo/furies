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
    ></iframe>
  );
  return (
    <div className='chartsContainer'>
      <div className='charts-row-1'>
        <div className='chartsAvi'></div>
        <div>
          <p className='charts-subtext'>Chart</p>
          <p className='charts-subtext-2'>Weekly Top 10</p>
        </div>
      </div>
      <div className='charts-row-2'>
        <div className='charts-nav'>
          <div className='charts-number-sign'>#</div>
          <div className='charts-song-title'>Title</div>
          <div className='charts-date-added'>Date Added</div>
          <div className='charts-song-length'>Artist</div>
        </div>
      </div>
      <div className='charts-row-3'>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>1</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>2</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>3</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>4</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>5</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>6</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>7</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>8</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>9</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
        <div className='chart-content'>
          <div className='charts-ranking'>
            <div>10</div>{" "}
          </div>
          <div className='charts-song'>{soundcloudWidget}</div>
          <div className='charts-date'>11/8/2020</div>
          <div className='charts-length'>21 Savage</div>
        </div>
      </div>
    </div>
  );
}
export default Charts;
