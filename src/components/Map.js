import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <>                                    
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&center=${this.props.loti},${this.props.long}&zoom=10`} alt="" width="300px"/>            
            </>
        )
    }
}

export default Map;
