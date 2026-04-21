import { useState, useEffect, useCallback } from 'react';
import { Play } from 'lucide-react';

interface Post {
  id: number;
  type: 'video' | 'article';
  title: string;
  description: string;
  tags: string[];
  image?: string;
  youtubeId?: string;
  content?: string;
  client?: string;
  date: string;
}

const allPosts: Post[] = [
  {
    id: 1,
    type: 'video',
    title: 'Reels para Ecommerce: Conversão em 15 segundos',
    description: 'Como criar vídeos curtos que vendem. Estratégia de storytelling para aumentar conversão.',
    tags: ['ecommerce', 'reels', 'marketing'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    client: 'Cliente A',
    date: '2024-04-15',
  },
  {
    id: 2,
    type: 'article',
    title: 'Por que sua marca precisa de vídeos no TikTok em 2024',
    description: 'Uma análise profunda sobre a importância do vídeo marketing em redes sociais.',
    tags: ['tiktok', 'estratégia', 'marketing-digital'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
    content: 'O vídeo marketing não é mais uma tendência, é uma necessidade. As marcas que não investem em conteúdo de vídeo estão perdendo 85% do seu potencial de engajamento. Neste artigo, exploro as estratégias mais eficazes para criar conteúdo viral que converte...',
    client: 'Editorial',
    date: '2024-04-10',
  },
  {
    id: 3,
    type: 'video',
    title: 'Unboxing de Produto: Técnica de Filmagem Profissional',
    description: 'Técnicas de cinematografia para criar unboxing videos que impressionam.',
    tags: ['filmagem', 'produto', 'técnica'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    client: 'Cliente B',
    date: '2024-04-05',
  },
  {
    id: 4,
    type: 'article',
    title: 'Roteiro para Vídeos de Marketing: Estrutura que Converte',
    description: 'Guia completo sobre como estruturar um roteiro que mantém a atenção do espectador.',
    tags: ['roteiro', 'copywriting', 'marketing'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    content: 'Um bom roteiro é a base de um vídeo de sucesso. Neste artigo, compartilho a estrutura que uso em todos os meus projetos: Hook (primeiros 3 segundos), Problema, Solução e CTA. Aprenda como aplicar isso em seus vídeos...',
    client: 'Editorial',
    date: '2024-03-28',
  },
  {
    id: 5,
    type: 'video',
    title: 'Campanha de Lançamento: Estratégia 360',
    description: 'Como criar uma campanha integrada que usa vídeo como pilar principal.',
    tags: ['campanha', 'lançamento', 'estratégia'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?auto=format&fit=crop&w=800&q=80',
    youtubeId: 'dQw4w9WgXcQ',
    client: 'Cliente C',
    date: '2024-03-20',
  },
  {
    id: 6,
    type: 'article',
    title: 'Edição de Vídeo: Ferramentas e Workflow Profissional',
    description: 'Conheça as ferramentas que uso para editar vídeos de alta qualidade rapidamente.',
    tags: ['edição', 'ferramentas', 'workflow'],
    image: 'https://images.unsplash.com/photo-1533391295329-1d1b0c9a0a0e?auto=format&fit=crop&w=800&q=80',
    content: 'A edição é onde a magia acontece. Neste artigo, compartilho meu workflow completo: captura, organização de arquivos, edição, correção de cor e exportação. Também recomendo as melhores ferramentas para cada etapa...',
    client: 'Editorial',
    date: '2024-03-15',
  },
];

const categories = [
  { id: 'all', label: 'Tudo', icon: '*' },
  { id: 'video', label: 'Vídeos', icon: '>' },
  { id: 'article', label: 'Artigos', icon: '=' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedPosts, setDisplayedPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Simular scroll infinito
  const loadMorePosts = useCallback(() => {
    const filtered = activeCategory === 'all' 
      ? allPosts 
      : allPosts.filter(p => p.type === activeCategory);
    
    setDisplayedPosts(filtered);
    setHasMore(false);
  }, [activeCategory]);

  useEffect(() => {
    loadMorePosts();
  }, [activeCategory, loadMorePosts]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        if (!isLoading && hasMore) {
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore]);

  return (
    <div className="feed-container">
      {/* Header */}
      <header className="feed-header">
        <div className="header-inner">
          <div className="logo-section">
            <h1 className="logo">RAYLLA STUDIO</h1>
            <p className="tagline">Transformo marcas em conteúdos que vendem</p>
          </div>
          <div className="header-social">
            <a href="https://instagram.com/rayllafotos" target="_blank" rel="noopener noreferrer" className="social-link">
              Instagram
            </a>
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
          {displayedPosts.map(post => (
            <article 
              key={post.id} 
              className={`feed-card ${post.type}`}
              onClick={() => setSelectedPost(post)}
            >
              <div className="card-image">
                <img src={post.image} alt={post.title} />
                <div className="card-overlay">
                  <span className="card-tag">{post.type === 'video' ? 'Vídeo' : 'Artigo'}</span>
                  {post.type === 'video' && (
                    <div className="play-button">
                      <Play size={32} fill="white" />
                    </div>
                  )}
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{post.title}</h3>
                <p className="card-description">{post.description}</p>
                <div className="card-tags">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="tag-badge">#{tag}</span>
                  ))}
                </div>
                <div className="card-meta">
                  <span className="card-time">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {isLoading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
          </div>
        )}
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
              {selectedPost.type === 'video' && selectedPost.youtubeId ? (
                <div className="modal-video">
                  <iframe
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${selectedPost.youtubeId}`}
                    title={selectedPost.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="modal-image">
                  <img src={selectedPost.image} alt={selectedPost.title} />
                </div>
              )}
              
              <div className="modal-text">
                <div className="modal-header">
                  <span className="modal-tag">{selectedPost.type === 'video' ? 'Vídeo' : 'Artigo'}</span>
                  <h2 className="modal-title">{selectedPost.title}</h2>
                </div>
                
                <div className="modal-sections">
                  <section className="modal-section">
                    <h3>Descrição</h3>
                    <p>{selectedPost.description}</p>
                  </section>
                  
                  {selectedPost.content && (
                    <section className="modal-section">
                      <h3>Conteúdo</h3>
                      <p>{selectedPost.content}</p>
                    </section>
                  )}
                  
                  <section className="modal-section">
                    <h3>Tags</h3>
                    <div className="tags-list">
                      {selectedPost.tags.map(tag => (
                        <span key={tag} className="tag-badge-large">#{tag}</span>
                      ))}
                    </div>
                  </section>
                  
                  {selectedPost.client && (
                    <section className="modal-section">
                      <h3>Cliente</h3>
                      <p>{selectedPost.client}</p>
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
