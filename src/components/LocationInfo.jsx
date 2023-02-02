import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const LocationInfo = ({ location }) => {
  const { name, type, dimension, residents } = location;

  return (
    <>
      <div className="container ">
        <div className="container my-5" >
          {
            <Card>
              <Card.Header as="h5" className="text-center text-white bg-success">
                {name}
              </Card.Header>
              <Card.Body className="text-white">
                <Row className="container text-center">
                  <Col>
                    <Card.Title>Type:</Card.Title>
                    <Card.Text>{type}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Dimesion:</Card.Title>
                    <Card.Text>{dimension}</Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Residents:</Card.Title>
                    {residents?.length === 0 ? (
                      <Card.Text>No Residents</Card.Text>
                    ) : (
                      <Card.Text>{residents?.length}</Card.Text>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          }
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
