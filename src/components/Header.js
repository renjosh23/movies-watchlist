import React from "react";
import { Link } from "react-router-dom";
import {css} from '@emotion/css'

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">RJ-MoviesDB</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watch List</Link>
            </li>

            <li>
              <Link to="/watched-movies-page">Watched</Link>
            </li>

            <li>
              <Link to="/add-movies-page" className={css`
                padding: 10px 15px;
                background-color: var(--secondary);
                color: var(--primary);
                border-radius: 5px;
                text-transform: uppercase;
                font-weight: 700;
                display: inline-block;
                border: none;
                font-size: 1rem;
                transition: all 0.3s ease;
                line-height: 1.1;
                &:hover {
                  background-color: white;
                  color: black
                  opacity: 1;
                  cursor: pointer;
                }
              `

              }>
                + Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
