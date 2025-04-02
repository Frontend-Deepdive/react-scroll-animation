import { motion, useScroll } from "motion/react";
import "./style.css";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <div>
      <motion.div
        style={{
          height: "1rem",
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
    </div>
  );
}
export default ProgressBar;
