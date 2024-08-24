import { useState } from "react";
import "../src/styles/index.scss";
import { app } from "./firebase";
import { getDatabase, ref, set, push } from "firebase/database";

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const saveData = async () => {
    try {
      const db = getDatabase(app);
      const newDocRef = push(ref(db, "nature/fruits"));
      await set(newDocRef, {
        fruitName: inputValue1,
        fruitDefinition: inputValue2,
      });
      alert("Datos guardados exitosamente!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  

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
