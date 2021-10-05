import styled from 'styled-components';
import ImgBg from '../../assets/Picture2.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to right,rgba(0, 0, 45, 0.6), rgba(0, 0, 45, 0.6)),
    url(${ImgBg});
  height: 50vh;
  background-position: center;
  background-size: cover;
  padding: 15vh;
  margin-top: 20px;

  @media screen and (max-width: 650px) {
    width: 100%;
    height: 60vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  
  @media screen and (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroItems = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  box-shadow: 0px 5px #ffffff;
  margin: 0 10% 0 10%;
width: 80%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroItems1 = styled.div`
display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3px 8% 3px 8%;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  line-height: 2;


  @media screen and (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;



export const HeroH1 = styled.h1`
display: flex;
  font-size: clamp(1.5rem, 5vw, 5rem);
  margin-bottom: 1rem;  
  align-items: center;
  letter-spacing: 7px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-out;
    cursor: pointer;

`;

export const HeroS = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-out;
    cursor: pointer;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
