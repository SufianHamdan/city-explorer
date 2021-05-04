import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            searchQuery:'',
            show: false
        };
    }

    getCityName = (event) => {
        this.setState ({ searchQuery: event.target.value });
        console.log(this.state.searchQuery);
    };

    getLocationInfo = async (event) => {
    
      try {
          
        event.preventDefault();
        const url = `https://us1.locationiq.com/v1/search.php?key=pk.7bffc813ae6ef3ffe121f57e08e173dd&q=${this.state.searchQuery}&format=json`;

        const weatherApi = await axios.get('http://localhost:3001');
        console.log(weatherApi.data);

        const req = await axios.get(url);
        this.setState ({
            data: req.data[0]           
        }); 
        console.log(req.data);
        console.log(this.state.data);
        
        this.setState({
            show: true
        });
      } catch (error) {
        this.setState({
            show: false
            });
      }

    };

    render() { 
        return ( 
            <>
            <h1>City Explorer</h1>
            <form>
            <label >Location:</label>
            <input type="text" onChange={this.getCityName}/>
            <button onClick={this.getLocationInfo}>Explore</button>
            <p>{this.state.data.display_name}</p>
            <p>{this.state.data.lat}</p>
            <p>{this.state.data.lon}</p>
            { this.state.show && 
                <>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.7bffc813ae6ef3ffe121f57e08e173dd&center=${this.state.data.lat},${this.state.data.lon}&zoom=10`} alt="" width="300px"/>
                </> }
            
            </form>


             {/* <Form onSubmit={this.getLocationInfo}>
                <Form.Label>Location</Form.Label>
                <br />
                <Form.Control type="text" placeholder="Enter location" onChange={this.getCityName} />
                <Button variant="primary" type="submit" onClick={this.getData}>Explore</Button>
            </Form> */}

            </>
         ); 
    }
}
 

export default App;