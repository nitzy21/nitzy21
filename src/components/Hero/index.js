import React, { useState } from 'react';
import Navbar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroItems1,
  HeroH1,
  HeroP,
  HeroS,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>


      <HeroContent>

        <HeroItems>

          <HeroH1>INNOVATORS</HeroH1>
        </HeroItems>
        <HeroItems1>
          <div className="storyContainer1">
            <ul>
              <li className="linkpage1"><a href="/app"> <HeroP>  INNOVATORS</HeroP> </a> </li>
            </ul>
          </div>

          <div className="storyContainer1">
            <ul>
              <li className="linkpage1"><a href="/story">  <HeroS >ACHIEVEMENT & STORIES</HeroS> </a> </li>
            </ul>
          </div>
         

        </HeroItems1>




      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
