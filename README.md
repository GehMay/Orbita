<div align="center">

# 🪐 Órbita

**Gerenciador pessoal de projetos** — prioridades, to-dos, pomodoro e gráficos, tudo em um só lugar.

![Status](https://img.shields.io/badge/status-planejamento-yellow)
![Licença](https://img.shields.io/badge/licença-não%20definida-lightgrey)
![Uso](https://img.shields.io/badge/uso-pessoal-blueviolet)

</div>

---

> [!NOTE]
> **Projeto em fase de planejamento.** Ainda não há código implementado — este repositório reúne, por enquanto, a documentação técnica e funcional do app.

## 📋 Sobre

O Órbita é um aplicativo pessoal para organizar projetos: visualizar a lista de tudo que está em andamento, abrir os detalhes de cada um (prioridade, tarefas, prazo), controlar o tempo de trabalho com a técnica pomodoro e acompanhar o progresso por gráficos. O acesso é autenticado, com os dados sincronizados entre qualquer dispositivo.

## ✨ Funcionalidades previstas

| Área | Descrição |
|---|---|
| 📁 Lista de projetos | Visão geral de todos os projetos do usuário |
| 🔎 Detalhe do projeto | Prioridade, to-dos em checkbox, descrição, data final |
| 🍅 Pomodoro | Temporizador de foco vinculado a cada projeto |
| 📊 Gráficos | Progresso e tempo dedicado por projeto |
| 🔔 Notificações e alarmes | Fim de ciclo pomodoro e prazos se aproximando |
| 🔐 Conta e sincronização | Login e dados disponíveis em qualquer dispositivo |

## 🧱 Stack (proposta, ainda não decidida)

| Camada | Opção recomendada |
|---|---|
| Front-end | HTML, CSS e JavaScript, estruturado como **PWA** |
| Backend / banco de dados | **Firebase** (Firestore) ou **Supabase** (Postgres) |

A estrutura como PWA é necessária para que as notificações/alarmes funcionem mesmo com o app fechado. O comparativo completo entre Firebase e Supabase, com justificativa da recomendação, está no README técnico.

## 📚 Documentação

| Arquivo | Conteúdo |
|---|---|
| [`docs/Orbita_README_Tecnico.pdf`](./docs/Orbita_README_Tecnico.pdf) | Arquitetura, stack proposta, estrutura de pastas, roadmap |
| [`docs/Orbita_Especificacao_Funcional.pdf`](./docs/Orbita_Especificacao_Funcional.pdf) | Funcionalidades, telas e modelo de dados |

## 🗺️ Roadmap

- [ ] **1.** Estrutura estática — lista de projetos e detalhe do projeto
- [ ] **2.** Autenticação e persistência — backend conectado
- [ ] **3.** Pomodoro e gráficos
- [ ] **4.** PWA e notificações
- [ ] **5.** Refino visual e responsividade

---

<div align="center">

Projeto pessoal de **[Geovanna Tamagusko](https://github.com/GehMay)**

</div>
