import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <p className="Home__greeting">Hi, my name is</p>
      <h1 className="Home__header">Tetiana Ivy.</h1>
      <h2 className="Home__subheader">I build things for the web.</h2>
      <p className="Home__description">
        I am a Front End Developer. I love woriking with CSS and am fasinated
        with React JS. Currently I’m learning and discovering all things
        development, and working on personal projects to apply these new skills.
      </p>
    </div>
  );
};

export default Home;
