import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseCounter } from '../redux/actions/counterActions'
import {connect} from "react-redux"
import './Increase.css';

class IncreaseCounter extends Component {
    render() {
        return (
            <div className='ıncrease_button'>
                <button className='ıncrease_button_main' onClick={e=>{
                    this.props.dispatch(increaseCounter());
                }}>
                    1 arttır (+1)
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(increaseCounter , dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);