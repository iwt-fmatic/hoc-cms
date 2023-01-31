import React, { useState } from 'react';
import "./form.css";

const Form = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = event => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addPost({ title, text });
    setTitle('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
       <input type="file" onChange={handleImageChange} />
       {image && <img src={URL.createObjectURL(image)} alt="Preview" />}
      <button type="submit">Add Post</button>
    </form>
  );
};

export default Form;
