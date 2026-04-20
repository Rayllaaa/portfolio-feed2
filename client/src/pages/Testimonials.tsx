interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marina Silva',
    company: 'Marina Cosméticos',
    role: 'Proprietária',
    text: 'Raylla transformou completamente minha presença no Instagram. Os vídeos que ela criou geraram 300% mais engajamento e triplicaram minhas vendas em 3 meses. Recomendo muito!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    company: 'Tech Startup XYZ',
    role: 'CEO',
    text: 'Trabalhar com Raylla foi uma experiência profissional impecável. Ela entendeu nossa marca, criou uma estratégia sólida e entregou vídeos que realmente converteram. Parceria de longo prazo!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juliana Costa',
    company: 'JC Moda',
    role: 'Influenciadora',
    text: 'Os Reels que Raylla criou para minha coleção de verão foram incríveis. Ela tem um toque especial para capturar a essência da marca e transformar em conteúdo que vira viral.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Roberto Oliveira',
    company: 'Consultoria Empresarial',
    role: 'Diretor',
    text: 'Contratei Raylla para uma campanha de lançamento de serviço. O resultado foi profissional, criativo e estratégico. Superou minhas expectativas em todos os aspectos.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ana Paula Ferreira',
    company: 'Boutique de Moda',
    role: 'Gerente de Marketing',
    text: 'Raylla não é apenas uma produtora de vídeos, é uma consultora estratégica. Ela ajudou a definir nossa identidade visual e criou conteúdo que realmente conecta com nosso público.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Pedro Santos',
    company: 'E-commerce de Eletrônicos',
    role: 'Proprietário',
    text: 'Trabalhar com Raylla foi transformador para meu negócio. Os vídeos de produto que ela criou aumentaram minha taxa de conversão significativamente. Muito obrigado!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="page-container testimonials-page">
      <div className="page-header">
        <h1>Feedback de Clientes</h1>
        <p className="page-subtitle">O que meus clientes dizem sobre nosso trabalho juntos</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">⭐</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role} • {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="testimonials-cta">
        <h2>Pronto para Sua História de Sucesso?</h2>
        <p>Vamos criar conteúdo que transforme sua marca e gere resultados reais.</p>
        <a href="/contact" className="cta-button">Começar Agora</a>
      </section>
    </div>
  );
}
