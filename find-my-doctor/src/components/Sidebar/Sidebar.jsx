import { useState } from "react";

function Sidebar({ onSetProvince }) {
  const [active, setActive] = useState(-1);

  const provinces = [
    "New Brunswick",
    "Nova Scotia",
    "Newfoundland",
    "Prince Edward Island",
    "Quebec",
    "Ontario",
  ];

  function createSidebarComponents() {
    return provinces.length > 0
      ? provinces.map((item, index) => {
          return (
            <button
              key={item}
              className={`list-group-item list-group-item-action ${
                active === index ? "active" : ""
              }`}
              onClick={() => {
                setActive(index);
                onSetProvince(item);
              }}
            >
              {item}
            </button>
          );
        })
      : null;
  }

  return (
    <div
      className="bg-light border-end"
      style={{
        width: "250px",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <div className="list-group">{createSidebarComponents()}</div>
    </div>
  );
}

export default Sidebar;
