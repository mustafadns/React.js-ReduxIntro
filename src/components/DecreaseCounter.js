import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { decreaseCounter } from '../redux/actions/counterActions'
import {connect} from "react-redux"
import './Decrease.css';

class DecreaseCounter extends Component {
    render() {
        return (
            <div className='decrease_button'>
                <button className='decrease_button_main' onClick={e=>{
                    this.props.dispatch(decreaseCounter());
                }}>
                    1 azalt (-1) 
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(decreaseCounter , dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);