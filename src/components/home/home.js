import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from "../header/Header";
import "./home.css"

const Home = () => {
  return (
    <>
      <div className="containerHome">
        <div className="outer">
            <Header/>
          <div className="details">
            <h3>Still using excel or pen-paper to track spendings, use</h3>
            <h1>Personal Expense Tracker</h1>
            <button>
              <NavLink to="/login" className="btn btn-primary" style={{ fontSize: 18 }}>
                Get started
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
