import React, { Component } from 'react';

class WeatherData extends Component {
    render() {
        return (            
            this.props.weatherInfo.map(value =>{
                return(
                    <div>                
                        <p>{value.date}</p>
                        <p>{value.description}</p>
                    </div> 
                )                 
            })
                      
        )
    }
}

export default WeatherData;
