# Fase 3: UI/UX e Experiência do Usuário

Nesta etapa, focamos na **usabilidade**. Como o problema central que queremos resolver é a **desorganização**, nossa interface deve ser **extremamente limpa, intuitiva e livre de distrações**.

---

# 1. Mapa de Telas (Arquitetura da Informação)

Para atender a todos os **Requisitos Funcionais (RF)** definidos na Fase 2, o MVP precisará, no mínimo, das seguintes telas:

## Landing Page
Uma página simples apresentando:
- A ferramenta;
- O problema que ela resolve;
- Botão **"Criar Conta"**.

---

## Tela de Login / Cadastro

Formulários limpos para acesso à plataforma.

---

## Dashboard Principal (Home)

É a tela mais importante da aplicação. Nela, o usuário visualizará um resumo do seu dia, contendo:

- ✅ Tarefas pendentes de hoje;
- 📊 Gráficos simples de insights (ex.: porcentagem de tarefas concluídas na semana);
- 🔔 Notificações de prazos próximos.

---

## Gestão de Tarefas e Calendário

Uma tela dedicada ao gerenciamento das tarefas, permitindo:

- Visualizar todas as tarefas;
- Filtrar por categorias (Profissional, Acadêmico, etc.);
- Visualizar prazos em:
  - Lista;
  - Calendário.

---

## Painel de Metas

Tela dedicada aos objetivos de longo prazo.

Deve apresentar:

- Barra de progresso de cada meta;
- Evolução automática conforme as tarefas vinculadas forem concluídas.

---

## Configurações e Perfil

Área onde o usuário poderá:

- Editar seus dados;
- Alterar senha;
- Gerenciar categorias criadas.

---

# 2. Jornada do Usuário (User Flow Básico)

Mapeamento do fluxo ideal de um novo usuário dentro da plataforma.

## 1. Descoberta

O usuário acessa a **Landing Page** e decide criar uma conta.

↓

## 2. Onboarding (Primeiro Acesso)

Após realizar login, o usuário encontra um Dashboard vazio.

O sistema apresenta uma pequena orientação (ou tela vazia convidativa), incentivando-o a criar sua primeira:

- Meta
- ou
- Categoria

↓

## 3. Ação Principal

O usuário:

1. Cria uma Meta (ex.: **"Passar no Semestre"**);
2. Adiciona três tarefas relacionadas à meta.

↓

## 4. Recompensa Visual

Ao marcar uma tarefa como **Concluída**:

- A barra de progresso da Meta é atualizada imediatamente;
- O Dashboard reflete essa evolução;
- O usuário recebe um feedback visual, reforçando a sensação de progresso e incentivando o uso contínuo da plataforma.

---

# 3. Identidade Visual e Estilo (Diretrizes Iniciais)

Como ainda não estamos na etapa de criação do design, podemos definir o "tom" visual do projeto para orientar o desenvolvimento futuro.

## 🎨 Design Minimalista

Características:

- Muito espaço em branco;
- Poucas cores chamativas;
- Interface limpa;
- O foco deve permanecer no conteúdo (as tarefas).

---

## ⚡ Feedback Imediato

Sempre que uma tarefa for concluída, o sistema deve exibir uma microinteração, como:

- Alerta de sucesso (verde);
- Pequena animação;
- Som discreto (opcional).

Objetivo:

Reforçar psicologicamente a sensação de organização e progresso.

---

## 🌙 Modo Escuro (Dark Mode)

Como será uma ferramenta de uso constante (estudo e trabalho), o suporte ao modo escuro será importante para:

- Melhor conforto visual;
- Redução da fadiga ocular;
- Melhor experiência em ambientes com pouca iluminação.

---