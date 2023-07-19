import './explorePage.css';
import chevron from '../Search/images/chevron-left.svg';
import shoppingCart from '../Search/images/shopping-cart.svg';
import slider from './images/sliders.svg';

import CardExploreProducts from './CardExploreProducts';

export default function ExplorePage () {
  return (
    <div className="explore">
        <section className="menu">
            <img src={chevron} alt="Chevron Icon" />
            <img id="avatar" src={shoppingCart} alt="Avatar" />
        </section>
        <section className="upper">
            <p>Headphone</p>
            <h2>TMA Wireless</h2>
        </section>
        <div className="filterBtn">
          <img src={slider} alt=" "/>
          <button id="btnFilter">Filter</button>
        </div>
        <CardExploreProducts />
    </div>
  );
}
