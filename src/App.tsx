import "./styles.css";
import { useBattery } from "./hooks/useBattery";

export default function App() {
  const battery = useBattery();

  return (
    <div className="App">
      <h1>Useful Hooks</h1>
      <pre>battery is: {JSON.stringify(battery)}</pre>
    </div>
  );
}
