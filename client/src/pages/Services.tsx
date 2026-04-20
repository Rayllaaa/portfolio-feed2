export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Produção de Vídeos Curtos',
      description: 'Reels, TikToks e shorts otimizados para redes sociais. Conteúdo que gera engajamento e conversão.',
      details: ['Roteiro personalizado', 'Filmagem profissional', 'Edição de alta qualidade', 'Otimização para cada plataforma'],
    },
    {
      id: 2,
      title: 'Estratégia de Conteúdo',
      description: 'Planejamento completo de sua presença digital. Definimos tom, estilo, frequência e objetivos.',
      details: ['Análise de concorrentes', 'Definição de buyer persona', 'Calendário editorial', 'KPIs e métricas'],
    },
    {
      id: 3,
      title: 'Edição e Pós-Produção',
      description: 'Transforme seu material bruto em conteúdo profissional e impactante.',
      details: ['Edição criativa', 'Correção de cor', 'Motion graphics', 'Efeitos especiais'],
    },
    {
      id: 4,
      title: 'Roteiro e Copywriting',
      description: 'Textos que vendem. Roteiros que prendem atenção e geram ação.',
      details: ['Roteiro para vídeos', 'Copy para redes sociais', 'Descrições otimizadas', 'Storytelling estratégico'],
    },
    {
      id: 5,
      title: 'Campanhas Integradas',
      description: 'Projetos completos que usam vídeo como pilar central de sua estratégia de marketing.',
      details: ['Planejamento 360°', 'Múltiplos formatos', 'Integração com outras mídias', 'Acompanhamento de resultados'],
    },
    {
      id: 6,
      title: 'Consultoria Digital',
      description: 'Orientação estratégica para marcas que querem crescer de forma elegante e eficaz.',
      details: ['Análise de presença digital', 'Recomendações de melhoria', 'Treinamento de equipe', 'Suporte contínuo'],
    },
  ];

  return (
    <div className="page-container services-page">
      <div className="page-header">
        <h1>Serviços</h1>
        <p className="page-subtitle">Transformo marcas em conteúdos que vendem</p>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h3>{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-details">
              {service.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="services-cta">
        <h2>Pronto para Transformar Sua Marca?</h2>
        <p>Vamos conversar sobre como posso ajudar seu negócio a crescer através do vídeo marketing.</p>
        <a href="/contact" className="cta-button">Solicitar Orçamento</a>
      </section>
    </div>
  );
}
