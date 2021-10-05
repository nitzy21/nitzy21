import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 1rem calc((100vw - 1300px) / 2);
  background: #ffffff;
  color: #000000;

`;
export const ProductsContainer1 = styled.div`
display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: left;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;

`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  
`;

export const ProductCard = styled.div`
  margin: 0 1rem;
  line-height: 1.5;
  width: 300px;
  margin: 0 3% 0% 3%;
  padding: 25px;
  @media screen and (max-width: 650px) {
    align-items: center;
  }
  
`;

export const ProductImg = styled.img`
  height: 170px;
  width: 350px;
  min-width: 300px;
  max-width: 100%;
  cursor: pointer;
  box-shadow: 6px 2px 7.3px 3px rgba(55,55,55,0.9);

  @media screen and (max-width: 650px) {
    align-items: center;
  }

`;

export const ProductsHeading = styled.h1`
font-size: clamp(2rem, 2vw, 2rem);
text-align: left;
margin-bottom: 1rem;
margin-right: 1rem;
margin-left: 3rem;
color: #30408D;

@media screen and (max-width: 650px) {
  align-items: center;
  justify-content: center;
  margin-top: 50%;
}
`;

export const ProductsHeading1 = styled.h1`
font-size: clamp(2rem, 2vw, 2rem);
text-align: left;
margin-bottom: 1rem;
margin-right: 1rem;

color: #F8D024;

@media screen and (max-width: 650px) {
  align-items: center;
  justify-content: center;
  margin-top: 50%;
}
`;

export const ProductTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  text-align : left;
  color: #30408D;

`;

export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
align-items: left;
width: 100%;
text-align: justify;
margin: 0 5% 0% 5%;
font-weight: bold;

`;

export const ProductInfo1 = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: left;
width: 100%;
text-align: justify;

font-weight: bold;

`;

export const ProductDesc = styled.p`
color: #808080;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: .7rem;
`;

export const ProductButton = styled.button`
font-size: .7rem;
font-weight: bold;
background-color: white;
border-color:  #30408D;
border-radius: 10px;
border-width: 3px;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;
color: #30408D;
cursor: pointer;
width: 80%;
margin-right: 120px;
  &:hover {
    background: #30408D;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #ffffff;
  }
`;

export const ProductButton1 = styled.button`

display: flex;
justify-content: center;
align-items: center;
width: 30px;
border: 2px solid transparent;
background-color: transparent;
cursor: pointer;
color: #30408D;
height: 2em;;



&:hover {
  
  transition: 0.2s ease-out;
  cursor: pointer;
  
  color: #FF4C4C;
}
`;
export const ProductButton2 = styled.div`

display: flex;
justify-content: center;
align-items: center;
width: 20px;
border: 2px solid transparent;
background-color: transparent;

color: #30408D;
height: 2em;



&:hover {
  
  transition: 0.2s ease-out;
 
  
  color: #FF4C4C;
}
`;

export const Viewmore = styled.div`

display: flex;
justify-content: right;
align-items: right;
width: 100%;
border: 2px solid transparent;
background-color: transparent;
color: #30408D;
height: 2em;;
margin-bottom: 10px;

`;
export const ViewmoreButton = styled.button`

font-size: .7rem;
font-weight: bold;
background-color: white;
border-color:  #30408D;
border-radius: 10px;
border-width: 3px;
padding-left: 20px;
padding-right: 20px;
padding-top: 10px;
padding-bottom: 10px;

color: #30408D;
cursor: pointer;
width: 60%;
margin-right: 120px;
  &:hover {
    background: #30408D;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #ffffff;
  }
`;

