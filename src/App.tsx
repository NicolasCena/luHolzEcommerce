import { useState } from "react";
import "../src/styles/index.scss";

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  return (
    <>
      <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
      <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
      <button onClick={saveData}>Enviar</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
