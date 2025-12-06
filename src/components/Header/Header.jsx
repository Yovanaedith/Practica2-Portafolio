import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Acerca de', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="main-header">
      <div className="header-logo">
        <a href="#hero">Yovana R. O.</a>
      </div>
      <nav className={`main-nav ${isOpen ? 'is-open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Botón de Hamburguesa para responsive */}
      <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation">
        ☰
      </button>
    </header>
  );
};

export default Header;
