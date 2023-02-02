import "./Preview.scss";
import { motion } from "framer-motion";

const Preview = ({ setPreviewOpen, rd, db }) => {
  const variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 },
  };

  return (
    <motion.div
      className="preview"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <div className="react-img">
        {rd.map((item) => (
          <div
            key={item.id}
            className="item"
            onClick={() => window.open(`${item.url}`, "_blank")}
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
            <span className="img-title">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="design-img">
        {db.map((item) => (
          <div
            key={item.id}
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
            <span className="img-title">{item.title}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Preview;
