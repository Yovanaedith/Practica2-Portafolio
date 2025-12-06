import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="main-footer">
      <p>
        &copy; {currentYear} Yovana Edith Ramos Orcko.
      </p>
      <p>
        Desarrollado con React y pasión por la Ingeniería de Sistemas.
      </p>
    </footer>
  );
};

export default Footer;
