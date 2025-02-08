

import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    setBlogs((prevBlogs) => [...prevBlogs, formData]);

    
    setFormData({
      title: "",
      content: "",
      author: "",
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="form-title">Submit Your Thoughts</h2>

        <form onSubmit={handleSubmit}>
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-input"
          />

          <label className="form-label">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            className="form-textarea"
          ></textarea>

          <label className="form-label">Name</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="form-input"
          />

          <button  type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <div className="blogs-container">
        <h2 className="blogs-title">Thoughts</h2>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="blog-item">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-content">{blog.content}</p>
              <p className="blog-author">- {blog.author}</p>
            </div>
          ))
        ) : (
          <p className="no-blogs">Submit your thought!</p>
        )}
      </div>
    </div>
  );
};

export default Community;
