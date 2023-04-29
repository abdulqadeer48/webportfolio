import "./PricingCardStyle.css";

import React from "react";
import { Link } from "react-router-dom";
const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-cotnainer">
        <div className="cards">
          <h3>Basic</h3>
          <span className="bar"></span>
          <p className="btc">$ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="cards">
          <h3>Premium</h3>
          <span className="bar"></span>
          <p className="btc">$ 300</p>
          <p>- 2 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="cards">
          <h3>Business</h3>
          <span className="bar"></span>
          <p className="btc">$ 400</p>
          <p>- 5 Days -</p>
          <p>- 10 Pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;