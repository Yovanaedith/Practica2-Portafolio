import React from 'react';
import profileImage from '../../assets/profile.svg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hola, soy * Yovana Edith Ramos Orcko *</h1>
        <p className="subtitle">
          Ingeniera de Sistemas, enfocada en el desarrollo web y la metodología ágil (Scrum).
        </p>
        <button className="cta-button">Descargar CV</button>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Yovana Edith Ramos Orcko" />
      </div>
    </section>
  );
};

export default Hero;
