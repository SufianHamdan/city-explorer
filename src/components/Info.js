import React, { Component } from 'react'

class Info extends Component {
    render() {
        return (
            <>
            <div className="text-center"><p>{this.props.name}</p></div>                
            </>
        )
    }
}

export default Info
