<div align="center">

# 🪐 Órbita

**Gerenciador pessoal de projetos** — prioridades, to-dos, pomodoro e gráficos, tudo em um só lugar.

![Status](https://img.shields.io/badge/status-planejamento-yellow)
![Licença](https://img.shields.io/badge/licença-MIT-green)
![Uso](https://img.shields.io/badge/uso-pessoal-blueviolet)

</div>

---

> [!NOTE]
> **Projeto em fase de planejamento.** Ainda não há código implementado — este repositório reúne, por enquanto, a documentação técnica e funcional do app.

> [!IMPORTANT]
> **Este Órbita usa minha conta Firebase pessoal.** Quer rodar sua própria cópia? Crie um [projeto Firebase gratuito](https://firebase.google.com/) e troque as chaves de configuração pelas suas — não é preciso pedir acesso a nada meu.

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
| 🪐 Recompensa (XP/streak) | Nível e sequência de dias, representados como um planeta na tela própria |

## 🧱 Stack

| Camada | Escolha |
|---|---|
| Front-end | HTML, CSS e JavaScript, estruturado como **PWA** |
| Backend / banco de dados | **Firebase** (Firestore + Authentication) |

A estrutura como PWA é necessária para que as notificações/alarmes funcionem mesmo com o app fechado. O comparativo que levou à escolha do Firebase (frente a alternativas como Supabase) está no README técnico.

## 📚 Documentação

| Arquivo | Conteúdo |
|---|---|
| [`docs/Orbita_README_Tecnico.pdf`](./docs/Orbita_README_Tecnico.pdf) | Arquitetura, stack, estrutura de pastas, roadmap |
| [`docs/Orbita_Especificacao_Funcional.pdf`](./docs/Orbita_Especificacao_Funcional.pdf) | Funcionalidades, telas e modelo de dados |
| [`docs/mockup.md`](./docs/mockup.md) | Link do mockup navegável das telas (privado, acesso só da autora) |

## 🗺️ Roadmap

- [ ] **1.** Estrutura estática — lista de projetos e detalhe do projeto
- [ ] **2.** Autenticação e persistência — backend conectado
- [ ] **3.** Pomodoro e gráficos
- [ ] **4.** PWA e notificações
- [ ] **5.** Sistema de recompensa — XP, streak e tela do planeta
- [ ] **6.** Refino visual e responsividade

## 🤝 Como este projeto está sendo feito

O Órbita está sendo planejado e desenvolvido com apoio de IA (Claude, da Anthropic). A divisão de responsabilidades:

| Colaborador | Função |
|---|---|
| **Geovanna Tamagusko** | Autora e responsável pelo projeto — define requisitos, prioridades e toma todas as decisões de produto e arquitetura |
| **Claude (IA)** | Assistente de desenvolvimento — ajuda a estruturar documentação, propor arquitetura técnica, redigir código e organizar o repositório, sempre a partir de instruções e decisões da autora |

Toda decisão técnica proposta pela IA (stack, modelo de dados, estrutura) é uma recomendação a ser validada — não uma decisão final tomada sem revisão humana.

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE) — escolhida por ser simples e permissiva para um projeto pessoal; pode ser trocada a qualquer momento conforme a necessidade.

---

<div align="center">

Projeto pessoal de **[Geovanna Tamagusko](https://github.com/GehMay)**

</div>
