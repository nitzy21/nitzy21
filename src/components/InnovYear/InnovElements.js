import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
height: 80vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #ffffff;
  color: #000000;

`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
   @media screen and (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductCard = styled.div`
  
  line-height: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  
  @media screen and (max-width: 650px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

`;

export const ProductImg = styled.img`
  height: 400px;
  min-width: 400px;
  max-width: 100%;
  cursor: pointer;

  @media screen and (max-width: 650px) {
    width: 80%;
    margin-left:10%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
  }
  
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2vw, 2rem);
  text-align: left;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 3rem;
  color: #F8D024;
  @media screen and (max-width: 650px) {
    align-items: center;
    justify-content: center;
    margin-top: 5%;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.3rem;
  width: 600px;

  @media screen and (max-width: 650px) {
    align-items: left;
    justify-content: center;
    font- size: .6rem;
   
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  width: 100%;
  font-size:.5rem;
  text-align: justify;
  margin: 0 5% 0% 5%;
 
  @media screen and (max-width: 650px) {
    align-items: center;
    justify-content: center;
    font- size: .5rem;
   
  }
`;

export const ProductDesc = styled.p`
  
  color: #30408D;
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 650px) {
    align-items: left;
    justify-content: center;
    font- size: 1rem;
   
  }
`;

export const ProductPrice = styled.p`
color:#30408D;
font-weight: bold;
  font-size: 1rem;

  @media screen and (max-width: 650px) {
    align-items: left;
    justify-content: center;
    font- size: 1rem;
   
  }
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
