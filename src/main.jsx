import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Wave from './Wave.jsx'
import Login from './login.jsx'

import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wave/>,
  },
  {
    path:"profile/:id",
    element:<App />

  }
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
