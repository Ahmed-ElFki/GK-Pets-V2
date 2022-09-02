import React from "react";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PetDataGenerator from "./PetDataGenerator";

function PetCard({ name, race, type, location, photo, status }) {
  return (
    <Col lg={4} md={6} sm={12} style={{ marginBottom: "15px" }}>
      <Card>
        <Card.Img variant="top" src={photo} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "base-line",
            }}
          >
            <PetDataGenerator
              data={location}
              dataIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#EB1D36"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
              }
            />

            <PetDataGenerator
              data={status ? "Available to adoption" : "Adopted"}
              dataIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={status ? "#7FB77E" : "#EB1D36"}
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              }
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default PetCard;
