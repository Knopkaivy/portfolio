import Portrait from '../images/ti.webp';
import '../styles/About.css';

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
        <p>
          I build with intention.
        </p>
        <br/>
        <p>
          Guided by minimalism and global perspective, I believe, the best design speaks quietly. Beyond the code, I bring clarity, empathy, and a sharp eye for what <span className='About__description--is-italic' >feels right</span>. I navigate complexity with calm, collaborate with care, and never lose sight of the human on the other side of the screen.
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
