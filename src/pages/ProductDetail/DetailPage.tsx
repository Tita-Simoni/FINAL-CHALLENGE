
import CardProducts from '../HomePage/CardProducts';
import DetailFeatures from './DetailsFeatures';
import DetailsOverview from './DetailOverview';

import './detailsPage.css';
import shoppingCart from '../Search/images/shopping-cart.svg';
import chevron from '../Search/images/chevron-left.svg';

export default function DetailPage () {
  return (
    <div>
        <section className="menu">
            <img src={chevron} alt="Chevron Icon" />
            <img src={shoppingCart} alt="Shopping Cart" />
        </section>
        <section className="productDetail">
            <p className="detailPrice">$ 350</p>
            <p className="detailProductName">Product Name</p>
            <div className="detailNavegator">
                <button className="btnDetailPage">Overview</button>
                <button className="btnDetailPage">Features</button>
            </div>
            <DetailsOverview />
            <DetailFeatures />       
            <CardProducts />
            <div className="btnSection">
                <button className="defaultBtn" id="btnDetails">Add To Cart</button>
            </div>
        </section>
    </div>
  );
}
