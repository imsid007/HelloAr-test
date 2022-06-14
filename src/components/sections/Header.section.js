import React from "react";

export default function Header() {
  return (
    <div className="header-container">
      {/* brand logo section  */}
      <div className="logo-container">
        <img alt="logo-img" src="images/ar-logo.jpeg" className="ar-logo" />
        <div className="application-title-container">
          MY APPLICATION
          <img
            alt="avatar-img"
            src="images/icons/down-arrow.svg"
            className="down-arraow"
          />
        </div>
      </div>

      {/* user avatar section  */}
      <div className="logo-container">
        <img alt="avatar-img" src="images/avatar.webp" className="avatar" />
        Siddharth Bagal
        <img
          alt="avatar-img"
          src="images/icons/down-arrow.svg"
          className="down-arraow"
        />
      </div>
    </div>
  );
}
