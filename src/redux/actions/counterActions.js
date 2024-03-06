import * as actionType from "./actionTypes"

export const increaseCounter=() => ({
    type:actionType.INCREASE_COUNTER,
    payload:1
})

export const decreaseCounter=() => ({
    type:actionType.DECREASE_COUNTER,
    payload:-1
})

export const increaseByTwoCounter=() => ({
    type:actionType.INCREASE_BY_TWO_COUNTER,
    payload:2
})