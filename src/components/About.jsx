import React from 'react';
import '../styles/About.css';
import Portrait from '../images/ti.jpg';

const About = () => {
  return (
    <div className="About">
      <div className="About__imageContainer">
        <img
          src={Portrait}
          alt="portrait of developer"
          className="About__image"
        />
      </div>
      <div className="About__description">
        <p>Hi, my name is Tetiana Ivy.</p>
        <p>
          I’m a Front End Developer. I love working in CSS and absolutely am
          fascinated by React JS. I love learning new things and improve
          processes in work and life. I am inspired by travel, nature, books,
          architecture, photography and minimalist design.
        </p>
      </div>
      <div className="About__seeMore">
        <h3 className="About__subheader">See more of my work on:</h3>
        <ul className="About__linkList">
          <li className="About__linkItem">
            <a
              href="https://github.com/Knopkaivy"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="About__linkItem">
            <a
              href="https://codepen.io/knopkaivy"
              target="_blank"
              rel="noreferrer"
            >
              Codepen
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
