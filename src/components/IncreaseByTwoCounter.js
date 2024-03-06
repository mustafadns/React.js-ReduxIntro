import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { increaseByTwoCounter } from '../redux/actions/counterActions'
import {connect} from "react-redux"
import './IncreaseByTwo.css';

class IncreaseByTwoCounter extends Component {
    render() {
        return (
            <div className='ıncreaseByTwo_button'>
                <button className='ıncreaseByTwo_button_main' onClick={e=>{
                    this.props.dispatch(increaseByTwoCounter());
                }}>
                    2 arttır (+2)
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {actions:bindActionCreators(increaseByTwoCounter , dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);