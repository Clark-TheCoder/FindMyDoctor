import { Fragment } from "react";
import Header from "../components/Header/Header.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import Main from "../components/Main/Main.jsx";
import { useState } from "react";

function Home() {
  const [province, setProvince] = useState(null);
  return (
    <>
      <Header title="Find My Doctor" />
      <div className="d-flex">
        <Sidebar onSetProvince={setProvince} />
        <Main selectedProvince={province} />
      </div>
    </>
  );
}

export default Home;
