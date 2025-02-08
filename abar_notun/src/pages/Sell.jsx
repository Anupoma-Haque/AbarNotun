import React, { useState } from "react";
import "./Sell.css";

export default function SellPage() {
  const [categories, setCategories] = useState([
    "Clothes",
    "Books",
    "Electronics",
    "Furniture",
    "Toys",
    "Miscellaneous",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [price, setPrice] = useState(""); // New state to store price
  const [sellItems, setSellItems] = useState([]);

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value); // Update price state
  }

  const handleSellSubmit = (e) => {
    e.preventDefault();
    const itemName = e.target["item-name"].value;
    const itemDescription = e.target["item-description"].value;
    const category = selectedCategory;
    const imageFile = e.target["image-upload"].files[0];

    // Create the new item object with price added
    const newItem = {
      id: Date.now(),
      name: itemName,
      description: itemDescription,
      category: category,
      price: price, // Include price in the item object
      image: imageFile ? URL.createObjectURL(imageFile) : null,
    };

    // Add new item to the list
    setSellItems((prevItems) => [...prevItems, newItem]);

    // Reset the form fields
    e.target.reset();
    setSelectedCategory("");
    setPrice(""); // Reset price input field
    alert("Your Product Is Up For Sell");
  };

  const showRulesAndRegulations = () => {
    alert(`Rules and Regulations:
    1. Items must be in good, usable condition.
    2. No prohibited or illegal items allowed.
    3. Ensure proper packaging for fragile items.
    4. Only sell items you legally own.
    5. The platform reserves the right to reject inappropriate items.

    More details:
    Sellers must ensure all items are clean and functional before listing. Electronics should include necessary cables or accessories. Books must be free from excessive damage, and clothes should be freshly washed. Thank you for selling responsibly.`);
  };

  return (
    <div className="sell-page">
      {/* Banner */}
      <div className="sell-banner">
        <h1>Don’t Store It, Sell It!</h1>
        <p>Your unused items can change someone’s life.</p>
      </div>

      {/* Rules Button */}
      <div className="rules-section">
        <button className="rules-button" onClick={showRulesAndRegulations}>
          Rules & Regulations
        </button>
      </div>

      {/* Sell Form */}
      <form className="sell-form" onSubmit={handleSellSubmit}>
        <h2>Sell an Item</h2>

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

        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          placeholder="Enter item price"
          value={price}
          onChange={handlePriceChange}
          required
        />

        <label htmlFor="image-upload">Upload Image (Optional)</label>
        <input type="file" id="image-upload" accept="image/*" />

        <button type="submit" className="submit-button">
          Up For Sell
        </button>
      </form>

      {/* Given Items List */}
      <div className="sell-items">
        <h2>Added Items</h2>
        {sellItems.length === 0 ? (
          <p>No items have been added for sell yet.</p>
        ) : (
          <div className="items-grid">
            {sellItems.map((item) => (
              <div key={item.id} className="item-card">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                  />
                )}
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="item-category">Category: {item.category}</span>
                <p className="item-price">Price: ${item.price}</p> {/* Display price */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
