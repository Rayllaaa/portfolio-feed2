import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Qual é o tempo de entrega de um projeto?',
    answer: 'O tempo varia conforme a complexidade do projeto. Um vídeo curto (15-60 segundos) geralmente leva de 5 a 10 dias úteis. Campanhas maiores podem levar de 2 a 4 semanas. Discutimos prazos específicos no briefing inicial.',
  },
  {
    id: 2,
    question: 'Vocês trabalham com qual orçamento?',
    answer: 'Trabalho com marcas de todos os tamanhos, desde startups até empresas consolidadas. Não tenho um valor fixo — tudo depende do escopo, complexidade e objetivos do projeto. Posso criar soluções desde mais acessíveis até premium.',
  },
  {
    id: 3,
    question: 'Como é o processo de trabalho?',
    answer: 'O processo segue estas etapas: 1) Briefing e descoberta; 2) Proposta e aprovação; 3) Roteiro e storyboard; 4) Filmagem; 5) Edição e revisões; 6) Entrega final. Você acompanha cada etapa.',
  },
  {
    id: 4,
    question: 'Posso fazer revisões no projeto?',
    answer: 'Sim! Geralmente incluo 2-3 rodadas de revisão no pacote. Revisões adicionais podem ser cobradas à parte. Quanto mais claro for o briefing inicial, menos revisões serão necessárias.',
  },
  {
    id: 5,
    question: 'Vocês criam o roteiro ou eu forneço?',
    answer: 'Posso trabalhar das duas formas. Se você já tem um roteiro, ótimo — vamos refinar juntos. Se não tem, faço a criação do zero, baseado na sua visão e objetivos. Isso é parte do meu serviço de consultoria.',
  },
  {
    id: 6,
    question: 'Trabalham com qual tipo de conteúdo?',
    answer: 'Especializo em vídeos curtos para redes sociais (Reels, TikTok, YouTube Shorts), mas também faço vídeos institucionais, unboxing, tutoriais, depoimentos de clientes e campanhas integradas.',
  },
  {
    id: 7,
    question: 'Qual é a qualidade dos vídeos?',
    answer: 'Todos os vídeos são produzidos em Full HD (1080p) ou 4K, com áudio profissional e edição de qualidade cinema. A qualidade é uma prioridade em todos os meus projetos.',
  },
  {
    id: 8,
    question: 'Vocês entregam os arquivos brutos ou apenas o vídeo final?',
    answer: 'Entrego o vídeo final otimizado para cada plataforma. Arquivos brutos ou projetos de edição podem ser incluídos mediante acordo especial.',
  },
  {
    id: 9,
    question: 'Como é o pagamento?',
    answer: 'Geralmente solicito 50% de adiantamento para confirmar a data e 50% na entrega. Posso discutir outras formas de pagamento conforme a necessidade.',
  },
  {
    id: 10,
    question: 'Vocês trabalham com clientes internacionais?',
    answer: 'Sim! Trabalho com clientes de todo o Brasil e do exterior. Tudo é feito remotamente, então a localização não é um problema.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="page-container faq-page">
      <div className="page-header">
        <h1>Perguntas Frequentes</h1>
        <p className="page-subtitle">Respostas para suas dúvidas mais comuns</p>
      </div>

      <div className="faq-container">
        {faqItems.map(item => (
          <div key={item.id} className="faq-item">
            <button
              className={`faq-question ${openId === item.id ? 'open' : ''}`}
              onClick={() => toggleFAQ(item.id)}
            >
              <span>{item.question}</span>
              <ChevronDown size={20} className="faq-icon" />
            </button>
            {openId === item.id && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <section className="faq-cta">
        <h2>Ainda tem dúvidas?</h2>
        <p>Entre em contato comigo! Fico feliz em responder qualquer pergunta sobre meus serviços.</p>
        <a href="/contact" className="cta-button">Enviar Mensagem</a>
      </section>
    </div>
  );
}
