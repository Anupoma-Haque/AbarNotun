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
    <div>
        
    </div>
  )
}
