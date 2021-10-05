import React from 'react';
import dateFormat from 'dateformat';
import product3 from '../../assets/Image 1.png';

import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './InnovElements';

const InnovYear = ({ heading, data }) => {

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
           return ( 
            <ProductCard key={index}>
              
              <ProductInfo>
             
                {/* <ProductTitle>{product.quote}</ProductTitle>
                <ProductDesc>{product.name}</ProductDesc>
                <ProductPrice>{product.award}</ProductPrice>
                <ProductPrice>{product.year}</ProductPrice> */}

                <ProductTitle>{'"'+product.innovator_story+'"'}</ProductTitle>
                <ProductDesc>{product.innovator_fname + ' ' + product.innovator_lname}</ProductDesc>
                <ProductPrice>{'Innovator of the year'}</ProductPrice>
                <ProductPrice>{dateFormat(product.innovator_date, "mm/dd/yyyy")}</ProductPrice> 

                {/* <ProductTitle>{'"'+this.data[0].innovator_story+'"'}</ProductTitle>
                <ProductDesc>{this.data[0].innovator_fname + ' ' + this.data[0].innovator_lname}</ProductDesc>
                <ProductPrice>{'Innovator of the fucking year'}</ProductPrice>
                <ProductPrice>{dateFormat(this.data[0].innovator_date, "mm/dd/yyyy")}</ProductPrice>  */}
                
              </ProductInfo>
              <ProductInfo>
              {/* <ProductImg src={product.innovator_picture} alt={'Image'} /> */}
              <ProductImg src={product3} alt={'Image'} />
              
               
              </ProductInfo>
             
            </ProductCard>
          ); 
        })} 
      </ProductWrapper>
    </ProductsContainer>
  );

};

export default InnovYear;
