import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ReputexWidget,defineCustomElements } from "reputex-react-widget";

defineCustomElements();

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <ReputexWidget visibility userAddress="0xE2B20608bc14A40532dC1047E9375a9E20E09B9D" apiAccessKey="3aa62ec9-d9e9-49f1-b2b3-d01fa0d8302a" apiSecretKey="23c4d688632493d5a630163a66242b43be84ce113fef92630a3e8ce6682ef5ac" mode></ReputexWidget>
      </div>
    </>
  );
}

export default App;
