import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Main.scss";
import { motion } from "framer-motion";

const data = [
  {
    id: 0,
    title: "MY\nPROJECT",
    tit: "clone & ideas",
    path: "project",
  },
  {
    id: 1,
    title: "WEB\nPUBLISHING",
    tit: "javascript",
    path: "javascript",
  },
  {
    id: 2,
    title: "FRONT-END\nDEVELOPER",
    tit: "who am i",
    path: "",
  },
  {
    id: 3,
    title: "CONTACT\nME",
    tit: "thank you !",
  },
];

const Main = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 },
  };

  return (
    <div className="home">
      <div className="container">
        <motion.div
          className="item"
          transition={{ delay: 0.3, type: "spring" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <Link to={data[0].path}>
            <img
              className="item-bg"
              src={process.env.PUBLIC_URL + "/images/bg01.jpg"}
              alt=""
            />
            <div className="inner">
              <h2 className="title">{data[0].title}</h2>
              <div className="tit">{data[0].tit}</div>
              <span className="number">{data[0].id + 1}</span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="item"
          transition={{ delay: 0.4, type: "spring" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <Link to={data[1].path}>
            <img
              className="item-bg"
              src={process.env.PUBLIC_URL + "/images/bg02.jpg"}
              alt=""
            />
            <div className="inner">
              <h2 className="title">{data[1].title}</h2>
              <div className="tit">{data[1].tit}</div>
              <span className="number">{data[1].id + 1}</span>
            </div>
          </Link>
        </motion.div>
        <motion.div
          className="item"
          transition={{ delay: 0.5, type: "spring" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          onClick={showModal}
        >
          <img
            className="item-bg"
            src={process.env.PUBLIC_URL + "/images/bg03.jpg"}
            alt=""
          />
          <div className="inner">
            <h2 className="title">{data[2].title}</h2>
            <div className="tit">{data[2].tit}</div>
            <span className="number">{data[2].id + 1}</span>
          </div>
        </motion.div>
        <motion.div
          className="item"
          transition={{ delay: 0.6, type: "spring" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <a href="mailto:h00kk@naver.com">
            <img
              className="item-bg"
              src={process.env.PUBLIC_URL + "/images/bg04.jpg"}
              alt=""
            />
            <div className="inner">
              <h2 className="title">{data[3].title}</h2>
              <div className="tit">{data[3].tit}</div>
              <span className="number">{data[3].id + 1}</span>
            </div>
          </a>
        </motion.div>
      </div>
      {modalOpen ? <Modal setModalOpen={setModalOpen} /> : null}
    </div>
  );
};

export default Main;
