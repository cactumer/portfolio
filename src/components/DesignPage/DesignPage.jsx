import "./DesignPage.scss";
import { motion } from "framer-motion";

const DesignPage = ({ DB }) => {
  const variants = {
    hidden: { y: -10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -10, opacity: 0 },
  };

  return (
    <section className="design">
      <ul className="tab-menu">
        <li># WEB PUBLISHING</li>
        {DB.map((item) => (
          <li
            key={item.id}
            onClick={() => window.open(`${item.github}`, "_blank")}
          >
            <span className="list-icon">
              <i className="xi-folder-open"></i>
            </span>
            {item.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <motion.div
          className="container"
          transition={{ delay: 0.3, type: "spring" }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          {DB.map((item) => (
            <div
              className="item"
              onClick={() => window.open(`${item.url}`, "_blank")}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/item__0" +
                  (item.id + 1) +
                  ".png"
                }
                alt=""
              />
              <span className="title">{item.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPage;
