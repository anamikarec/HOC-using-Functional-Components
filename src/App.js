import IncrementCounterByClick from "./Components/IncrementCounterByClick";
import IncrementCounterByHover from "./Components/IncrementCounterByHover";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>
        <IncrementCounterByClick name="Increment By Click" />
      </h2>
      <h2>
        <IncrementCounterByHover name="Increment By Hover" />
      </h2>
    </div>
  );
}
