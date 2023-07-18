import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import './featuresProducts.css';
import headphone from './images/headphone.svg';
import arrow from './images/arrow-right.svg';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface Product {
  id: number;
  imageUrl: string;
  rating: number;
  price: string;
  name: string;
  description: string;
  category: string;
  created_at: string;
  reviews: Review[];
}

interface Review {
  user: string;
  description: string;
  rating: number;
  date: string;
}

export default function CardFeatureProducts () {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    void fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await api.get('/a93df7f1-711b-46ab-96dc-61f4865ddcc9');
      setProducts(response.data as Product[]);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className="featurePage">
      <section className="filterSection">
        <div className="navigatorBar">
          <button className="filterButton">Headphone</button>
          <button className="filterButton">Headband</button>
          <button className="filterButton">Earpads</button>
          <button className="filterButton">Cable</button>
        </div>
        <Splide
            options={{
              type: 'slide',
              perPage: 1,
              perMove: 1,
              autoplay: true,
              interval: 3000,
              pagination: false,
              arrows: false,              
            }}
            >
              {products.map((product) => (
                <SplideSlide key={product.id}>
                  <div className="containerBlock">
                    <div>
                      <p className="productName">{product.name}<br />{product.category}</p>
                      <div className="shopArrow">
                        <p className="shopNow">Shop now</p>
                        <img src={arrow} alt="Arrow" />
                      </div>
                    </div>
                    <img className="productImg" id="filterImage" src={headphone} alt="Product Image" />
                  </div>
                </SplideSlide>
              ))}           
            </Splide>
      </section>
      <section className="featureSection">
          <div className="containerFeatures">
              <p className="featureTitle">Featured Products</p>
              <p className="featureSubTitle">See All</p>
          </div>
          <Splide
            options={{
              type: 'slide',
              perPage: 2,
              perMove: 1,
              autoplay: true,
              interval: 3000,
              pagination: false,
              arrows: false,             
            }}
            >
              {products.map((product) => (
                <SplideSlide key={product.id}>
                  <div className="containerProducts">
                      <img className="productImg-2" src={headphone} alt="Product Image" />
                      <div className="productFeatures">
                          <p className="productName-2">{product.name}</p>
                          <p className="productExtra">{product.price}</p>
                      </div>
                  </div>                
                </SplideSlide>                 
              ))}                                                        
            </Splide>
      </section>
    </div>
  );
}
