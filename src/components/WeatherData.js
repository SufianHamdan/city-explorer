import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

class WeatherData extends Component {
  render() {
    return (
      <div class="container">
        <h3 className="text-center">Check The Weather For 16 Days</h3>
        <br />
        {this.props.weatherInfo &&
          <Row className="justify-content-md-center">
            <CardColumns>

              {this.props.weatherInfo.map((value, index) => {
                return (
                  <Col md="auto">
                    <Card key={index} style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Title className="text-center">{value.date}</Card.Title>
                        <Card.Text className="text-center">{value.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </CardColumns>
          </Row>

        }
        <br />
      </div>
    );
  }
}

export default WeatherData;
