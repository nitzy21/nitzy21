
import React from "react";
import ViewMore from "../../SeeMore/ViewStory";
import "./card.css";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
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
    Axios.put("http://localhost:3000/updateLike", { id: id }).then((response) => {
      // alert('update');
      window.location.reload(false);
    })
  }

  return (
    <div className="card">
      <div class="fill">
        <img className="fill-image" src={props.image} alt="Logo" />
      </div>
      <div className="card-title">{props.name}</div>
      <div className="card-date">{props.date}</div>
      <div className="card-text">{props.description}</div>
      <div className="bottomcontent">  
      <Link to={{ pathname: '/story', state: { title: props.title, name: props.name, description: props.description, date: props.date}}} >Read More</Link>
      <div className="card-like-bars" onClick={() => { updateInnovatorLike(props.id) }} ><FaHeart /></div>
        <div className="card-like-bar">
          <div className="like-text">
            <b>{props.likeCount}</b>
          </div>
        </div>
      </div>
    </div>
  );
}