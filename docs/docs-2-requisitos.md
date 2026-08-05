# Fase 2: Engenharia de Requisitos

Nesta etapa, teremos visão geral do projeto em especificações técnicas. Essa documentação funciona como o **contrato do sistema**, definindo exatamente o que será desenvolvido.

A Engenharia de Requisitos está dividida em três pilares fundamentais:

- **Requisitos Funcionais (RF)** → O que o sistema deve fazer.
- **Requisitos Não Funcionais (RNF)** → Como o sistema deve se comportar.
- **Regras de Negócio (RN)** → Restrições e regras lógicas da aplicação.

---

# 1. Requisitos Funcionais (RF)

Os requisitos funcionais descrevem todas as funcionalidades que estarão disponíveis para o usuário.

## RF01 — Autenticação e Perfil

**Descrição:**

O sistema deve permitir que o usuário:

- Criar uma conta;
- Realizar login;
- Editar suas informações de perfil;
- Recuperar a senha.

---

## RF02 — Gestão de Tarefas (CRUD)

**Descrição:**

O usuário deve conseguir:

- Criar tarefas;
- Visualizar tarefas;
- Editar tarefas;
- Excluir tarefas;
- Gerenciar compromissos do dia a dia.

---

## RF03 — Categorização

**Descrição:**

O sistema deve permitir a criação e gerenciamento de categorias para organizar as tarefas.

### Exemplos de categorias

- Acadêmico
- Profissional
- Pessoal

---

## RF04 — Gestão de Metas

**Descrição:**

O usuário deve conseguir:

- Cadastrar metas de longo prazo;
- Associar tarefas menores às metas;
- Acompanhar diariamente o progresso dessas metas.

---

## RF05 — Painel de Insights (Dashboard)

**Descrição:**

A plataforma deve apresentar um resumo visual contendo métricas importantes, como:

- Taxa de conclusão de tarefas;
- Tempo gasto;
- Progresso geral das metas.

---

## RF06 — Sistema de Alertas

**Descrição:**

O sistema deve notificar o usuário sobre:

- Prazos próximos;
- Compromissos atrasados;
- Eventos importantes, evitando perda de horários.

---

# 2. Requisitos Não Funcionais (RNF)

Os requisitos não funcionais definem os atributos de qualidade do sistema, como desempenho, segurança e usabilidade.

## RNF01 — Responsividade

A interface web deve adaptar-se corretamente aos seguintes dispositivos:

- Computadores;
- Tablets;
- Smartphones.

> **Observação:** inicialmente será uma aplicação web responsiva; o aplicativo nativo será desenvolvido posteriormente.

---

## RNF02 — Desempenho

O sistema deve oferecer:

- Carregamento rápido do painel de insights;
- Lista de tarefas fluida;
- Navegação sem travamentos.

---

## RNF03 — Segurança

O sistema deve garantir que:

- As senhas sejam armazenadas utilizando criptografia;
- Nenhuma informação sensível seja transmitida sem proteção;
- Os dados dos usuários permaneçam seguros.

---

## RNF04 — Privacidade

A plataforma deve seguir boas práticas de proteção de dados, respeitando legislações como a **LGPD**.

---

# 3. Regras de Negócio (RN)

As regras de negócio representam as restrições lógicas da aplicação e garantem a consistência do funcionamento do sistema.

## RN01 — Isolamento de Dados

Cada usuário poderá:

- Visualizar apenas seus próprios dados;
- Editar apenas informações pertencentes à sua conta.

O acesso a dados de terceiros deve ser totalmente bloqueado.

---

## RN02 — Cálculo de Progresso

Sempre que uma tarefa vinculada a uma meta for concluída:

- A porcentagem de conclusão da meta deverá ser atualizada automaticamente.

---

## RN03 — Validação Temporal

O sistema não deve permitir que o usuário:

- Configure lembretes para datas passadas;
- Agende notificações para horários que já expiraram.

---

# Resumo Geral

| Categoria                 | Quantidade |
| ------------------------- | ---------: |
| Requisitos Funcionais     |      **6** |
| Requisitos Não Funcionais |      **4** |
| Regras de Negócio         |      **3** |
| **Total de requisitos**   |     **13** |
