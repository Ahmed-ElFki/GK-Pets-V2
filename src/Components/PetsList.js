import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import PetCard from "./PetCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { PetsContext } from "./PetsContext";

function PetsList() {
  // eslint-disable-next-line
  const { pets, setPets } = useContext(PetsContext);

  return (
    <Container>
      <Row>
        {pets.map((pet) => (
          <PetCard
            key={pet.id}
            id={pet.id}
            name={pet.name}
            race={pet.race}
            type={pet.type}
            location={pet.location}
            photo={pet.photo}
            status={pet.status}
          />
        ))}
      </Row>
    </Container>
  );
}

export default PetsList;
