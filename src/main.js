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
import Home from './Home';
import ViewStory from './SeeMore/ViewStory';

function Main() {

    return (

      <div className ="Main">
           
                 <Route exact path='/' component={Home} />
                 <Route exact path='/app' component={App} />
                 <Route exact path='/story' component={ViewStory} />
            </div>



      

    );
}


export default Main;
