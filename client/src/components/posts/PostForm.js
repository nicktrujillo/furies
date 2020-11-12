import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import styles from "./PostForm.css";
import logo from "../../img/logo.png";
const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [youtube, setYoutube] = useState("");
  const [link, setLink] = useState("");
  return (
    <div className='post-form'>
      <form
        className='my-1 postForm'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text, soundcloud, youtube });
          setText("");
          setSoundcloud("");
          setYoutube("");
        }}
      >
        <div className='newPost'>
          <textarea
            className='newPostText'
            name='text'
            rows='3'
            placeholder='create a post'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            autoComplete='off'
          />
        </div>
        <select
          name='songLinks'
          id='songs'
          className='typeOfLink'
          onChange={(e) => setLink(e.target.value)}
        >
          <option value='default' selected>
            add music link
          </option>
          <option value='soundcloudLink'>soundcloud</option>
          <option value='youtubelink'>youtube</option>
        </select>
        {link == "soundcloudLink" ? (
          <div id='soundcloudLink' className='soundcloudLink'>
            <input
              className='soundCloudText'
              name='text'
              placeholder='insert soundcloud link'
              value={soundcloud}
              onChange={(e) => setSoundcloud(e.target.value)}
              autoComplete='off'
            />
          </div>
        ) : null}
        {link == "youtubelink" ? (
          <div id='youtubelink' className='youtubelink'>
            <input
              className='youtubeText'
              name='text'
              placeholder='insert youtube link'
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              autoComplete='off'
            />
          </div>
        ) : null}
        <div className='newPostSubmitContainer'>
          <input type='submit' className='newPostSubmit' value='Submit' />
        </div>
      </form>
    </div>
  );
};
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};
export default connect(null, { addPost })(PostForm);
