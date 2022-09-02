import React from "react";
import { Container, Row } from "react-bootstrap";
import { PetsDataArray } from "../PetsData/PetsDataArray";
import PetCard from "./PetCard";
import "bootstrap/dist/css/bootstrap.min.css";

function PetsList() {
  return (
    <Container>
      <Row>
        {PetsDataArray.map((pet) => (
          <PetCard
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
