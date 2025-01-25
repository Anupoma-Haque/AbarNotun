import React, { useState } from "react";
import "./Donate.css";

export default function Donate() {
  const [categories, setCategories] = useState([
    "Clothes",
    "Books",
    "Electronics",
    "Furniture",
    "Toys",
    "Miscellaneous",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [donatedItems, setDonatedItems] = useState([]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const itemName = e.target["item-name"].value;
    const itemDescription = e.target["item-description"].value;
    const category = selectedCategory;
    const imageFile = e.target["image-upload"].files[0];

    // Create a new donated item object
    const newItem = {
      id: Date.now(),
      name: itemName,
      description: itemDescription,
      category: category,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
    };

    // Update the list of donated items
    setDonatedItems((prevItems) => [...prevItems, newItem]);

    // Reset the form
    e.target.reset();
    setSelectedCategory("");
    alert("Thank you for your donation!");
  };

  const showRulesAndRegulations = () => {
    alert(`Rules and Regulations:
    1. Items must be in good, usable condition.
    2. No prohibited or illegal items allowed.
    3. Ensure proper packaging for fragile items.
    4. Only donate items you legally own.
    5. The platform reserves the right to reject inappropriate items.

    More details:
    Donors must ensure all items are clean and functional before donation. Electronics should include necessary cables or accessories. Books must be free from excessive damage, and clothes should be freshly washed. Thank you for contributing responsibly.`);
  };

  return (
    <div className="donate-page">
      {/* Banner */}
      <div className="donate-banner">
        <h1>Make a Difference: Donate Your Items</h1>
        <p>Your unused items can change someone’s life.</p>
      </div>

      {/* Rules Button */}
      <div className="rules-section">
        <button className="rules-button" onClick={showRulesAndRegulations}>
          Rules & Regulations
        </button>
      </div>

      {/* Donation Form */}
      <form className="donation-form" onSubmit={handleDonationSubmit}>
        <h2>Donate an Item</h2>

        <label htmlFor="item-name">Item Name</label>
        <input
          type="text"
          id="item-name"
          placeholder="Enter item name"
          required
        />

        <label htmlFor="item-description">Item Description</label>
        <textarea
          id="item-description"
          placeholder="Enter a brief description"
          rows="4"
          required
        ></textarea>

        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          required
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="image-upload">Upload Image (Optional)</label>
        <input type="file" id="image-upload" accept="image/*" />

        <button type="submit" className="submit-button">
          Donate
        </button>
      </form>

      {/* Donated Items List */}
      <div className="donated-items">
        <h2>Donated Items</h2>
        {donatedItems.length === 0 ? (
          <p>No items have been donated yet.</p>
        ) : (
          <div className="items-grid">
            {donatedItems.map((item) => (
              <div key={item.id} className="item-card">
                {item.image && <img src={item.image} alt={item.name} className="item-image" />}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="item-category">Category: {item.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
