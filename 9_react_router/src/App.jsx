import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Param from './pages/Param';
import Course from './pages/Course';
import Test from './pages/Test';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/", element:
      <div>
        <Navbar />
        <Home />
      </div>
  },

  {
    path: "/about", element:
      <div>
        <Navbar />
        <About />
      </div>,
    children: [
      { path: "course", element: <Course /> },
      { path: "test", element: <Test /> },
    ]
  },
  {
    path: "/contact", element:
      <div>
        <Navbar />
        <Contact />
      </div>
  },
  {
    path: "/student/:id",
    element:
      <div>
        <Navbar />
        <Param />
      </div>
  },
  {
    path:"*",element:
    <div>
      <NotFound />
      <Navbar />
    </div>
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
