import Table from 'react-bootstrap/Table';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';

class DarkExample extends React.Component {
    render(){
  return (
    <>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Display_Name</th>
          <th>latitude</th>
          <th>longitude</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{1}</td>
          <td>{this.props.name}</td>
          <td>{this.props.lat}</td>
          <td>{this.props.long}</td>
        </tr>
      </tbody>
    </Table>
    <img src={this.props.urlImage} alt="CityImage" />
    </>
  );
    }
}

export default DarkExample;