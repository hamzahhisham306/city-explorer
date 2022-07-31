import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";

class BasicExample extends React.Component {
    render(){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.urlImage} alt="City Image" />
      <Card.Body>
        <Card.Title>{this.props.name}</Card.Title>
        <Card.Text>
        latitude={this.props.lat} <br/>
        longitude={this.props.long}

        </Card.Text>
      </Card.Body>
    </Card>
  );
}
}

export default BasicExample;