#  Estrutura de Posts - Referência Rápida

## Tipos de Posts

### 1⃣ POST DE VÍDEO (YouTube)

```javascript
{
  id: 1,                    // Número único (1, 2, 3, ...)
  type: 'video',            // SEMPRE 'video' (com aspas)
  title: 'Seu Título',      // Título do vídeo
  description: 'Descrição', // Texto curto (1-2 linhas)
  tags: ['tag1', 'tag2'],   // Máximo 3 tags
  image: 'https://...',     // URL da imagem de capa
  youtubeId: 'dQw4w9WgXcQ', // ID do vídeo YouTube
  client: 'Nome do Cliente',// Quem contratou
  date: '2024-04-20',       // Data (YYYY-MM-DD )
  likes: 234,               // Número de likes
}
```

### 2⃣ POST DE ARTIGO (Texto + Foto)

```javascript
{
  id: 2,                    // Número único
  type: 'article',          // SEMPRE 'article' (com aspas)
  title: 'Seu Título',      // Título do artigo
  description: 'Descrição', // Resumo (aparece no feed)
  tags: ['tag1', 'tag2'],   // Máximo 3 tags
  image: 'https://...',     // URL da imagem
  content: 'Texto completo do artigo...',  // Conteúdo longo
  client: 'Editorial',      // Use 'Editorial' para artigos
  date: '2024-04-19',       // Data (YYYY-MM-DD )
  likes: 456,               // Número de likes
}
```

---

##  Guia de Preenchimento

### `id`

- **O que é:** Identificador único de cada post

- **Como preencher:** Use números sequenciais (1, 2, 3, 4...)

- **Importante:** Nunca repita o mesmo ID!

- **Exemplo:** `id: 7`

### `type`

- **O que é:** Tipo de conteúdo

- **Opções:** `'video'` ou `'article'`

- **Importante:** Use aspas simples e exatamente como está escrito

- **Exemplo:** `type: 'video'`

### `title`

- **O que é:** Título do post

- **Como preencher:** Máximo 60 caracteres (cabe em uma linha)

- **Exemplo:** `title: 'Reels para Ecommerce: Conversão em 15 segundos'`

### `description`

- **O que é:** Descrição breve que aparece no card do feed

- **Como preencher:** 1-2 linhas (máximo 150 caracteres)

- **Exemplo:** `description: 'Como criar vídeos curtos que vendem. Estratégia de storytelling para aumentar conversão.'`

### `tags`

- **O que é:** Palavras-chave para categorizar o post

- **Como preencher:** Array com 2-3 tags

- **Exemplo:** `tags: ['ecommerce', 'reels', 'marketing']`

- **Dica:** Use tags que descrevam o conteúdo (ferramentas, tópicos, tipos de cliente)

### `image`

- **O que é:** URL da imagem de capa do post

- **Como preencher:** Link completo começando com `https://`

- **Onde encontrar:**
  - Unsplash: [https://unsplash.com](https://unsplash.com)
  - Pexels: [https://pexels.com](https://pexels.com)
  - Suas próprias fotos (hospedadas em serviço como Imgur )

- **Exemplo:** `image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80'`

### `youtubeId` (apenas para vídeos )

- **O que é:** ID único do vídeo no YouTube

- **Como encontrar:**
  - Acesse seu vídeo: `https://www.youtube.com/watch?v=**dQw4w9WgXcQ**`
  - Copie apenas a parte em negrito

- **Exemplo:** `youtubeId: 'dQw4w9WgXcQ'`

### `content` (apenas para artigos )

- **O que é:** Texto completo do artigo

- **Como preencher:** Pode ser um parágrafo longo (200-500 palavras)

- **Importante:** Use aspas duplas e escape caracteres especiais se necessário

- **Exemplo:**

```javascript
content: 'O vídeo marketing não é mais uma tendência, é uma necessidade. As marcas que não investem em conteúdo de vídeo estão perdendo 85% do seu potencial de engajamento...'
```

### `client`

- **O que é:** Nome de quem contratou o projeto

- **Para vídeos:** Nome da empresa/cliente real

- **Para artigos:** Use `'Editorial'` (conteúdo seu)

- **Exemplo:** `client: 'Marina Cosméticos'` ou `client: 'Editorial'`

### `date`

- **O que é:** Data de publicação

- **Formato:** `YYYY-MM-DD` (ano-mês-dia)

- **Importante:** Use este formato exato!

- **Exemplo:** `date: '2024-04-20'`

- **Como converter:**
  - 20 de Abril de 2024 → `2024-04-20`
  - 1º de Janeiro de 2024 → `2024-01-01`

### `likes`

- **O que é:** Número de likes exibido no card

- **Como preencher:** Qualquer número (0, 100, 1000, etc.)

- **Dica:** Use números realistas baseados no engajamento real

- **Exemplo:** `likes: 234`

---

##  Checklist Antes de Salvar

- [ ] `id` é único (não repetido)?

- [ ] `type` é `'video'` ou `'article'`?

- [ ] `title` tem menos de 60 caracteres?

- [ ] `description` tem 1-2 linhas?

- [ ] `tags` tem 2-3 itens?

- [ ] `image` começa com `https://`?

- [ ] `youtubeId` está preenchido (se vídeo )?

- [ ] `content` está preenchido (se artigo)?

- [ ] `date` está no formato `YYYY-MM-DD`?

- [x] Todas as aspas estão corretas?

- [ ] Não há vírgula faltando?

---

## 🔧 Exemplos Completos

### Exemplo 1: Vídeo

```javascript
{
  id: 7,
  type: 'video',
  title: 'Unboxing de Produto: Técnica de Filmagem Profissional',
  description: 'Técnicas de cinematografia para criar unboxing videos que impressionam.',
  tags: ['filmagem', 'produto', 'técnica'],
  image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
  youtubeId: 'dQw4w9WgXcQ',
  client: 'Cliente Premium',
  date: '2024-04-05',
  likes: 189,
}
```

### Exemplo 2: Artigo

```javascript
{
  id: 8,
  type: 'article',
  title: 'Roteiro para Vídeos de Marketing: Estrutura que Converte',
  description: 'Guia completo sobre como estruturar um roteiro que mantém a atenção do espectador.',
  tags: ['roteiro', 'copywriting', 'marketing'],
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  content: 'Um bom roteiro é a base de um vídeo de sucesso. Neste artigo, compartilho a estrutura que uso em todos os meus projetos: Hook (primeiros 3 segundos ), Problema, Solução e CTA. Aprenda como aplicar isso em seus vídeos e transforme visualizações em conversões reais.',
  client: 'Editorial',
  date: '2024-03-28',
  likes: 312,
}
```

---

## 🚨 Erros Comuns

| Erro | Problema | Solução |
| --- | --- | --- |
| `id: "1"` | ID como texto | Use número: `id: 1` |
| `type: video` | Sem aspas | Use aspas: `type: 'video'` |
| `date: 20-04-2024` | Formato errado | Use: `date: '2024-04-20'` |
| `image: http://...` | HTTP em vez de HTTPS | Use: `https://...` |
| `tags: 'tag1'` | Tags como texto | Use array: `tags: ['tag1']` |
| Vírgula faltando | Erro de sintaxe | Adicione `,` após cada campo |

---

##  Dicas Profissionais

1. **Organize por data:** Posts mais recentes primeiro (maior `id` )

1. **Misture tipos:** Alterne entre vídeos e artigos para variedade

1. **Tags consistentes:** Use as mesmas tags para agrupar conteúdo similar

1. **Imagens de qualidade:** Escolha imagens que representem bem o conteúdo

1. **Descrições claras:** A descrição é o "gancho" — faça valer!

---

**Pronto para adicionar seus posts? Boa sorte! **

