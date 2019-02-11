import React, { Component } from 'react';
import './App.css';
import { Row, Col, Table } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col>
            <Row>
              <Col md={10}>
                <h3>OpenSea</h3>
              </Col>
            </Row>
            <Row className="container">
              <Col md={10}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>LAT</th>
                      <th>LON</th>
                      <th>INFO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>LAT</td>
                      <td>LON</td>
                      <td>INFO</td>
                    </tr>
                    <tr>
                      <td>LAT</td>
                      <td>LON</td>
                      <td>INFO</td>
                    </tr>
                    <tr>
                      <td>LAT</td>
                      <td>LON</td>
                      <td>INFO</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
