import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementByAmount } from '../redux/counterSlice'


const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)  //useSelector is a HOOK
  console.log(count);
  const dispatch = useDispatch()  //useDispatch is a HOOK

  const handleIncrementByAmount = ()=>{
    if(amount){
      // dispatch action with input amount
      dispatch(incrementByAmount(amount))
    }else{
      alert("please fill the form!!!")
    }

  }

  return (
   <div className='border rounded p-5 text-center'>
    <h1 style={{fontSize:'100px'}}>{count}</h1>
    <div style={{width:'500px'}} className='d-flex justify-content-between mt-5'>
        <button onClick={()=>dispatch(decrement())}  className='btn btn-warning'>DECREMENT</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCREMENT</button>
    </div>
    <div className='d-flex justify-content-between align-items-center mt-5'>
        <input  onChange={e=>setAmount(e.target.value)} className='form-control' placeholder='Input Increment Amount' type="text" />
        <button onClick={handleIncrementByAmount} className='btn btn-primary ms-3'>Increment By Amount</button>
    </div>
   </div>
  )
}

export default Counter