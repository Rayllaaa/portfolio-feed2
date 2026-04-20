import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com um serviço de email
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page-container contact-page">
      <div className="page-header">
        <h1>Vamos Conversar?</h1>
        <p className="page-subtitle">Conte-me sobre seu projeto e vamos criar algo incrível juntos</p>
      </div>

      <div className="contact-content">
        <div className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Seu Nome *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Como você se chama?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Seu Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Sua Empresa / Marca</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa (opcional)"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Sua Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Conte-me sobre seu projeto, objetivos e orçamento..."
                rows={6}
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              {submitted ? '✓ Mensagem Enviada!' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="contact-info-card">
            <h3>📧 Email</h3>
            <p>
              <a href="mailto:contato@rayllafotos.com">contato@rayllafotos.com</a>
            </p>
          </div>

          <div className="contact-info-card">
            <h3>📱 Instagram</h3>
            <p>
              <a href="https://instagram.com/rayllafotos" target="_blank" rel="noopener noreferrer">
                @rayllafotos
              </a>
            </p>
          </div>

          <div className="contact-info-card">
            <h3>📍 Localização</h3>
            <p>Rio de Janeiro - RJ, Brasil</p>
          </div>

          <div className="contact-info-card">
            <h3>⏱️ Tempo de Resposta</h3>
            <p>Respondo em até 24 horas úteis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
