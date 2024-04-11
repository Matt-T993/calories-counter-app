import React from "react";

import { GiWheat } from "react-icons/gi";
import { CgDropOpacity } from "react-icons/cg";
import { FaFish } from "react-icons/fa";

import { FaBowlFood } from "react-icons/fa6";
import "./dashboard.css";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Datepicker from "../../components/datepicker/Datepicker";
import DashboardCard from "../../components/card/DashboardCard";
import MealCard from "../../components/card/MealCard";

const Dashboard = () => {
  const percentage: number = 66;
  return (
    <>
      <div className="header__container">
        <h1 className="title">My Food Tracker</h1>
        <div className="wrapper">
          <div className="stats__content">
            <div className="stats">
              <div className="stat">
                <FaBowlFood className="stat__icon" />
                <div className="stat__info">
                  <h3 className="stat__info--title">Total</h3>
                  <p className="stat__info-number">0 cals</p>
                </div>
              </div>
              <div className="stat">
                <GiWheat className="stat__icon" />
                <div className="stat__info">
                  <h3 className="stat__info--title">Carbs</h3>
                  <p className="stat__info-number">0 cals</p>
                </div>
              </div>
              <div className="stat">
                <FaFish className="stat__icon" />
                <div className="stat__info">
                  <h3 className="stat__info--title">Protein</h3>
                  <p className="stat__info-number">0g</p>
                </div>
              </div>
              <div className="stat">
                <CgDropOpacity className="stat__icon" />
                <div className="stat__info">
                  <h3 className="stat__info--title">Fat</h3>
                  <p className="stat__info-number">0g</p>
                </div>
              </div>
            </div>
            <p className="stats__text">
              Aim to stay within 1550 calorie sweet spot.
            </p>
          </div>
          <div className="stat">
            <ProgressBar percentage={percentage} />
          </div>
        </div>
      </div>
      <div className="datepicker">
        <Datepicker />
      </div>
      <div className="cards">
        <DashboardCard />
      </div>
      <div className="cards">
        <MealCard />
      </div>

      <div className="overlay"></div>
    </>
  );
};

export default Dashboard;
