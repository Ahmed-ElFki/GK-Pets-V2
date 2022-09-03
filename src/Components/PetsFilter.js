import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { PetsContext } from "./PetsContext";

function PetsFilter() {
  const [petCriteria, setPetCriteria] = useState("race");
  // eslint-disable-next-line
  const [searchValue, setSearchValue] = useState("");
  // eslint-disable-next-line
  const { pets, setPets } = useContext(PetsContext);

  const handleSubmit = () => {
    switch (petCriteria) {
      case "race":
        setPets([
          ...pets
            .filter((pet) =>
              pet.race.toLowerCase() === searchValue.toLowerCase() ? pet : null
            )
            .filter((pet) => pet !== null),
        ]);
        break;
      case "type":
        setPets([
          ...pets
            .filter((pet) =>
              pet.type.toLowerCase() === searchValue.toLowerCase() ? pet : null
            )
            .filter((pet) => pet !== null),
        ]);
        break;
      case "location":
        setPets([
          ...pets
            .filter((pet) =>
              pet.location.toLowerCase() === searchValue.toLowerCase()
                ? pet
                : null
            )
            .filter((pet) => pet !== null),
        ]);
        break;
    }
  };

  return (
    <Container style={{ marginTop: "25px" }}>
      <Row>
        <Col lg={8} md={8} sm={8}>
          <InputGroup
            className="mb-3"
            onChange={(e) => setSearchValue(e.target.value)}
          >
            <Form.Control
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col lg={2} md={2} sm={2}>
          <DropdownButton id="dropdown-basic-button" title="-Search option-">
            <Dropdown.Item onClick={() => setPetCriteria("race")}>
              Race
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setPetCriteria("type")}>
              Type
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setPetCriteria("location")}>
              Location
            </Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col lg={2} md={2} sm={2}>
          <Button
            variant="primary"
            onClick={handleSubmit}
            style={{ width: "100%" }}
          >
            Launch Search
          </Button>{" "}
        </Col>
      </Row>
    </Container>
  );
}

export default PetsFilter;
