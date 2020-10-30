import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");
  const [soundcloud, setSoundcloud] = useState("");
  const [youtube, setYoutube] = useState("");

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text, soundcloud, youtube });
          setText("");
          setSoundcloud("");
          setYoutube("");
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <textarea
          className='soundCloudText'
          name='text'
          cols='30'
          rows='1'
          placeholder='Insert SoundCloud Link'
          value={soundcloud}
          onChange={(e) => setSoundcloud(e.target.value)}
        />
        <textarea
          className='youtubeText'
          name='text'
          cols='30'
          rows='1'
          placeholder='Insert YouTube Link'
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
