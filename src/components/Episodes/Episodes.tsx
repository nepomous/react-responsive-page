import React from "react";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Episodes.css";
import EpisodeCard from "./EpisodeCard";
import { episodeCardObjOne } from "./Data";

const Episodes = () => {
  return (
    <div>
      <div className="episodes__section">
        <div className="episodes__wrapper">
          <h1 className="episodes__heading">episodes</h1>
          <div className="episodes__container">
            <Link to="/sign-up" className="episodes__container-card">
              <div className="episodes__container-cardInfo">
                <div className="icon">
                  <FaFire />
                </div>
                <h3>Starter</h3>
                <h4>$8.99</h4>
                <p>per month</p>
                <ul className="episodes__container-features">
                  <li>100 Transactions</li>
                  <li>2% Cash Back</li>
                  <li>$10,000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="episodes__container-card">
              <div className="episodes__container-cardInfo">
                <div className="icon">
                  <BsXDiamondFill />
                </div>
                <h3>Gold</h3>
                <h4>$29.99</h4>
                <p>per month</p>
                <ul className="episodes__container-features">
                  <li>1000 Transactions</li>
                  <li>3.5% Cash Back</li>
                  <li>$100,000 Limit</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to="/sign-up" className="episodes__container-card">
              <div className="episodes__container-cardInfo">
                <div className="icon">
                  <GiCrystalize />
                </div>
                <h3>Diamond</h3>
                <h4>$99.99</h4>
                <p>per month</p>
                <ul className="episodes__container-features">
                  <li>Unlimited Transactions</li>
                  <li>5% Cash Back</li>
                  <li>Unlimited Spending</li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
