import React, { useState } from "react";
function App() {
  const [color, setColor] = useState("#f0e6ef");
  const colors = [
    { hex: "#c1121f", text: "Thunderbird" },
    { hex: "#219ebc", text: "Eastern Blue" },
    { hex: "#ccd5ae", text: "Green Mist" },
    { hex: "#ffafcc", text: "Carnation Pink" },
    { hex: "#84a98c", text: "Bay Leaf" },
    { hex: "#ffcdb2", text: "Romantic" },
    { hex: "#bcb8b1", text: "Tideapprox" },
    { hex: "#43aa8b", text: "Ocean Green" },
    { hex: "#1b4965", text: "Biscayapprox" },
  ];
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        {" "}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          
        {colors.map((colorData) => (
            <button
              key={colorData.hex}
              onClick={() => setColor(colorData.hex)}
              style={{ backgroundColor: colorData.hex }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            >
              {colorData.text}
            </button>
          ))}
         
        </div>
      </div>
    </div>
  );
}

export default App;
