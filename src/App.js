import React from 'react';
import axios from 'axios';
import Map from './components/Map';
import Info from './components/Info';
import Form from './components/cityForm';
import WeatherData from './components/WeatherData';
import Movies from './components/movies';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: '',
            searchQuery:'',
            show: false,
            weatherData: [],
            moviesData: [],
        };
    }

    getCityName = (event) => {
        this.setState ({ searchQuery: event.target.value });
        console.log(this.state.searchQuery);
    };

    getLocationInfo = async (event) => {

        event.preventDefault();
        const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_MAP_KEY}&q=${this.state.searchQuery}&format=json`;

        const req = await axios.get(url);
        this.setState ({
            data: req.data[0]                               
        }); 
        console.log(req.data);
        console.log(this.state.data);
     
        this.getWeatherData();
        this.getMoviesData();
    };

    getWeatherData = async () => {
        const weatherApi = await axios.get(`${process.env.REACT_APP_SERVER}/weather?lat=${this.state.data.lat}&lon=${this.state.data.lon}`);
        console.log(weatherApi.data);

        this.setState({
            weatherData: weatherApi.data,
            show: true  
        });
    }

    getMoviesData = async () => {
        const moviesApi = await axios.get(`${process.env.REACT_APP_SERVER}/movies?searchQuery=${this.state.searchQuery}`);
        console.log(moviesApi);

        this.setState ({
            moviesData: moviesApi.data,
            show: true
        });
    }

    render() { 
        return ( 
            <>                        
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
            <Movies 
                moviesInfo = {this.state.moviesData}
            />
            </>
            } 
            </>
         ); 
    }
}
 

export default App;