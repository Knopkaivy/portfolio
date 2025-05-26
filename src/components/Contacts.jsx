import React from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <div className="Contacts">
      <h3 className="Contacts__subheader">Reach out at:</h3>
      <ul className="Contacts__list">
        <li className="Contacts__listItem">
          <a href="mailto:knokaivy@gmail.com">knokaivy@gmail.com</a>
        </li>
        <li className="Contacts__listItem">
          <a href="https://www.linkedin.com/in/tetiana-ivy-213801134/" target='_blank' rel='noopener noreferrer' >linkedin.com/in/tetiana-ivy-213801134/</a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
