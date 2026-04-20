import { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface Post {
  id: number;
  type: 'project' | 'process' | 'essay' | 'case-study';
  title: string;
  description: string;
  tag: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  fullContent?: string;
  context?: string;
  tools?: string[];
}

const posts: Post[] = [
  {
    id: 1,
    type: 'project',
    title: 'Identidade Visual: Aurora',
    description: 'Um projeto focado em minimalismo e tons pastéis para uma marca de cosméticos naturais.',
    tag: 'Portfólio',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    likes: 234,
    comments: 18,
    shares: 12,
    timestamp: 'há 2 horas',
    fullContent: 'O desafio era criar uma marca que transmitisse pureza e sofisticação sem usar os clichês do setor verde/natureza. Iniciamos com um moodboard focado em texturas minerais e luz matinal. O resultado é uma tipografia customizada e uma paleta neutra com toques de lilás.',
    context: 'Cliente: Aurora Cosmetics | Ano: 2023',
    tools: ['Figma', 'Adobe XD', 'Illustrator'],
  },
  {
    id: 2,
    type: 'process',
    title: 'Bastidores: O Processo Criativo',
    description: 'Como organizo meus projetos do rascunho à entrega final usando Notion e Figma.',
    tag: 'Bastidores',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80',
    likes: 156,
    comments: 24,
    shares: 8,
    timestamp: 'ontem',
    fullContent: 'Muitos clientes perguntam como chegamos ao resultado final. Aqui mostro a "cozinha" do estúdio. Cada projeto passa por 4 fases: Imersão, Ideação, Prototipagem e Refinamento. A transparência gera confiança.',
    context: 'Processo Interno | 2024',
    tools: ['Notion', 'Figma', 'Miro'],
  },
  {
    id: 3,
    type: 'essay',
    title: 'Ensaio: O Futuro do Web Design',
    description: 'Reflexões sobre a integração de IA e a volta do design brutalista com toques de luxo.',
    tag: 'Ensaio',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    likes: 412,
    comments: 67,
    shares: 34,
    timestamp: '3 dias atrás',
    fullContent: 'A web está ficando homogênea. Como podemos resgatar a personalidade sem perder a usabilidade? Uma análise de tendências globais e comportamento do usuário em plataformas de curadoria visual.',
    context: 'Editorial | 2024',
    tools: ['Pesquisa', 'Análise', 'Escrita'],
  },
  {
    id: 4,
    type: 'case-study',
    title: 'E-commerce: Minimalist Home',
    description: 'Interface de loja virtual focada em conversão e estética editorial.',
    tag: 'Estudo de Caso',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    likes: 289,
    comments: 32,
    shares: 19,
    timestamp: '1 semana',
    fullContent: 'Vender produtos de alto ticket exige uma experiência de navegação que reflita a qualidade do item. Uso de espaços em branco generosos e fotografia de alta qualidade para guiar o olhar do consumidor.',
    context: 'Cliente: Minimalist Co. | Ano: 2023',
    tools: ['Shopify', 'Figma', 'Photography'],
  },
  {
    id: 5,
    type: 'process',
    title: 'Curadoria: Inspiração Semanal',
    description: 'O que estou lendo, vendo e ouvindo esta semana. A vida integrada ao trabalho.',
    tag: 'Curadoria',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
    likes: 178,
    comments: 42,
    shares: 15,
    timestamp: '1 semana',
    fullContent: 'Minha visão estética é alimentada por referências fora do design: arquitetura, cinema e moda. Uma seleção mensal de 5 referências que impactaram meu processo criativo recentemente.',
    context: 'Curadoria | 2024',
    tools: ['Pinterest', 'Notion', 'Leitura'],
  },
  {
    id: 6,
    type: 'project',
    title: 'App Design: Flow State',
    description: 'Aplicativo de produtividade com foco em bem-estar mental.',
    tag: 'Portfólio',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80',
    likes: 367,
    comments: 51,
    shares: 28,
    timestamp: '2 semanas',
    fullContent: 'Como criar uma ferramenta de trabalho que não cause ansiedade? Interface baseada em tons de lilás e transições suaves para manter o usuário em estado de fluxo.',
    context: 'Cliente: Flow Tech | Ano: 2024',
    tools: ['React', 'Figma', 'Framer Motion'],
  },
];

const categories = [
  { id: 'all', label: 'Tudo', icon: '✨' },
  { id: 'project', label: 'Portfólio', icon: '🎨' },
  { id: 'process', label: 'Bastidores', icon: '🔧' },
  { id: 'essay', label: 'Ensaios', icon: '✍️' },
  { id: 'case-study', label: 'Estudos', icon: '📊' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(p => p.type === activeCategory);

  const toggleLike = (postId: number) => {
    const newLiked = new Set(likedPosts);
    if (newLiked.has(postId)) {
      newLiked.delete(postId);
    } else {
      newLiked.add(postId);
    }
    setLikedPosts(newLiked);
  };

  return (
    <div className="feed-container">
      {/* Header */}
      <header className="feed-header">
        <div className="header-inner">
          <div className="logo-section">
            <h1 className="logo">STUDIO.LILAC</h1>
            <p className="tagline">Estética, Competência & Visão</p>
          </div>
        </div>
      </header>

      {/* Stories/Categories */}
      <section className="stories-section">
        <div className="stories-scroll">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`story-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <div className="story-ring">
                <span className="story-icon">{cat.icon}</span>
              </div>
              <span className="story-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Feed */}
      <main className="feed-main">
        <div className="feed-grid">
          {filteredPosts.map(post => (
            <article 
              key={post.id} 
              className="feed-card"
              onClick={() => setSelectedPost(post)}
            >
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <div className="card-overlay">
                  <span className="card-tag">{post.tag}</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.description}</p>
                <div className="card-meta">
                  <span className="card-time">{post.timestamp}</span>
                </div>
              </div>
              <div className="card-actions">
                <button 
                  className={`action-btn ${likedPosts.has(post.id) ? 'liked' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(post.id);
                  }}
                >
                  <Heart size={16} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                  <span>{post.likes + (likedPosts.has(post.id) ? 1 : 0)}</span>
                </button>
                <button className="action-btn" onClick={(e) => e.stopPropagation()}>
                  <MessageCircle size={16} />
                  <span>{post.comments}</span>
                </button>
                <button className="action-btn" onClick={(e) => e.stopPropagation()}>
                  <Share2 size={16} />
                  <span>{post.shares}</span>
                </button>
                <button className="action-btn bookmark" onClick={(e) => e.stopPropagation()}>
                  <Bookmark size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedPost && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedPost(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ✕
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedPost.image} alt={selectedPost.title} />
              </div>
              
              <div className="modal-text">
                <div className="modal-header">
                  <span className="modal-tag">{selectedPost.tag}</span>
                  <h2 className="modal-title">{selectedPost.title}</h2>
                </div>
                
                <div className="modal-sections">
                  <section className="modal-section">
                    <h3>Sobre o Projeto</h3>
                    <p>{selectedPost.description}</p>
                  </section>
                  
                  {selectedPost.fullContent && (
                    <section className="modal-section">
                      <h3>Detalhes</h3>
                      <p>{selectedPost.fullContent}</p>
                    </section>
                  )}
                  
                  {selectedPost.context && (
                    <section className="modal-section">
                      <h3>Informações</h3>
                      <p>{selectedPost.context}</p>
                    </section>
                  )}
                  
                  {selectedPost.tools && selectedPost.tools.length > 0 && (
                    <section className="modal-section">
                      <h3>Ferramentas & Tecnologias</h3>
                      <div className="tools-list">
                        {selectedPost.tools.map(tool => (
                          <span key={tool} className="tool-badge">{tool}</span>
                        ))}
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
