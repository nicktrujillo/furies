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

  return (
    <div className='post-form'>
      <form
        className='my-1'
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
          />
        </div>
        <div className='songLinks'>
          <div>
            <label>
              <i className='fab fa-soundcloud'></i>
            </label>
            <textarea
              className='soundCloudText'
              name='text'
              cols='30'
              rows='1'
              placeholder='insert soundcloud link'
              value={soundcloud}
              onChange={(e) => setSoundcloud(e.target.value)}
            />
          </div>
          <h4 className='or'>or</h4>
          <div>
            <textarea
              className='youtubeText'
              name='text'
              cols='30'
              rows='1'
              placeholder='insert youtube link'
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
            />
            <label>
              <i className='fab fa-youtube'></i>
            </label>
          </div>
        </div>
        <div className='newPostSubmitContainer'>
          <div>
            <input type='submit' className='newPostSubmit' value='Submit' />
          </div>
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
