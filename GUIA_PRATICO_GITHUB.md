# Guia Prático: Modificar seu Portfólio via GitHub

Este guia mostra exatamente como adicionar vídeos, artigos, fotos e outras informações ao seu site usando GitHub. Nenhuma experiência técnica necessária.

---

## Passo 1: Acessar seu Repositório no GitHub

1. Abra https://github.com (ou faça login se já tiver conta)
2. Procure pelo seu repositório chamado `portfolio-feed`
3. Clique nele para abrir

Você verá uma lista de pastas e arquivos. Não se preocupe com a maioria deles - vamos trabalhar com arquivos específicos.

---

## ADICIONAR UM NOVO VÍDEO DO YOUTUBE

### Passo 1: Encontre o Arquivo de Posts

1. No GitHub, clique na pasta `client`
2. Clique na pasta `src`
3. Clique na pasta `pages`
4. Procure pelo arquivo `Home.tsx` e clique nele

Você verá o código do seu site. Não se assuste - é mais simples do que parece.

### Passo 2: Localize a Seção de Posts

Procure pela linha que diz:

```
const allPosts: Post[] = [
```

Abaixo dela, você verá vários posts começando com `{` e terminando com `},`

### Passo 3: Copie um Post Existente

Encontre um post de vídeo (tipo `'video'`) que já existe. Ele terá esta aparência:

```javascript
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
```

### Passo 4: Edite o Arquivo

1. Clique no ícone de lápis (Edit) no canto superior direito do arquivo
2. Procure pelo último post de vídeo (aquele com `type: 'video'`)
3. Após o `},` desse post, adicione uma vírgula e pressione Enter para criar uma nova linha
4. Cole o post que você copiou

### Passo 5: Modifique os Dados

Altere os seguintes campos com suas informações:

| Campo | O que mudar | Exemplo |
|-------|------------|---------|
| `id` | Número único (maior que o anterior) | `7` (se o último era 6) |
| `title` | Título do seu vídeo | `'Como Editar Reels em 5 Minutos'` |
| `description` | Descrição breve (1-2 linhas) | `'Tutorial rápido de edição'` |
| `tags` | Palavras-chave (máximo 3) | `['edição', 'tutorial', 'reels']` |
| `image` | Link da imagem de capa | `'https://images.unsplash.com/...'` |
| `youtubeId` | ID do vídeo YouTube | `'abc123def456'` |
| `client` | Nome de quem contratou | `'Meu Cliente'` ou `'Editorial'` |
| `date` | Data de publicação | `'2024-04-22'` |

### Passo 6: Como Encontrar o ID do YouTube

1. Abra seu vídeo no YouTube
2. Copie a URL: `https://www.youtube.com/watch?v=abc123def456`
3. Pegue apenas a parte após `v=` (neste caso: `abc123def456`)
4. Cole no campo `youtubeId`

### Passo 7: Como Encontrar uma Imagem de Capa

1. Acesse https://unsplash.com
2. Procure por uma imagem relacionada ao seu vídeo
3. Clique na imagem
4. Copie o link que aparece na barra de endereço
5. Cole no campo `image`

**Exemplo de link Unsplash válido:**
```
https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80
```

### Passo 8: Salve as Mudanças

1. Desça até o final da página
2. Você verá uma seção chamada "Commit changes"
3. No campo "Commit message", escreva: `Adiciona novo vídeo: [Título do seu vídeo]`
4. Clique em "Commit changes"

Pronto! Seu vídeo aparecerá no site em 2-5 minutos.

---

## ADICIONAR UM NOVO ARTIGO

O processo é quase idêntico ao vídeo, mas com algumas diferenças:

### Passo 1-4: Igual ao vídeo

Siga os passos 1-4 da seção anterior.

### Passo 5: Copie um Post de Artigo

Procure por um post com `type: 'article'`:

```javascript
{
  id: 2,
  type: 'article',
  title: 'Por que sua marca precisa de vídeos no TikTok em 2024',
  description: 'Uma análise profunda sobre a importância do vídeo marketing em redes sociais.',
  tags: ['tiktok', 'estratégia', 'marketing-digital'],
  image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80',
  content: 'O vídeo marketing não é mais uma tendência, é uma necessidade...',
  client: 'Editorial',
  date: '2024-04-10',
},
```

### Passo 6: Modifique os Dados

| Campo | O que mudar | Exemplo |
|-------|------------|---------|
| `id` | Número único | `8` |
| `type` | SEMPRE `'article'` | `'article'` |
| `title` | Título do artigo | `'Meu Processo Criativo'` |
| `description` | Resumo (1-2 linhas) | `'Como crio conteúdo viral'` |
| `tags` | Palavras-chave | `['processo', 'criatividade']` |
| `image` | Link da imagem | `'https://...'` |
| `content` | Texto completo do artigo | `'Aqui vai seu texto longo...'` |
| `client` | SEMPRE `'Editorial'` | `'Editorial'` |
| `date` | Data | `'2024-04-22'` |

### Passo 7: Escreva seu Conteúdo

O campo `content` é onde você escreve o texto completo do seu artigo. Pode ser um parágrafo longo (200-500 palavras).

**Importante:** Se seu texto tiver aspas duplas (`"`), você precisa adicionar uma barra invertida antes delas:

Errado:
```javascript
content: 'Ele disse "olá"'
```

Correto:
```javascript
content: 'Ele disse \"olá\"'
```

### Passo 8: Salve

Mesmo processo do vídeo. Desça até "Commit changes" e clique em "Commit changes".

---

## MODIFICAR INFORMAÇÕES DE CONTATO

### Mudar Email

1. Abra a pasta `pages`
2. Clique em `Contact.tsx`
3. Clique no lápis para editar
4. Procure por: `contato@rayllafotos.com`
5. Substitua pelo seu email
6. Commit changes

### Mudar Link do Instagram

1. Abra `Home.tsx`
2. Procure por: `https://instagram.com/rayllafotos`
3. Substitua por: `https://instagram.com/seu_usuario`
4. Commit changes

---

## MODIFICAR TEXTO DA PÁGINA "SOBRE"

1. Abra a pasta `pages`
2. Clique em `About.tsx`
3. Clique no lápis para editar
4. Procure pelo texto que quer mudar
5. Edite diretamente
6. Commit changes

Exemplo: Se você quer mudar "Sou Raylla, criadora de conteúdo", procure por essa frase e substitua pelo seu texto.

---

## MODIFICAR SERVIÇOS OFERECIDOS

1. Abra `Services.tsx`
2. Clique no lápis para editar
3. Procure por `const services = [`
4. Você verá uma lista de serviços. Cada um tem esta estrutura:

```javascript
{
  id: 1,
  title: 'Vídeos para Redes Sociais',
  description: 'Criação de conteúdo visual...',
  details: ['detalhe 1', 'detalhe 2', 'detalhe 3'],
}
```

5. Edite os campos:
   - `title`: Nome do serviço
   - `description`: Descrição breve
   - `details`: Lista de características (máximo 5)

6. Commit changes

---

## MODIFICAR PERGUNTAS FREQUENTES (FAQ)

1. Abra `FAQ.tsx`
2. Clique no lápis para editar
3. Procure por `const faqItems = [`
4. Você verá uma lista de perguntas:

```javascript
{
  id: 1,
  question: 'Qual é o tempo de entrega?',
  answer: 'O tempo varia conforme...',
}
```

5. Edite ou adicione novas perguntas
6. Commit changes

---

## MODIFICAR FEEDBACK DE CLIENTES

1. Abra `Testimonials.tsx`
2. Clique no lápis para editar
3. Procure por `const testimonials = [`
4. Você verá depoimentos:

```javascript
{
  id: 1,
  name: 'Marina Silva',
  company: 'Marina Cosméticos',
  role: 'Proprietária',
  text: 'Raylla transformou completamente...',
  rating: 5,
}
```

5. Edite os campos:
   - `name`: Nome do cliente
   - `company`: Empresa
   - `role`: Cargo/Posição
   - `text`: Depoimento (máximo 2-3 linhas)
   - `rating`: Estrelas (1-5)

6. Commit changes

---

## CHECKLIST ANTES DE SALVAR

Antes de clicar em "Commit changes", verifique:

- [ ] O `id` é único (não repetido)?
- [ ] Todas as aspas simples estão corretas?
- [ ] Todas as vírgulas estão no lugar certo?
- [ ] Não há espaços extras estranhos?
- [ ] Os links de imagem começam com `https://`?

Se tiver dúvida, procure por um post similar já existente e compare.

---

## ERROS COMUNS E COMO CORRIGIR

### Erro: "Syntax Error" ou "Something went wrong"

Isso significa que há um erro de digitação. Procure por:
- Vírgulas faltando
- Aspas não fechadas
- Chaves `{` ou `}` não fechadas

**Solução:** Compare seu código com um post existente que funciona.

### Erro: "Imagem não carrega"

A URL da imagem está quebrada.

**Solução:** 
1. Teste a URL em um novo navegador
2. Tente outra imagem do Unsplash
3. Verifique se começa com `https://`

### Erro: "Vídeo do YouTube não funciona"

O ID do YouTube está errado.

**Solução:**
1. Copie o ID correto da URL
2. Teste em: `https://www.youtube.com/embed/[ID]`
3. Verifique se o vídeo é público

---

## COMO DESFAZER UMA MUDANÇA

Se você cometeu um erro e quer desfazer:

1. Abra o arquivo novamente
2. Clique no histórico (History) no canto superior direito
3. Procure pela versão anterior (antes do seu erro)
4. Clique nela
5. Clique em "Revert" para voltar

---

## RESUMO RÁPIDO

| Ação | Arquivo | Onde Procurar |
|------|---------|---------------|
| Adicionar vídeo | Home.tsx | `const allPosts` |
| Adicionar artigo | Home.tsx | `const allPosts` |
| Mudar email | Contact.tsx | `contato@` |
| Mudar Instagram | Home.tsx | `instagram.com` |
| Editar "Sobre" | About.tsx | Procure pelo texto |
| Modificar serviços | Services.tsx | `const services` |
| Editar FAQ | FAQ.tsx | `const faqItems` |
| Editar feedback | Testimonials.tsx | `const testimonials` |

---

## DÚVIDAS?

Se tiver dúvida sobre um campo específico, procure por um exemplo similar já existente no arquivo e compare. O padrão é sempre o mesmo.

Boa sorte! Você consegue fazer isso sozinha.
