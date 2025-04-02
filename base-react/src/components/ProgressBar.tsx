import { useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import "./style.css";

function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const [scrollY, setScrollY] = useState(0);

  const status = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="fix">
      <div
        style={{ height: "1rem", width: status.get(), backgroundColor: "red" }}
      ></div>
      {status.get()}
    </div>
  );
}
export default ProgressBar;
