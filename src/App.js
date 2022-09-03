import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { PetsContext } from "./Components/PetsContext";
import PetsFilter from "./Components/PetsFilter";
import PetsList from "./Components/PetsList";
import { PetsDataArray } from "./PetsData/PetsDataArray";

function App() {
  const [pets, setPets] = useState(PetsDataArray);
  return (
    <PetsContext.Provider value={{ pets, setPets }}>
      <PetsFilter />
      <PetsList />
    </PetsContext.Provider>
  );
}

export default App;
