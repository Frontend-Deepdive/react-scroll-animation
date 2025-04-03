import "./App.css";
import FoodItem from "./components/FoodItem";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="container">
      <ProgressBar />
      {foodData.map((food, index) => (
        <FoodItem key={index} emoji={food} />
      ))}
    </div>
  );
}

const foodData: string[] = ["🍅", "🍊", "🍋", "🍏", "🫐", "🍆"];

export default App;
