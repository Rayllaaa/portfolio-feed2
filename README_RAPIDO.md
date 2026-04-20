# 🎬 Raylla Studio - Portfólio Feed

Bem-vinda ao seu portfólio profissional! Um feed social elegante que transforma suas criações em conteúdo que vende.

## ⚡ Início Rápido

### Adicionar um Novo Post em 2 Minutos

1. Abra: `client/src/pages/Home.tsx`
2. Procure por: `const allPosts: Post[] = [`
3. Adicione seu post antes do último `]`:

```javascript
{
  id: 7,
  type: 'video',  // ou 'article'
  title: 'Seu Título',
  description: 'Descrição breve',
  tags: ['tag1', 'tag2'],
  image: 'https://sua-imagem.com/img.jpg',
  youtubeId: 'VIDEO_ID',  // apenas para vídeos
  client: 'Nome do Cliente',
  date: '2024-04-20',
  likes: 100,
},
```

4. Salve e faça commit:
```bash
git add client/src/pages/Home.tsx
git commit -m "Novo post: [Título]"
git push
```

## 📖 Documentação Completa

Para instruções detalhadas sobre:
- Como adicionar posts
- Como modificar conteúdo
- Como personalizar cores
- Como resolver problemas

👉 Leia: **`GUIA_COMPLETO.md`**

## 🎨 Estrutura do Projeto

```
client/src/pages/
├── Home.tsx          ← Adicione posts aqui!
├── About.tsx         ← Edite "Sobre Mim"
├── Services.tsx      ← Edite Serviços
├── Contact.tsx       ← Edite Contato
├── FAQ.tsx           ← Edite Perguntas
└── Testimonials.tsx  ← Edite Feedback
```

## 🚀 Publicar Mudanças

Tudo que você faz no GitHub é publicado automaticamente em 2-5 minutos!

```bash
git add .
git commit -m "Descrição das mudanças"
git push
```

## 🎯 Tipos de Posts

| Tipo | Uso | Exemplo |
|------|-----|---------|
| **Vídeo** | YouTube + comentário | Reel de técnica de filmagem |
| **Artigo** | Texto + foto | Análise de estratégia |

## 📱 Responsivo

Seu site funciona perfeitamente em:
- 📱 Mobile
- 📱 Tablet
- 💻 Desktop

## 🌙 Modo Escuro

Já implementado! Usuários podem alternar entre claro/escuro.

## ❓ Dúvidas?

Consulte o **`GUIA_COMPLETO.md`** — ele tem respostas para tudo!

---

**Pronto para começar? Adicione seu primeiro post agora! 🚀**
