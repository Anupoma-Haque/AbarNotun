import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use navigate for programmatic routing
import './Add.css';

const Add = () => {
    const [menu, setMenu] = useState(""); // Track active menu (Donate or Sell)
    const navigate = useNavigate(); // Hook to navigate to different routes

    // Handle click on Donate button
    const handleDonateClick = () => {
        setMenu("donate"); // Set active menu to Donate
        navigate('/Donate'); // Navigate to Donate page
    };

    // Handle click on Sell button
    const handleSellClick = () => {
        setMenu("sell"); // Set active menu to Sell
        navigate('/Sell'); // Navigate to Sell page
    };

    return (
        <div className="add">
            <div className="add-left">
                <h1>Abar Notun</h1>
                <br></br>
                <br></br>
                <div>
                    <div className="add-icon">
                        <h2>Building Bridges</h2>
                    </div>
                    <h2>Strengthening Bonds</h2>
                </div>
                <br></br>
                <br></br>
                <br></br>
                {/* Buttons for Sell and Donate */}
                <div className="add-buttons">
                    <button
                        className={`add-button ${menu === "sell" ? "active" : ""}`} // Add 'active' class if Sell is selected
                        onClick={handleSellClick}
                    >
                        <div>Sell Items</div>
                    </button>
                    <button
                        className={`add-button ${menu === "donate" ? "active" : ""}`} // Add 'active' class if Donate is selected
                        onClick={handleDonateClick}
                    >
                        <div>Donate Items</div>
                    </button>
                </div>
            </div>

            <div className="add-right">
                <img src="image/SellorDonate.png" alt="SoD" />
            </div>
        </div>
    );
};

export default Add;
