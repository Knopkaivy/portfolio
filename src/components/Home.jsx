import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <p className="Home__greeting">Hi, I am</p>
      <h1 className="Home__header">Tetiana Ivy.</h1>
      <h2 className="Home__subheader">Front-End Developer.</h2>
      <p className="Home__description">
        I speak <span className="Home__description--is-bold">CSS</span>, dream in <span className="Home__description--is-bold">JavaScript</span>, and build magic with <span className="Home__description--is-bold">ReactJS</span>. 
      </p>
      <p className="Home__description">
        Clean code. Sharp edges. Effortless vibes.
      </p>
    </div>
  );
};

export default Home;
