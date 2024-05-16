import React from "react";

function Quantity({ value, setValueFunc}) {
  const handleChange = (e) => {
    setValueFunc(parseFloat(e.target.value));
  };

  return (
    <input
      type="number"
      placeholder="Qty"
      value={value}
      step={0.01}
      onChange={handleChange}
    ></input>
  );
}

export default Quantity;
