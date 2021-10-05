import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';    
import Main from './main';   
import SeeMore from './SeeMore/ViewStory';   
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
, document.getElementById('root'));