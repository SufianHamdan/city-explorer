import React from 'react';
import axios from 'axios';
import Map from './components/Map';
import Info from './components/Info';
import Form from './components/Form';
import WeatherData from './components/WeatherData';


class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            searchQuery:'',
            show: false,
            weatherData: ''
        };
    }

    getCityName = (event) => {
        this.setState ({ searchQuery: event.target.value });
        console.log(this.state.searchQuery);
    };

    getLocationInfo = async (event) => {
    
      try {
          
        event.preventDefault();
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;

        const weatherApi = await axios.get(`${process.env.REACT_APP_SERVER}/weather`);
        console.log(weatherApi.data);

        const req = await axios.get(url);
        this.setState ({
            data: req.data[0],
            weatherData: weatherApi.data,         
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
            <Form            
                getLocationInfo = {this.getLocationInfo}
                getCityName = {this.getCityName}
            />
            { this.state.show && 
            <>
            <Info
                name = {this.state.data.display_name}
            />            
            <Map
                loti = {this.state.data.lat}
                long = {this.state.data.lon}
            />
            <WeatherData 
                weatherInfo = {this.state.weatherData}
            />
            </>
            } 
            </>
         ); 
    }
}
 

export default App;