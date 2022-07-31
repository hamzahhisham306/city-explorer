import Alert from 'react-bootstrap/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
class  LinksExample extends React.Component {
    render() {
  return (
    <>
        <Alert key={1} variant='danger'>
          <Alert.Link href="#"></Alert.Link>{this.props.error}
        </Alert>
    
    </>
  )}
}

export default LinksExample;