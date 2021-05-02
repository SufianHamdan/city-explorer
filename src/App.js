import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            searchQuery:''
        }
    }

    getLocationInfo = async (event) => {

        event.preventDefault();
        const url = `https://us1.locationiq.com/v1/search.php?key=pk.7bffc813ae6ef3ffe121f57e08e173dd&q=${this.props.getCityName}&format=json`;

        const req = await axios.get(url);
        this.setState ({
            data: req.data[0]            
        });
        console.log(this.state.data);
    };

    getCityName = (event) => {
        this.setState ({ searchQuery: event.target.value
        });
        console.log(this.state.searchQuery);
    }



    render() { 
        return ( 
            <>
                <Form onSubmit={this.getLocationInfo}>
                    <Form.Group controlId="filterHorns">
                    <Form.Label> <h1>Type a City Name</h1> </Form.Label>
                    <br />
                    <br />
                    <Form.Control
                        required
                        type="text"
                        placeholder="City Name"
                        onChange={this.getCityName}
                    />
                    <br />
                    <br />
                    <Button variant="primary" type="submit">
                        Get City Information
                    </Button>
                    </Form.Group>
                    <br />
                    <br />
                    <p>Location Latitude: {this.state.data.lat}</p>
                    <p>Location longitude : {this.state.data.lon}</p>
                </Form>     
            </>
         );
    }
}
 

export default App;