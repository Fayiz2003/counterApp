import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name :"counterSlice",
    initialState : { count:0 },
    reducers :{
        //define action
        increment : (state)=>{
            state.count++
        },
        decrement : (state)=>{
            state.count--
        },
        reset : (state)=>{
            return {...state,count:0}
        },
        incrementByAmount : (state,valueFromComponent)=>{
            state.count += +valueFromComponent.payload
        }

    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer