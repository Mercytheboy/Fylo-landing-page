import React from "react";
import "./btn.css";

function Btn({ label, onClick, ...props }) {
  return (
    <button className="btn" onClick={onClick} {...props}>
      {label}
    </button>
  );
}

export default Btn;
