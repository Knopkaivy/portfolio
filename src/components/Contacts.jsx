import React from 'react';
import '../styles/Contacts.css';

const Contacts = () => {
  return (
    <div className="Contacts">
      <h3 className="Contacts__subheader">Reach out at:</h3>
      <ul className="Contacts__list">
        <li className="Contacts__listItem">knokaivy@gmail.com</li>
        <li className="Contacts__listItem">
          linkedin.com/in/tetiana-ivy-213801134/
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
