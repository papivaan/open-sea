import React, { Component } from 'react';
import { Row, Col, Table, Button } from 'react-bootstrap';

import axios from '../axios';
import '../App.css';

const date = new Date();
class AddData extends Component {
  state = {
    form: {
      MMSI: undefined,
      IMO: undefined,
      SHIP_ID: undefined,
      LAT: undefined,
      LON: undefined,
      SPEED: undefined,
      HEADING: undefined,
      COURSE: undefined,
      STATUS: undefined,
      TIMESTAMP: date.toISOString(),
      DSRC: undefined,
      UTC_SECONDS: date.valueOf().toString(),
    },
  };

  handleValueChanged = (event, inputIdentifier) => {
    const updatedForm = { ...this.state.form };
    updatedForm[inputIdentifier] = event.target.value;
    this.setState({ form: updatedForm });
  }

  handleSave = () => {
    const { form } = this.state;
    console.log(form);
    axios.post('', form)  
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
    const { form } = this.state;
    return (
      <Row>
        <Col>
          <Table striped bordered hover variant="dark" className="dataTable">
            <thead>
              <tr>
                <th>MMSI</th>
                <th>IMO</th>
                <th>SHIP_ID</th>
                <th>LAT</th>
                <th>LON</th>
                <th>SPEED</th>
                <th>HEADING</th>
                <th>COURSE</th>
                <th>STATUS</th>
                <th>TIMESTAMP</th>
                <th>DSRC</th>
                <th>UTC_SECONDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              {Object.keys(form).map((key, index) => (
                <td key={index}>
                  <input
                    className="dataField"
                    type="text"
                    onChange={e => this.handleValueChanged(e, key)}
                    value={form[key]}
                  />
                </td>
              ))}
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={12} className="buttonRow">
          <Button onClick={this.handleSave} variant="outline-success">SAVE</Button>
        </Col>
      </Row>
    );
  }
};

export default AddData;