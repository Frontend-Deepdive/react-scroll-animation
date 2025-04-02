import { useScroll } from "framer-motion";
import "./App.css";
import { useEffect, useState } from "react";
import FoodItem from "./components/FoodItem";

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
      <div className="fix">
        {scrollY} <br />
      </div>

      <div className="container">
        <div className="fix">{scrollY}</div>
        {foodData.map((food, index) => (
          <FoodItem key={index} emoji={food} />
        ))}
      </div>
    </div>
  );
}

const foodData: string[] = ["🍅", "🍊", "🍋", "🍏", "🫐", "🍆", "🍇"];

export default App;
