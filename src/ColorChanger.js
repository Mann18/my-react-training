import React, { useState } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "./ColorChanger.css";

const ColorChanger = () => {
  const [color, setColor] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBgColor(color);
    setColor("");
  };

  return (
    <>
      <Navigation />
      <div style={{ backgroundColor: bgColor, minHeight: "100vh" }}>
        <center>
          <h2>Color Changer</h2>
          <form onSubmit={handleSubmit}>
            <label>Enter a color:</label>
            <input
              type="text"
              value={color}
              onChange={handleChange}
              placeholder="e.g., blue, #ffcc00, rgb(255, 0, 0)"
            />
            <button type="submit">Change Background Color</button>
          </form>
        </center>
      </div>
      <Footer />
    </>
  );
};

export default ColorChanger;
