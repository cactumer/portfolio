import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DesignPage from "./components/DesignPage/DesignPage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ProjectPage from "./components/ProjectPage/ProjectPage";
import "./css/app.scss";
import { RD, DB } from "./data";

const App = () => {
  const [reactItems, setReactItems] = useState([]);
  const [designItems, setDesignItems] = useState([]);

  useEffect(() => {
    setReactItems(RD);
  }, []);
  useEffect(() => {
    setDesignItems(DB);
  }, []);

  return (
    <div className="Wrapper">
      <Header RD={reactItems} DB={designItems} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project" element={<ProjectPage RD={reactItems} />} />
        <Route path="/javascript" element={<DesignPage DB={designItems} />} />
      </Routes>
    </div>
  );
};

export default App;
