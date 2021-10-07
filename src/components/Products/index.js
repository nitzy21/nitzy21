import React from 'react';
import cart from '../../assets/cart.png'
import logo from '../../assets/free-heart-icon-492-thumb.png';
import sweet2 from '../../assets/Article4.png';
import sweet3 from '../../assets/Article3.png';
import dateFormat from 'dateformat';
import product3 from '../../assets/Image 1.png';
import sweet1 from '../../assets/Article2.png';

import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaHeart,
} from 'react-icons/fa';
import {
  ProductsContainer,
  ProductsContainer1,
  ProductWrapper,
  ProductsHeading,
  ProductsHeading1,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductInfo1,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductButton1,
  Viewmore,
  ViewmoreButton
} from './ProductsElements';

const Products = ({ heading, heading1, data }) => {
  return (

    <ProductsContainer>
      <ProductsContainer1>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsHeading1>{heading1}</ProductsHeading1>
      </ProductsContainer1>
      <ProductWrapper>
        {data.map((product, index) => {
          return (

            <ProductCard key={index}>
              <ProductImg src={sweet2} alt={'Image'} />
              <ProductInfo>
                <ProductTitle>{product.innovator_title}</ProductTitle>
                <ProductDesc>{dateFormat(product.innovator_date, "mm/dd/yyyy")}</ProductDesc>
                <ProductPrice>{product.innovator_story}</ProductPrice>
                <ProductInfo1>

                  <Link to={{ pathname: '/story', state: { title: product.innovator_title, name: product.innovator_fname + ' ' +product.innovator_lname, description: product.innovator_story, date: dateFormat(product.innovator_date, "mm/dd/yyyy")}}} >Read More</Link>

                  <Link to='/app' >
                    <ProductButton1 >
                      <FaHeart />
                    </ProductButton1>
                  </Link>


                </ProductInfo1>
              </ProductInfo>

            </ProductCard>






          );

        })}
      </ProductWrapper>

      < Viewmore>
        <Link to='/app' >
          <ViewmoreButton to ='/app' >View More Stories <FaArrowRight /></ViewmoreButton>
        </Link>
      </Viewmore>

    </ProductsContainer>

  );

};

export default Products;
