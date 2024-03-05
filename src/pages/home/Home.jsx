import React from 'react'
import "./home.css";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Header/>
       <div className="homeContainer">
         <Featured/>
         
       </div>
    </div>
  )
}

export default Home
