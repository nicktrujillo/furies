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
            autocomplete='off'
          />
        </div>
        <div>
          <input
            className='soundCloudText'
            name='text'
            placeholder='soundcloud link'
            value={soundcloud}
            onChange={(e) => setSoundcloud(e.target.value)}
            autocomplete='off'
          />
          <i className='fab fa-soundcloud'></i>
        </div>
        <div>
          <input
            className='youtubeText'
            name='text'
            placeholder='youtube link'
            value={youtube}
            onChange={(e) => setYoutube(e.target.value)}
            autocomplete='off'
          />
          <i className='fab fa-youtube'></i>
        </div>
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
