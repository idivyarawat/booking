import React from 'react'
import "./featured.css"
import abcImage from "../../images/abc.jpg"
import abhImage from "../../images/abh.jpg"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src= {abcImage}  alt="" />
            <div className="featuredTitles">
                <h1>Finland</h1>
                <h2>57 mall road</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src= {abhImage}  alt="" />
            <div className="featuredTitles">
                <h1></h1>Grassland
                <h2>123 bk road</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src= {abcImage}  alt="" />
            <div className="featuredTitles">
                <h1>Finland</h1>
                <h2>57 mall road</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src= {abhImage}  alt="" />
            <div className="featuredTitles">
                <h1></h1>Grassland
                <h2>123 bk road</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
