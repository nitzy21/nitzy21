import React, { Component, UseState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products/';
import { productData, yearDataTwo } from './components/Products/data';
import ListPage from './components/containers/ListPage';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/footer';

import InnovYear from './components/InnovYear';
import { yearData } from './components/InnovYear/data';
import App from './App';
import { useState , useEffect} from "react";
import Axios from 'axios';


function Home() {


    const [innovBest, setInnovatorBest] = useState([]);
    const [featured, setFeaturedInnovs] = useState([]);

    const GetBestInnovator = () => {
      console.log('we here at get best innovators');
      Axios.get("http://localhost:3000/grrrr").then((response) => {
        console.log(response);
        setInnovatorBest(response.data);
        
      });
    }


    const GetFeaturedInnovs = () => {
      console.log('we here at get featured innovators');
      Axios.get("http://localhost:3000/featuredinnov").then((response) => {
        console.log(response);
        setFeaturedInnovs(response.data);      
      });
    }

    // console.log(innovBest[0].innovator_picture);


// var blob = innovBest[0].innovator_picture;

//       var reader = new FileReader();
//   reader.readAsDataURL(blob); 
//   reader.onloadend = () => {
//   var base64data = reader.result;                
//   console.log(base64data);
// }

//   function blobToBase64(blob) {
//     return new Promise((resolve, _) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result);
//       reader.readAsDataURL(blob);
//     });
//   }

  
    useEffect(() => {
      let ignore = false;
      if (!ignore)  
      GetBestInnovator();
      GetFeaturedInnovs();
      return () => { ignore = true; }
      },[]);


    return (

        <Route>
            <Navbar />
            <Hero />
            <GlobalStyle />


            {/* {innovBest.map((val, key ) => {
               return <div> {val.innovator_fname} </div>
              // return <Card
              //   title={val.innovator_fname + ' ' + val.innovator_lname}
              //   date={dateFormat(val.innovator_date, "mm/dd/yyyy")}
              //   image={val.innovator_picture}
              //   description={val.innovator_story}
              //   liked={val.innovator_like}
              //   likeCount={val.innovator_like}
              // />
             })} */}

        

{/* <div> {innovBest[0].innovator_fname} </div> */}

            <InnovYear heading='THE INNOVATOR OF THE YEAR' data={innovBest} />
            {/* <InnovYear heading='THE INNOVATOR OF THE YEAR' data={yearData} /> */}
            <Products heading='FEATURED' heading1='INNOVATORS' data={featured} />
            {/* <Products heading='FEATURED' heading1='INNOVATORS' data={yearDataTwo} /> */}
            {/* <Feature /> */}
            {/* <Route path='/' exact component={Innov} /> */}
            <Footer />
        </Route>


    );
}


export default Home;
