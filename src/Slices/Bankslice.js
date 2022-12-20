import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  accountDetail: [
    {name:'Abhishek', password:'123', balance:'100000', isTrue:false},
  {name:'Tushar', password:'1234', balance:'110000', isTrue:false},
  {name:'Samarpratap', password:'1235', balance:'111000', isTrue:false}
],

getAccount:{

  name:'',
  balance:'',
  password:''
}
}

export const accoutSlice = createSlice({
  name: 'accSlice',
  initialState,
  reducers: {
    decrementByAmtFive: (state, action) => {

      let preBal = state.getAccount.balance
      state.getAccount.balance = Number(preBal) -5000
        console.log(state.getAccount.balance);

    },

    decrementByAmtTen: (state, action) => {
      let preBal = state.getAccount.balance
      state.getAccount.balance = Number(preBal) -10000
        console.log(state.getAccount.balance);

    },

    changeFields: (state, action) => {
        
      // console.log('inside changeFields',action.payload);
      
state.getAccount = {
  name:action.payload.name,
  balance:action.payload.balance,
  password:action.payload.password
}

console.log('acc is : ',state.getAccount);
    },
  },
})

// Action creators are generated for each case reducer function
export const {decrementByAmtFive,decrementByAmtTen , changeFields} = accoutSlice.actions

export default accoutSlice.reducer