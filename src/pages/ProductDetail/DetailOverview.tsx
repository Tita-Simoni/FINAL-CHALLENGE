import './detailOverview.css';
import Headphone from '../HomePage/images/headphone.svg';
import avatar from '../HomePage/images/Avatar.svg';
import star from '../ExploreProduct/images/star.svg';

export default function DetailsOverview () {
  return (
    <div>
      <div className="detailProductOverview">
        <img id="productOverview" src={Headphone} alt="Product Image" />
      </div>
      <section className="reviews">
        <h2 id="reviews">Reviews 3</h2>
        <div className="review">
          <img id="avatarIcon" src={avatar} alt="Avatar" />
          <div className="reviewDescription">
            <p id="reviewName">Nome</p>
            <img id="starIcon" src={star} alt="Star review" />
            <p id="description">Review</p>  
          </div>
        </div>
      </section>      
    </div>
  );
}
