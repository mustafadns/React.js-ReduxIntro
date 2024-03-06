import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Counter.css';

class Counter extends Component {
    render() {
        return (
            <div className='number'>
                <h1>{this.props.counter}</h1>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {counter:state.counterReducer}
}

export default connect(mapStateToProps)(Counter);
