# Passo a Passo Visual: Adicionar Seu Primeiro Vídeo

Este guia mostra exatamente onde clicar e o que fazer, passo por passo.

---

## PASSO 1: Abra o GitHub

Acesse: https://github.com

Se não estiver logada, clique em "Sign in" e faça login com sua conta.

---

## PASSO 2: Encontre seu Repositório

Na página inicial do GitHub, procure por "portfolio-feed" na barra de busca ou na lista de repositórios.

Clique nele.

---

## PASSO 3: Navegue até o Arquivo

Você verá uma lista de pastas e arquivos. Siga este caminho:

```
client
  └─ src
      └─ pages
          └─ Home.tsx
```

Clique em cada pasta para abrir. Quando chegar em "Home.tsx", clique nele.

---

## PASSO 4: Edite o Arquivo

Você verá o código do arquivo. No canto superior direito, procure pelo ícone de lápis (Edit).

Clique nele.

Agora você está em modo de edição. O arquivo ficará com fundo branco e você poderá digitar.

---

## PASSO 5: Procure pela Seção de Posts

Use Ctrl+F (ou Cmd+F no Mac) para abrir a busca.

Digite: `const allPosts`

Pressione Enter. Você será levado até a linha onde começam os posts.

---

## PASSO 6: Encontre um Vídeo Existente

Procure por um bloco que comece com:

```javascript
{
  id: 1,
  type: 'video',
```

Este é um vídeo. Copie todo esse bloco até o `},` (incluindo a vírgula).

---

## PASSO 7: Encontre o Lugar para Colar

Desça até o final da lista de posts. Procure pelo último `},`

Após esse `},`, clique e pressione Enter para criar uma nova linha.

---

## PASSO 8: Cole o Vídeo Copiado

Cole o bloco que você copiou.

Agora você tem uma cópia de um vídeo existente. Vamos editá-la.

---

## PASSO 9: Edite o ID

Procure por `id: 1,` no seu novo bloco.

Mude o número para um número maior que todos os outros. Por exemplo, se o último ID é 6, use 7.

```javascript
id: 7,  // Mudou de 1 para 7
```

---

## PASSO 10: Edite o Título

Procure por `title: 'Reels para Ecommerce: Conversão em 15 segundos',`

Substitua pelo título do seu vídeo. Mantenha as aspas simples.

```javascript
title: 'Meu Novo Vídeo Incrível',
```

---

## PASSO 11: Edite a Descrição

Procure por `description: 'Como criar vídeos curtos que vendem...',`

Substitua por uma descrição breve (1-2 linhas).

```javascript
description: 'Um vídeo sobre como criar conteúdo viral.',
```

---

## PASSO 12: Edite as Tags

Procure por `tags: ['ecommerce', 'reels', 'marketing'],`

Substitua por suas tags. Use máximo 3 palavras-chave.

```javascript
tags: ['viral', 'edição', 'criatividade'],
```

---

## PASSO 13: Edite a Imagem

Procure por `image: 'https://images.unsplash.com/...',`

1. Abra https://unsplash.com em outra aba
2. Procure por uma imagem relacionada ao seu vídeo
3. Copie o link da barra de endereço
4. Volte ao GitHub
5. Substitua o link inteiro

```javascript
image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
```

---

## PASSO 14: Edite o YouTube ID

Procure por `youtubeId: 'dQw4w9WgXcQ',`

1. Abra seu vídeo no YouTube
2. Copie a URL: `https://www.youtube.com/watch?v=abc123def456`
3. Pegue apenas a parte após `v=`: `abc123def456`
4. Volte ao GitHub
5. Substitua o ID

```javascript
youtubeId: 'abc123def456',
```

---

## PASSO 15: Edite o Cliente

Procure por `client: 'Cliente A',`

Substitua pelo nome de quem contratou o vídeo. Se for seu próprio conteúdo, use `'Editorial'`.

```javascript
client: 'Marina Cosméticos',
```

ou

```javascript
client: 'Editorial',
```

---

## PASSO 16: Edite a Data

Procure por `date: '2024-04-15',`

Substitua pela data de hoje ou quando publicou o vídeo. Use o formato `YYYY-MM-DD`.

```javascript
date: '2024-04-22',
```

---

## PASSO 17: Verifique Tudo

Antes de salvar, verifique:

- [ ] O `id` é único (diferente de todos os outros)?
- [ ] Todas as aspas simples estão fechadas?
- [ ] Todas as vírgulas estão no lugar certo?
- [ ] Não há espaços extras estranhos?

Se tudo estiver correto, continue.

---

## PASSO 18: Salve as Mudanças

Desça até o final da página.

Você verá uma seção chamada "Commit changes".

No campo que diz "Commit message", escreva:

```
Adiciona novo vídeo: [Título do seu vídeo]
```

Exemplo:

```
Adiciona novo vídeo: Como Editar Reels em 5 Minutos
```

---

## PASSO 19: Clique em "Commit changes"

Clique no botão verde "Commit changes".

Pronto! Suas mudanças foram salvas.

---

## PASSO 20: Aguarde a Atualização

Seu site será atualizado em 2-5 minutos.

Você não precisa fazer nada. Apenas aguarde.

Após alguns minutos, abra seu site e veja o novo vídeo no feed!

---

## RESUMO DO QUE VOCÊ FEZ

1. Abriu o GitHub
2. Navegou até Home.tsx
3. Copiou um vídeo existente
4. Editou os campos (título, descrição, tags, imagem, ID do YouTube, cliente, data)
5. Salvou as mudanças

Isso é tudo! Você conseguiu adicionar um vídeo ao seu portfólio.

---

## PRÓXIMAS VEZES

Agora que você sabe como fazer, fica mais fácil:

1. Abra Home.tsx
2. Copie o último post (vídeo ou artigo)
3. Cole e edite os campos
4. Commit changes

Você pode fazer isso quantas vezes quiser!

---

## DÚVIDAS?

Se tiver dúvida em algum passo:

1. Procure por um exemplo similar já existente no arquivo
2. Compare seu código com o exemplo
3. Verifique se está igual

Se ainda tiver dúvida, você pode:
- Desfazer usando "History" > "Revert"
- Tentar novamente

Não há risco! Você sempre pode desfazer.

---

Parabéns! Você agora sabe como adicionar vídeos ao seu portfólio. Tente com um artigo em seguida!
