# # Guia Completo: Raylla Studio Portfolio Feed

Bem-vinda, Raylla! Este guia detalha como gerenciar, atualizar e expandir seu portfólio através do GitHub. Você não precisa de conhecimento técnico avançado - vou deixar tudo bem explicado.

---

##  Visão Geral da Estrutura

Seu portfólio é um **React App** hospedado na Manus. A estrutura de pastas é organizada assim:

```
portfolio-feed/
├── client/                    # Frontend (React)
│   ├── src/
│   │   ├── pages/            # Páginas do site
│   │   │   ├── Home.tsx      # Feed principal (AQUI você adiciona posts!)
│   │   │   ├── About.tsx     # Página Sobre
│   │   │   ├── Services.tsx  # Página Serviços
│   │   │   ├── Contact.tsx   # Página Contato
│   │   │   ├── FAQ.tsx       # Perguntas Frequentes
│   │   │   └── Testimonials.tsx # Feedback de Clientes
│   │   ├── components/       # Componentes reutilizáveis
│   │   │   └── Navigation.tsx # Menu de navegação
│   │   ├── index.css         # Estilos globais
│   │   └── App.tsx           # Configuração principal
│   └── index.html            # HTML base
├── GUIA_COMPLETO.md          # Este arquivo
└── package.json              # Dependências do projeto
```

---

##  COMO ADICIONAR POSTS (Vídeos e Artigos)

### Entendendo a Estrutura de Posts

Seu feed tem **dois tipos de posts**:

| Tipo | O que é | Exemplo |
|------|---------|---------|
| **Vídeo** | Vídeo do YouTube com comentário curto | Reel de 15-60 segundos com técnica de filmagem |
| **Artigo** | Texto com foto, para conteúdo mais profundo | Análise sobre estratégia de marketing com imagem |

### Passo 1: Abra o Arquivo de Posts

Acesse o arquivo onde todos os posts estão armazenados:

```
client/src/pages/Home.tsx
```

### Passo 2: Localize o Array de Posts

Procure pela seção `allPosts`. Ela começa assim:

```javascript
const allPosts: Post[] = [
  {
    id: 1,
    type: 'video',
    title: 'Reels para Ecommerce: Conversão em 15 segundos',
    // ... mais dados
  },
  // ... mais posts
];
```

### Passo 3: Adicione um Novo Post

**Para adicionar um VÍDEO do YouTube:**

```javascript
{
  id: 7,  // Número único (incrementar de 1 em 1)
  type: 'video',
  title: 'Seu Título Aqui',
  description: 'Descrição breve do vídeo (uma linha)',
  tags: ['tag1', 'tag2', 'tag3'],  // Máximo 3 tags
  image: 'https://link-da-imagem.com/imagem.jpg',  // Imagem de capa
  youtubeId: 'dQw4w9WgXcQ',  // ID do vídeo YouTube
  client: 'Nome do Cliente',
  date: '2024-04-20',  // Data no formato YYYY-MM-DD
  likes: 100,  // Número de likes (pode ser qualquer número)
},
```

**Para adicionar um ARTIGO com foto:**

```javascript
{
  id: 8,
  type: 'article',
  title: 'Seu Título do Artigo',
  description: 'Descrição breve (aparece no card do feed)',
  tags: ['tag1', 'tag2'],
  image: 'https://link-da-imagem.com/imagem.jpg',
  content: 'Aqui vai o conteúdo completo do seu artigo. Pode ser um parágrafo longo explicando sua visão, processo ou aprendizado. Este texto aparece quando alguém clica no post.',
  client: 'Editorial',  // Para artigos, use "Editorial"
  date: '2024-04-19',
  likes: 250,
},
```

### Passo 4: Onde Encontrar IDs do YouTube

1. Acesse seu vídeo no YouTube
2. A URL será assim: `https://www.youtube.com/watch?v=**dQw4w9WgXcQ**`
3. Copie apenas a parte em negrito (após `v=`)

### Passo 5: Onde Encontrar Imagens de Capa

Você pode usar:

- **Unsplash** (gratuito): https://unsplash.com — procure por imagens relacionadas ao seu conteúdo
- **Pexels** (gratuito): https://pexels.com
- **Suas próprias fotos**: Faça upload em um serviço como Imgur ou use links diretos

**Exemplo de URL Unsplash:**
```
https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80
```

### Passo 6: Salve e Publique

1. Após adicionar o post, salve o arquivo
2. Faça um `commit` no Git:
   ```bash
   git add client/src/pages/Home.tsx
   git commit -m "Adiciona novo post: [Título do Post]"
   git push
   ```
3. Seu site será atualizado automaticamente em poucos minutos!

---

## ✏ COMO MODIFICAR CONTEÚDO EXISTENTE

### Modificar Informações de Contato

Abra: `client/src/pages/Contact.tsx`

Procure por:
```javascript
<a href="mailto:contato@rayllafotos.com">contato@rayllafotos.com</a>
```

Substitua pelo seu email.

### Modificar Descrição na Página "Sobre"

Abra: `client/src/pages/About.tsx`

Encontre o texto que quer mudar e edite diretamente. Exemplo:

```javascript
<p>
  Sou Raylla, criadora de conteúdo... // Edite aqui
</p>
```

### Modificar Serviços Oferecidos

Abra: `client/src/pages/Services.tsx`

Procure pelo array `services`:

```javascript
const services = [
  {
    id: 1,
    title: 'Seu Novo Serviço',
    description: 'Descrição do serviço',
    details: ['detalhe 1', 'detalhe 2', 'detalhe 3'],
  },
  // ... mais serviços
];
```

Adicione, remova ou modifique conforme necessário.

### Modificar Perguntas Frequentes

Abra: `client/src/pages/FAQ.tsx`

Procure pelo array `faqItems`:

```javascript
const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Sua pergunta aqui?',
    answer: 'Sua resposta aqui.',
  },
  // ... mais perguntas
];
```

### Modificar Feedback de Clientes

Abra: `client/src/pages/Testimonials.tsx`

Procure pelo array `testimonials`:

```javascript
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Nome do Cliente',
    company: 'Empresa',
    role: 'Cargo',
    text: 'Depoimento do cliente aqui...',
    rating: 5,  // 1 a 5 estrelas
  },
  // ... mais depoimentos
];
```

---

##  COMO PERSONALIZAR O DESIGN

### Alterar Cores

Abra: `client/src/index.css`

Procure pela seção de cores (linhas 45-80):

```css
:root {
  --feed-lilac-deep: #8a2be2;      /* Lilás principal */
  --feed-lilac-medium: #a855f7;    /* Lilás médio */
  --feed-lilac-light: #e9d5ff;     /* Lilás claro */
  --feed-neutral-dark: #1a1917;    /* Neutro escuro */
  --feed-neutral-light: #d9d3cc;   /* Neutro claro */
  --feed-bg-main: #f5f3f0;         /* Fundo principal */
  --feed-bg-card: #ffffff;         /* Fundo dos cards */
  --feed-text-primary: #1a1917;    /* Texto principal */
  --feed-text-secondary: #6b6b6b;  /* Texto secundário */
  --feed-text-tertiary: #999999;   /* Texto terciário */
}
```

**Para mudar a cor lilás para outra:**

1. Escolha uma cor (ex: `#ff6b6b` para vermelho)
2. Substitua `#8a2be2` por sua cor em `--feed-lilac-deep`
3. Salve e veja a mudança em tempo real!

### Alterar Tipografia

Abra: `client/index.html`

Procure pela linha de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

Você pode trocar:
- `Playfair Display` (títulos) por outra fonte
- `Inter` (corpo) por outra fonte

Visite https://fonts.google.com para explorar opções.

---

##  COMO ATIVAR MODO ESCURO

O modo escuro já está implementado! Usuários podem ativar clicando no ícone de tema (quando implementado).

Para testar:
1. Abra o DevTools do navegador (F12)
2. Procure pela tag `<html>`
3. Adicione a classe `dark`: `<html class="dark">`
4. Veja o site em modo escuro!

---

##  COMO TESTAR RESPONSIVIDADE

Seu site funciona em **desktop, tablet e mobile**. Para testar:

1. Abra seu site em qualquer navegador
2. Pressione `F12` (DevTools)
3. Clique no ícone de dispositivo (canto superior esquerdo)
4. Escolha diferentes tamanhos de tela

---

##  COMO FAZER DEPLOY (Publicar)

Seu site é hospedado automaticamente na Manus. Para publicar mudanças:

1. **Faça as alterações** no código
2. **Commit no Git:**
   ```bash
   git add .
   git commit -m "Descrição das mudanças"
   git push
   ```
3. **Aguarde 2-5 minutos** — seu site será atualizado automaticamente!

---

##  SOLUÇÃO DE PROBLEMAS

### "Meu post não aparece no feed"

**Solução:** Verifique se:
- O `id` é único (não repetido)
- O `type` é `'video'` ou `'article'` (com aspas simples)
- A data está no formato `YYYY-MM-DD`
- Não há erros de sintaxe (vírgulas, chaves, etc.)

### "A imagem não carrega"

**Solução:**
- Verifique se a URL está correta
- Teste a URL em um novo navegador
- Tente usar outra imagem

### "O vídeo do YouTube não funciona"

**Solução:**
- Copie o ID correto (após `v=` na URL)
- Verifique se o vídeo é público
- Teste a URL: `https://www.youtube.com/embed/[ID]`

### "Mudei o código mas o site não atualizou"

**Solução:**
- Limpe o cache: `Ctrl+Shift+Delete` (Chrome) ou `Cmd+Shift+Delete` (Mac)
- Aguarde 5 minutos
- Verifique se o commit foi feito: `git log`

---

##  CONTATO E SUPORTE

Se tiver dúvidas sobre o código ou precisar de ajuda:

1. Consulte este guia novamente
2. Verifique a sintaxe do código (procure por erros de digitação)
3. Teste em pequenas mudanças antes de fazer alterações grandes

---

##  CHECKLIST PARA MANUTENÇÃO REGULAR

- [ ] Adicionar novo post a cada semana
- [ ] Atualizar feedback de clientes mensalmente
- [ ] Revisar e atualizar página "Serviços" trimestralmente
- [ ] Verificar links de contato (email, Instagram)
- [ ] Testar site em mobile a cada mês
- [ ] Fazer backup do código no GitHub

---

##  PRÓXIMOS PASSOS RECOMENDADOS

1. **Adicione seus primeiros 3 posts** (misture vídeos e artigos)
2. **Customize as cores** para combinar com sua marca
3. **Atualize informações de contato** com seus dados reais
4. **Teste o formulário de contato** enviando uma mensagem para você mesma
5. **Compartilhe o link** com amigos e clientes para feedback

---

**Parabéns! Seu portfólio está pronto para crescer. Boa sorte, Raylla! **
