import React, { Component } from 'react'

export default class OurBox extends Component {
    render() {
        return (
            <div style={(this.props.highlight) ? { backgroundColor: 'black' } : {}} className="box">
            </div>
        )
    }
}
