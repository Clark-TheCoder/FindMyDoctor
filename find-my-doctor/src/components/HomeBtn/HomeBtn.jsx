import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "1rem",
        zIndex: 1000,
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Home
    </button>
  );
}

export default HomeButton;
