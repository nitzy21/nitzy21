import React from 'react';
import NavBar from "./components/NavBar/NavBar";
import './App.css';
import './innovators.css';
import cardContent from "./components/Card/cardContent";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";
import { useState , useEffect} from "react";
import Axios from 'axios';
import dateFormat from 'dateformat';

import pic1  from "./assets/icon.png";


function createCard(cardContent) {
  return (
    <Card
    title={cardContent.title}
    date={cardContent.date}
    image={cardContent.image}
    description={cardContent.description}
    liked={cardContent.isLiked}
    likeCount={cardContent.like}
    />
  );
}

function App() {

  const [innovatorList, setInnovatorList] = useState([]);

  const GetInnovators = () => {
    console.log('we here at get innovators');
    Axios.get("http://localhost:3000/innovdb").then((response) => {
      console.log(response);
      setInnovatorList(response.data);
    });
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore)  GetInnovators()
    return () => { ignore = true; }
    },[]);

  return (
    <div className="App">
        <NavBar />
          <div className = "MainContainer">
             <h1 className= "heading1">INNOVATORS & STORIES</h1>
             {/* <button onClick={GetInnovators}>Show btt </button> */}
             {innovatorList.map((val, key ) => {
              //  return <div> {val.innovator_fname} </div>
              return <Card
                id={val.innovator_id}
                title={val.innovator_fname + ' ' + val.innovator_lname}
                date={dateFormat(val.innovator_date, "mm/dd/yyyy")}
                // image={val.innovator_picture}
                image={pic1}
                description={val.innovator_story}
                liked={val.innovator_like}
                likeCount={val.innovator_like}
              />
             })}
             {/* <div className="mainContCard">{cardContent.map(createCard)}</div> */}
             <Footer/>
        </div>
    </div>
  );
}

export default App;
