import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import './searchPage.css';
import shoppingCart from './images/shopping-cart.svg';
import searchIcon from '../HomePage/images/search.svg'
import chevron from './images/chevron-left.svg';
import headphone from '../ExploreProduct/images/headphone.svg';
import star from '../ExploreProduct/images/star.svg';
import morevertical from '../ExploreProduct/images/more-vertical.svg';

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

export default function SearchPage () {
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
    <div>
        <section className="menu">
            <img src={chevron} alt="Chevron Icon" />
            <p>Search</p>
            <img src={shoppingCart} alt="Shopping Cart" />
        </section>
        <div className="searchBox">
            <img id="search" src={searchIcon} alt="Search Icon" />                
            <input id="imputSearch" type="text" placeholder='Search headphone' />                    
        </div>
        <section>
          <p>Popular product</p>
          <div className="popularProduct">
          <div className="designPage">
            {products.map((product) => (
                    <div className="allProducts" key={product.id}>
                        <img className="productImg-2" src={headphone} alt="Product Image" />
                        <div className="productFeatures">
                            <p className="productName-2">{product.name}</p>
                            <p className="productExtra">{product.price}</p>
                        </div>
                        <div className="reviews">
                          <div className="rating">
                            <img src={star} alt="Star" />
                            <p id="rating">{product.rating}</p>
                          </div>
                          <p id="reviwesLeng">{product.reviews.length} Reviews</p>
                          <img src={morevertical} alt=" " />
                        </div>
                    </div>                                                
                ))}
        </div>

          </div>
        </section>
    </div>
  );
}
