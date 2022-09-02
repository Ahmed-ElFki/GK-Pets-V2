import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PetsContext } from "./Components/PetsContext";
import PetsList from "./Components/PetsList";
import { PetsDataArray } from "./PetsData/PetsDataArray";

function App() {
  const [pets, setPets] = useState(PetsDataArray);
  return (
    <PetsContext.Provider value={{ pets, setPets }}>
      <PetsList />
    </PetsContext.Provider>
  );
}

export default App;
