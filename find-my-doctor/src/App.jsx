// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Home from "./pages/Home.jsx";
// import { Router } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <Home></Home>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/doctor/:id" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
