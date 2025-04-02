import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import "./style.css";

function ProgressBar() {
  const { scrollYProgress } = useScroll();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return <div className="fix">{scrollY}</div>;
}
export default ProgressBar;
