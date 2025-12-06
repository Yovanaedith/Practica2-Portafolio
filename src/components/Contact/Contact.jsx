import React from 'react';

const Contact = () => {
  const contactInfo = [
    { label: 'Email', value: 'yovanarasmo819@gmail.com', link: 'mailto:yovanarasmo819@gmail.com' },
    { label: 'Celular', value: '77538646', link: 'tel:+59177538646' },
    { label: 'LinkedIn', value: 'Perfil Profesional', link: 'https://linkedin.com/in/yovana-ramos' }, // URL Ficticia
  ];

  // La funcionalidad del formulario queda pendiente para un próximo sprint.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Funcionalidad de formulario pendiente. ¡Contáctame por email o celular!');
  };

  return (
    <section className="contact-section">
      <h2>Hablemos de tu Proyecto 📬</h2>
      <div className="contact-info">
        {contactInfo.map((item) => (
          <div key={item.label} className="contact-item">
            <strong>{item.label}:</strong>{' '}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.value}
            </a>
          </div>
        ))}
      </div>
      
      {/* Formulario Placeholder para el futuro Sprint */}
      <form onSubmit={handleSubmit} className="contact-form">
        <h3>Envíame un mensaje (Próximamente)</h3>
        <input type="text" placeholder="Tu Nombre" required disabled />
        <input type="email" placeholder="Tu Correo" required disabled />
        <textarea placeholder="Tu Mensaje" rows="5" required disabled></textarea>
        <button type="submit" disabled>Enviar Mensaje</button>
      </form>
      <p className="contact-note">Actualmente, la mejor forma de contactarme es por correo electrónico o celular.</p>
    </section>
  );
};

export default Contact;
