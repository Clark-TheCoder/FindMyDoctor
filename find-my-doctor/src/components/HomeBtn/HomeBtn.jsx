import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeBtn.css";

function HomeButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="btn-styled">
      Home
    </button>
  );
}

export default HomeButton;
