import { motion, useScroll, useTransform } from "motion/react";
import "./style.css";

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["#BA2A18", "#F89A44", "#FAE644", "#A1DB4B", "#87BFFF", "#986893"]
  );

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
          backgroundColor,
        }}
      />
    </div>
  );
}
export default ProgressBar;
