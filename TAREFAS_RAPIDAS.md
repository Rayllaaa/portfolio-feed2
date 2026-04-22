# Tarefas Rápidas: Checklist de Ações

Use este arquivo como referência rápida para as tarefas mais comuns.

---

## ADICIONAR NOVO VÍDEO (5 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > Home.tsx > Edit
2. Procure por: const allPosts: Post[] = [
3. Encontre o último vídeo (type: 'video')
4. Copie o bloco inteiro (de { até },)
5. Cole após a vírgula, em nova linha
6. Modifique:
   - id: [número novo, maior que anterior]
   - title: [seu título]
   - description: [descrição breve]
   - tags: [palavra1, palavra2, palavra3]
   - image: [link do Unsplash]
   - youtubeId: [ID do YouTube]
   - client: [nome do cliente ou Editorial]
   - date: [YYYY-MM-DD]
7. Commit changes > Escreva: "Adiciona novo vídeo: [Título]"
```

---

## ADICIONAR NOVO ARTIGO (5 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > Home.tsx > Edit
2. Procure por: const allPosts: Post[] = [
3. Encontre o último artigo (type: 'article')
4. Copie o bloco inteiro
5. Cole após a vírgula, em nova linha
6. Modifique:
   - id: [número novo]
   - type: 'article' (NÃO MUDE)
   - title: [título do artigo]
   - description: [resumo]
   - tags: [palavra1, palavra2]
   - image: [link do Unsplash]
   - content: [seu texto completo]
   - client: 'Editorial' (SEMPRE)
   - date: [YYYY-MM-DD]
7. Commit changes > Escreva: "Adiciona novo artigo: [Título]"
```

---

## MUDAR EMAIL DE CONTATO (2 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > Contact.tsx > Edit
2. Procure por: contato@rayllafotos.com
3. Substitua pelo seu email
4. Commit changes > Escreva: "Atualiza email de contato"
```

---

## MUDAR LINK DO INSTAGRAM (2 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > Home.tsx > Edit
2. Procure por: https://instagram.com/rayllafotos
3. Substitua por: https://instagram.com/seu_usuario
4. Commit changes > Escreva: "Atualiza link do Instagram"
```

---

## EDITAR TEXTO DA PÁGINA "SOBRE" (3 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > About.tsx > Edit
2. Procure pelo texto que quer mudar
3. Edite diretamente
4. Commit changes > Escreva: "Atualiza página Sobre"
```

---

## ADICIONAR NOVO SERVIÇO (3 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > Services.tsx > Edit
2. Procure por: const services = [
3. Encontre o último serviço
4. Copie o bloco inteiro (de { até },)
5. Cole após a vírgula
6. Modifique:
   - id: [número novo]
   - title: [nome do serviço]
   - description: [descrição]
   - details: [lista de características]
7. Commit changes > Escreva: "Adiciona novo serviço"
```

---

## ADICIONAR PERGUNTA NO FAQ (3 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > FAQ.tsx > Edit
2. Procure por: const faqItems = [
3. Encontre a última pergunta
4. Copie o bloco inteiro
5. Cole após a vírgula
6. Modifique:
   - id: [número novo]
   - question: [sua pergunta]
   - answer: [sua resposta]
7. Commit changes > Escreva: "Adiciona pergunta ao FAQ"
```

---

## ADICIONAR FEEDBACK DE CLIENTE (3 minutos)

```
1. GitHub > portfolio-feed > client > src > pages > Testimonials.tsx > Edit
2. Procure por: const testimonials = [
3. Encontre o último depoimento
4. Copie o bloco inteiro
5. Cole após a vírgula
6. Modifique:
   - id: [número novo]
   - name: [nome do cliente]
   - company: [empresa]
   - role: [cargo]
   - text: [depoimento]
   - rating: [1-5]
7. Commit changes > Escreva: "Adiciona depoimento de cliente"
```

---

## COMO ENCONTRAR IMAGENS

Acesse: https://unsplash.com

1. Procure por uma palavra-chave (ex: "video", "marketing", "criatividade")
2. Clique na imagem que gostar
3. Copie o link da barra de endereço
4. Cole no campo `image`

Exemplo de link válido:
```
https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80
```

---

## COMO ENCONTRAR ID DO YOUTUBE

1. Abra seu vídeo no YouTube
2. Copie a URL completa: `https://www.youtube.com/watch?v=abc123def456`
3. Pegue apenas a parte após `v=`: `abc123def456`
4. Cole no campo `youtubeId`

---

## COMO FORMATAR DATAS

Use sempre o formato: `YYYY-MM-DD`

Exemplos:
- 22 de Abril de 2024 → `2024-04-22`
- 1º de Janeiro de 2025 → `2025-01-01`
- 15 de Dezembro de 2024 → `2024-12-15`

---

## COMO ESCREVER TAGS

Tags são palavras-chave que descrevem seu conteúdo.

Máximo: 3 tags por post

Exemplos bons:
- `['ecommerce', 'reels', 'marketing']`
- `['edição', 'tutorial', 'vídeo']`
- `['processo', 'criatividade', 'design']`

---

## VERIFICAÇÃO FINAL

Antes de fazer "Commit changes", verifique:

- [ ] Todos os `id` são números únicos?
- [ ] Não há vírgulas faltando?
- [ ] Não há aspas não fechadas?
- [ ] Não há chaves `{` ou `}` não fechadas?
- [ ] Links de imagem começam com `https://`?
- [ ] Datas estão no formato `YYYY-MM-DD`?

Se tudo estiver certo, clique em "Commit changes".

---

## O QUE FAZER SE ERRAR

1. Abra o arquivo novamente
2. Clique em "History" (canto superior direito)
3. Procure pela versão anterior
4. Clique em "Revert"

Seu site voltará ao estado anterior.

---

## TEMPO DE ATUALIZAÇÃO

Após fazer "Commit changes", seu site será atualizado em:

- 2-5 minutos: Mudanças simples (texto, dados)
- 5-10 minutos: Mudanças com imagens
- Até 15 minutos: Em casos raros

Não precisa fazer nada. Apenas aguarde!

---

## DÚVIDAS FREQUENTES

**P: Posso adicionar vários posts de uma vez?**
R: Sim! Basta copiar e colar múltiplos blocos. Mas faça um "Commit changes" para cada um.

**P: Posso deletar um post?**
R: Sim! Procure pelo post, delete o bloco inteiro (de { até },) e faça commit.

**P: Posso mudar a ordem dos posts?**
R: Sim! Você pode copiar e colar os blocos em qualquer ordem. Mais recentes geralmente ficam no topo.

**P: O que acontece se eu cometer um erro?**
R: Nada de grave! Você pode desfazer usando "History" > "Revert".

**P: Preciso saber programação?**
R: Não! Basta copiar, colar e editar os campos. Tudo é automático.

---

Boa sorte! Você consegue fazer isso sozinha. Comece com um vídeo ou artigo simples.
