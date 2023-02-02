import React, { useState } from "react";
import { Link } from "react-router-dom";
import Preview from "../Preview/Preview";
import "./Header.scss";

const Header = ({ RD, DB }) => {
  const [ispreviewOpen, setPreviewOpen] = useState(false);

  const showPreview = () => {
    setPreviewOpen((ispreviewOpen) => !ispreviewOpen);
  };

  return (
    <header className="Header">
      <ul className="nav">
        <li className="logo">
          <h1>
            <Link to="/">
              <i className="xi-flash"></i>
            </Link>
          </h1>
        </li>
        <li className="hd-title">
          <div>
            <span className="sec">2023</span>Portfolio
          </div>
        </li>
        <li className="pv-btn">
          <button onClick={showPreview}>
            {ispreviewOpen ? (
              <i className="xi-snowy"></i>
            ) : (
              <i className="xi-cloudy"></i>
            )}
          </button>
        </li>
      </ul>
      {ispreviewOpen ? (
        <Preview rd={RD} db={DB} setPreviewOpen={setPreviewOpen} />
      ) : null}
    </header>
  );
};

export default Header;
