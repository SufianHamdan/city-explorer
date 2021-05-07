import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <>
               <form onSubmit = {this.props.getLocationInfo}>
                <label >Location:</label>
                <input type="text" onChange={this.props.getCityName} required/>
                <input type = "submit" value = 'Explore'/>
                {/* <button onClick={this.props.getLocationInfo}>Explore</button>                 */}
                </form> 
            </>
        )
    }
}

export default Form
