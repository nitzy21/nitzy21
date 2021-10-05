
import React from "react";
import "./card.css";
import { Link } from 'react-router-dom';
import { useState , useEffect} from "react";
import Axios from 'axios';
import {
  
  FaHeart,
} from 'react-icons/fa';
import heartOutline from "../../assets/free-heart-icon-492-thumb.png"; // Tell webpack this JS file uses this image
import heartFill from "../../assets/free-heart-icon-492-thumb.png"; 

export default function Card(props) {


  const updateInnovatorLike = (id) => {
    console.log('here at update like');
    console.log(id);
    Axios.put("http://localhost:3000/updateLike", {id: id}).then((response) => {
      // alert('update');
      window.location.reload(false);
    })
  }

  return (
    <div className="card">
        <div class="fill">
             <img className="fill-image" src={props.image} alt="Logo" />
        </div>
      <div className="card-title">{props.title}</div>
      <div className="card-date">{props.date}</div>
      <div className="card-text">{props.description}</div>
      <div className="bottomcontent">
      <Link to='/story'><button className="readMoreBtn">Read More</button></Link>
      
      
      <button className="card-like-bar" onClick={()=>{updateInnovatorLike(props.id)}} >Heart</button>
      
        <div className="card-like-bar">
            {props.liked ? (
             <Link to='/story' >    
             
           <FaHeart />
          
           </Link>
            ) : (
              // <Link to='/story' >
             
            <FaHeart />
        
            // </Link>
            )}
            <div className="like-text">
            <b>{props.likeCount}</b>
            </div>
        </div>
      </div>
    </div>
  );
}