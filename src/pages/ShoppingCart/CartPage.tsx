import './cartPage.css';
import chevron from '../Search/images/chevron-left.svg';
import trash from './images/trash-2.svg';
import minus from './images/minus.svg';
import plus from './images/plus.svg';
import headphone from '../ExploreProduct/images/headphone.svg';

import { Link } from 'react-router-dom';

export default function CartPage () {
  return (
    <div>
      <section className="menu">
        <Link to="/home">
          <img src={chevron} alt="Chevron Icon" />
        </Link>
        <p>Shopping Cart</p>
        <img src={trash} alt="Trash Icon" />
      </section>
      <section className="productsCart">
        <div className="productCart">
          <img id="productImg" src={headphone} alt="Product Image" />
        </div>
        <div>
          <p className="productNameCart">Product Name</p>
          <p className="productPriceCart">$ 130</p>
          <div className="blockCart">
            <div className="plusMinus">
              <img id="plusMinus" src={minus} alt="Minus Icon" />  
              <p>1</p>
              <img id="plusMinus" src={plus} alt="Plus Icon" />
            </div>
            <img id="trashIcon" src={trash} alt="Trash Icon" />
          </div>
        </div>      
      </section>
      <section>
        <div className="totalPrice">
          <p id="totalItems">Total Items</p>
          <p id="totalCost">$ 500</p>
        </div>
        <div className="btnSection">
          <button className="defaultBtn" id="btnDetails">Proceed to Checkout &gt;</button>
        </div>
      </section>
    </div>
  );
}
