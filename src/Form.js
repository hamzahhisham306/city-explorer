import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from './Table';
import Card from './Card'
import Error from './Error';

class  BasicExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:"",
            lat:"",
            long:"",
            Name:"",
            error:"",
            urlImage:"",
            errorImage:"",
            show:false,
        }
        

    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    handeSubmit=(event)=>{
        event.preventDefault();
        const city = this.state.city;
        const url = `https://us1.locationiq.com/v1/search.php?key=pk.b4a103b455cdd4e565619a9d076612ae&q=${city}&format=json`;
        const urlMap=`https://maps.locationiq.com/v3/staticmap?key=pk.b4a103b455cdd4e565619a9d076612ae&center=${this.state.lat},${this.state.long}&zoom=10`;
        axios.get(urlMap).then((res)=>{
            console.log(res.config.url)
            const urlImage=res.config.url;
            this.setState({
                urlImage:urlImage,
            })
        }).catch((error)=>{
            this.setState({
                errorImage:error.message
            });
        });
        
        axios.get(url).then((res)=>{
            const lat=res.data[0].lat;
            const long=res.data[0].lon;
            const Name=res.data[0].display_name;
            this.setState({
                lat:lat,
                long:long,
                Name:Name,
                show:true
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                error:error.message,
                
            });
        });
    }
  render(){
  return (
    <>
       <>
        <Form>
          <Form.Group>
            <Form.Label>Enter a Name </Form.Label>
            <Form.Control type="text" name="city" placeholder='Enter city Name' onChange={this.handleChange}/>
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit" onClick={this.handeSubmit} >
            Explore!
          </Button> <br/><br/>
          <Form.Label>Please Double Click on button Explor! to show Image </Form.Label>

        </Form>
        {this.state.error&& 
     <Error error={this.state.error}
     />
    }
     <div className='content-table1'>
      <Table name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage}/>
     {this.state.show
      && <Card  name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage}/>
     }
     </div>
   
      </>
      </>
  );


}
}
export default BasicExample;

