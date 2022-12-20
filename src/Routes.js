import React from 'react'
import App from './App'
import Account from './Pages/Account'


const Routes = [
    {
      path: "/",
      element: <App />,
      
    },
    {
      path: "/account",
      element: <Account />,
  },
  ];


  export default Routes