import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,BrowserRouter, RouterProvider } from 'react-router-dom'
import route from './routes/route'


const router = createBrowserRouter(route)


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

      <RouterProvider router={router}/>,

  {/* </React.StrictMode>, */}
)
