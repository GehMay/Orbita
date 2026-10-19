# Órbita

Aplicativo pessoal de gerenciamento de projetos, com lista de projetos, prioridade, to-dos, descrição, prazo, pomodoro, gráficos de progresso e notificações/alarmes. Acesso autenticado, com sincronização entre dispositivos.

> **Status:** planejamento. Ainda não há código implementado — este repositório reúne, por enquanto, a documentação do projeto.

## Funcionalidades previstas

- Lista de projetos do usuário
- Detalhe do projeto: prioridade, to-dos (checkbox), descrição, data final
- Temporizador pomodoro vinculado a cada projeto
- Gráficos de progresso e tempo dedicado
- Notificações e alarmes (fim de ciclo pomodoro, prazos)
- Login e sincronização dos dados entre qualquer dispositivo

## Documentação

A documentação completa do planejamento está na pasta [`docs/`](./docs):

- [`Orbita_README_Tecnico.pdf`](./docs/Orbita_README_Tecnico.pdf) — arquitetura, stack proposta (comparativo Firebase vs. Supabase), estrutura de pastas e roadmap.
- [`Orbita_Especificacao_Funcional.pdf`](./docs/Orbita_Especificacao_Funcional.pdf) — funcionalidades, telas e modelo de dados sugerido.

## Stack (proposta, ainda não decidida)

- **Front-end:** HTML, CSS e JavaScript, estruturado como PWA (necessário para notificações/alarmes funcionarem com o app fechado).
- **Backend e banco de dados:** Firebase (Firestore) ou Supabase (Postgres) — comparativo detalhado no README técnico.

Detalhes e justificativas de cada escolha estão nos PDFs em `docs/`.

## Roadmap

1. Estrutura estática (lista de projetos e detalhe do projeto)
2. Autenticação e persistência (backend conectado)
3. Pomodoro e gráficos
4. PWA e notificações
5. Refino visual e responsividade

---

Projeto pessoal de [Geovanna Tamagusko](https://github.com/GehMay).
