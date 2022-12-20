import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import {changeFields } from '../Slices/Bankslice'




const Login = () => {

    const data = useSelector((state) => state.accSlice)
    const dispatch = useDispatch()

    const [user, setUser] = useState(
        {
        name:'',
        password:'',
        balance:'220000'
    },
)

const navigate = useNavigate();

const handleChange = (e)=>{

    setUser({...user, [e.target.name]:e.target.value});
}

const handleClick = (e)=>{

    e.preventDefault()

    for(let i=0;i<data.accountDetail.length;i++){

      if(user.password=== data.accountDetail[i].password){


        navigate("/account")

        break;
      }
      
    }
    dispatch(changeFields(user))
}



  return (
    <div style={{width:'35vw', paddingTop:' 25vh', margin:'0 0 0 64vw', textAlign:'center', fontWeight:'bold', fontSize:'20px'}}>



      
<h2 className='m-2 text-success'>$ The Trial Bank $</h2>
<h4 className='m-2 text-light'>Please login to access your account.</h4>
      <form style={{border:'3px solid black', padding:'20px', borderRadius:'15px'}}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label" value={user.name}>Account Holder Name</label>
    <input type="text" className="form-control" name='name' placeholder='Enter Name' onChange={handleChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" value={user.password}>Password</label>
    <input type="password" placeholder='Enter password' className="form-control" name='password' onChange={handleChange}/>
  </div>
  <button  className="btn btn-success" onClick={handleClick}>
  Submit</button>
</form>
{/* {user.isTrue && navigate("/account")} */}
    </div>
  )
}

export default Login
