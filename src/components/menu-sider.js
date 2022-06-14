import React, { useState } from "react";

export default function MenuSider() {
  const [activeMenu, setActiveMenu] = useState("Settings");
  const MENU = [
    "Products",
    "Demo Script",
    "Customers",
    "Sales Team",
    "Demos",
    "Settings",
  ];
  return (
    <div className="menu-container">
      {MENU.map((menu, index) => {
        return (
          <div
            key={index}
            style={{
              backgroundColor: activeMenu === menu ? "#58c274" : "#fff",
            }}
            className="menu-item"
            onClick={() => {
              setActiveMenu(menu);
            }}
          >
            {menu}
          </div>
        );
      })}
    </div>
  );
}
