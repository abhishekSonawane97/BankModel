import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrementByAmtFive, decrementByAmtTen } from '../Slices/Bankslice'



const Account = (props) => {

  const data = useSelector((state) => state.accSlice)
  const dispatch = useDispatch()

  const handleClickFive = (value)=>{

    dispatch(decrementByAmtFive())
  };

  const handleClickTen = (value)=>{

    dispatch(decrementByAmtTen())
  };

  
   

    
  


  return (
    <div>
      {/* {
        data.accountDetail.map((ele, i)=>(
          <li key={i}>{ele.name}</li>
         
        ))

      } */}
      

      <div className="card text-bg-dark  text-center" style={{height:'100vh'}}>
  <img src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFua3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h4 className="card-title m-1" style={{color:'black'}}>Hello, {data.getAccount.name}</h4>
    <div className="card-text text-center" style={{border:'2px solid white', width:'50vw', height:'40vh', margin:"10vh auto"}}>
      <h2 className='m-4'>Total Balance</h2>

      <h1 >Rs. {data.getAccount.balance} /-</h1>


      <button type="button" class="btn btn-secondary m-2" onClick={handleClickFive}>Withdraw 5000 /-</button>
      <button type="button" class="btn btn-secondary" onClick={handleClickTen}>Withdraw 10000 /-</button>


    </div>
    <p className="card-text"><small>Last updated 10 sec ago</small></p>
  </div>
</div>

    {/* {
      data.accountDetail.map(ele=>(
        // console.log(ele)
        ))
    } */}


    </div>
  )
}

export default Account
