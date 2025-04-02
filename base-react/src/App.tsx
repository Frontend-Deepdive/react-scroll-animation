import { useScroll } from "framer-motion";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { scrollYProgress } = useScroll();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollY(latest);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="container">
      <div className="fix">{scrollY}</div>
    </div>
  );
}

export default App;
