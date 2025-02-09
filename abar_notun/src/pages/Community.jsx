
import React, { useState } from "react";
import "./Community.css";

const Community = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    email: "",
    image: null
  });
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterAuthor, setFilterAuthor] = useState("");
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState(new Set());

  // Toggle form visibility
  const toggleForm = () => setShowForm(!showForm);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  // Handle blog submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setBlogs((prevBlogs) => [...prevBlogs, { ...formData, likes: 0, comments: [] }]);
    setFormData({ title: "", content: "", author: "", email: "", image: null });
    setShowForm(false);
  };

  // Handle like button
  const handleLike = (index) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog, i) => i === index ? { ...blog, likes: blog.likes + 1 } : blog)
    );
  };

  // Handle comment submission
  const handleCommentSubmit = (index, comment) => {
    setBlogs((prevBlogs) =>
      prevBlogs.map((blog, i) =>
        i === index ? { ...blog, comments: [...blog.comments, comment] } : blog
      )
    );
  };

  // Handle bookmark
  const handleBookmark = (index) => {
    setBookmarkedBlogs((prev) => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(index)) newBookmarks.delete(index);
      else newBookmarks.add(index);
      return newBookmarks;
    });
  };

  // Filtered blogs based on search & author filter
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterAuthor ? blog.author.toLowerCase() === filterAuthor.toLowerCase() : true)
  );

  return (
   
    
   
<div className="container">
      {/* Search & Filter */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search blogs..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select className="filter-dropdown" onChange={(e) => setFilterAuthor(e.target.value)}>
          <option value="">Filter by Author</option>
          {[...new Set(blogs.map(blog => blog.author))].map((author, index) => (
            <option key={index} value={author}>{author}</option>
          ))}
        </select>
      </div>

      {/* Add Blog Button */}
      <button className="add-blog-button" onClick={toggleForm}>
        {showForm ? "Close Blog Form" : "Add Your Blog"}
      </button>

      {/* Blog Submission Form */}
      {showForm && (
        <div className="form-container">
          <h2 className="form-title">Submit Your Blog</h2>
          <form onSubmit={handleSubmit}>
            <label className="form-label">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required className="form-input" />

            <label className="form-label">Content</label>
            <textarea name="content" value={formData.content} onChange={handleChange} required className="form-textarea"></textarea>

            <label className="form-label">Author Name</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} required className="form-input" />

            <label className="form-label">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" />

            <label className="form-label">Upload Image</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="form-input" />

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      )}

      {/* Blogs Display */}
      <div className="blogs-container">
        <h2 className="blogs-title">Community Blogs</h2>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index} className="blog-item">
              {blog.image && <img src={blog.image} alt="Blog" className="blog-image" />}
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-author">By {blog.author} ({blog.email})</p>
              <p className="blog-content">{blog.content}</p>

              {/* Like & Bookmark */}
              <div className="like-comment-container">
                <button className="like-button" onClick={() => handleLike(index)}>❤️ {blog.likes}</button>
                <button className="bookmark-button" onClick={() => handleBookmark(index)}>
                  {bookmarkedBlogs.has(index) ? "🔖 Bookmarked" : "📌 Bookmark"}
                </button>
              </div>

              {/* Comments Section */}
              <div className="comment-section">
                <input
                  type="text"
                  placeholder="Write a comment..."
                  className="comment-input"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCommentSubmit(index, e.target.value);
                  }}
                />
                <div>
                  {blog.comments.map((comment, i) => (
                    <p key={i} className="comment-item">💬 {comment}</p>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-blogs">No blogs yet. Be the first to share!</p>
        )}
      </div>
    </div>
  );
};

export default Community;
