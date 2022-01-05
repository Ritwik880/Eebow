import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Shop from './components/Shop'
import About from './components/About'
import Contact from './components/Contact'
import Signup from './components/signup.component'
import Login from './components/login.component'
import Footer from './components/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />

      <Routes>

        <Route exact path="/" element={<Home />}>

        </Route>
        <Route exact path="/shop" element={<Shop />}> 

        </Route>

        <Route exact path="/about" element={<About />}>

        </Route>

        <Route exact path="/contact" element={<Contact />}>

        </Route>
        <Route exact path="/signup" element={<Signup />}>

        </Route>
        <Route exact path="/login" element={<Login />}>

        </Route>



      </Routes>
      <Footer />

    </>
  )
}

export default App
