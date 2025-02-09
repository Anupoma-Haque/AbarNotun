import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    email: "",
    image: null, 
  });

  const [showForm, setShowForm] = useState(false); // Toggle form visibility

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file), // Preview image before submission
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setBlogs((prevBlogs) => [...prevBlogs, formData]);

   
    setFormData({
      title: "",
      content: "",
      author: "",
      email: "",
      image: null,
    });

    setShowForm(false); // Hide form after submission
  };

  return (
    <div className="container">
      {/* Add Blog Button */}
      {!showForm && (
        <button className="add-blog-button" onClick={() => setShowForm(true)}>
          Add Your Blog
        </button>
      )}

      {/* Blog Submission Form */}
      {showForm && (
        <div className="form-container">
          <h2 className="form-title">Submit Your Blog</h2>

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

            <label className="form-label">Author Name</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="form-input"
            />

            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />

            <label className="form-label">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-input"
            />

            {/* Show image preview if available */}
            {formData.image && (
              <img src={formData.image} alt="Preview" className="image-preview" />
            )}

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}

      {/* Display Blogs */}
      <div className="blogs-container">
        <h2 className="blogs-title">Blogs</h2>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div key={index} className="blog-item">
              {blog.image && <img src={blog.image} alt="Blog" className="blog-image" />}
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-content">{blog.content}</p>
              <p className="blog-author">- {blog.author}</p>
              <p className="blog-email">{blog.email}</p>
            </div>
          ))
        ) : (
          <p className="no-blogs">Submit your first blog!</p>
        )}
      </div>
    </div>
  );
};

export default Community;

