import React, { useState } from "react";
import "./ProjectPage.scss";
import { motion } from "framer-motion";

const ProjectPage = ({ RD }) => {
  const [index, setIndex] = useState(0);

  const variants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 10, opacity: 0 },
  };

  return (
    <section className="project-page">
      <ul className="tab-menu">
        <li># PROJECT</li>
        {RD.map((item) => (
          <li
            key={item.id}
            className={index === item.id ? "active" : null}
            onClick={() => setIndex(item.id)}
          >
            {index === item.id ? (
              <span className="list-icon">
                <i className="xi-folder-open"></i>
              </span>
            ) : (
              <span className="list-icon">
                <i className="xi-folder-o"></i>
              </span>
            )}
            {item.title}
          </li>
        ))}
      </ul>
      {RD.filter((item) => index === item.id).map((item) => (
        <div key={item.id} className="tab-content">
          <motion.div
            className="img-cover"
            transition={{ delay: 0.1, type: "spring" }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/react_0" +
                (item.id + 1) +
                ".png"
              }
              alt=""
            />
          </motion.div>
          <motion.div
            className="des-wrapper"
            transition={{ delay: 0.3, type: "spring" }}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <div className="title">
              <h3>{item.title}</h3>
              <div className="btn-wrapper">
                <button
                  className="btn"
                  onClick={() => window.open(`${item.url}`, "_blank")}
                >
                  WebPage
                </button>
                <button
                  className="btn"
                  onClick={() => window.open(`${item.github}`, "_blank")}
                >
                  Github Code
                </button>
              </div>
            </div>
            <p className="tools">{item.tools}</p>
            <p className="des">{item.description}</p>
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ProjectPage;
