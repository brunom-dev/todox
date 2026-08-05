# Fase 4: Modelagem do Banco de Dados

Nesta etapa definimos a estrutura do banco de dados da aplicação. A modelagem foi projetada para ser simples, escalável e suficiente para atender todos os requisitos do MVP, permitindo organizar tarefas, metas e categorias de forma individual para cada usuário.

---

# 1. Entidades (Tabelas do Banco de Dados)

## Tabela: `users` (Usuários)

Representa os usuários da plataforma. Todos os demais dados pertencem a um usuário específico.

| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID (PK) | Identificador único do usuário. |
| `name` | Texto | Nome do usuário. |
| `email` | Texto (Único) | E-mail utilizado para login. |
| `password_hash` | Texto | Senha criptografada. |
| `created_at` | Data/Hora | Data de criação da conta. |

---

## Tabela: `categories` (Categorias)

Responsável por organizar as diferentes áreas da vida do usuário.

Exemplos:

- Faculdade
- Trabalho
- Saúde
- Pessoal

### Campos

| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID (PK) | Identificador da categoria. |
| `name` | Texto | Nome da categoria. |
| `color` | Texto | Código HEX utilizado no Frontend. |
| `user_id` | UUID (FK → users) | Usuário proprietário da categoria. |
|parent_id (UUID, opcional, Chave Estrangeira -> liga à própria tabela categories)|

---

## Tabela: `goals` (Metas)

Armazena objetivos de médio e longo prazo.

### Campos

| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID (PK) | Identificador da meta. |
| `title` | Texto | Título da meta. |
| `description` | Texto (Opcional) | Descrição da meta. |
| `deadline` | Data | Prazo final da meta. |
| `user_id` | UUID (FK → users) | Usuário proprietário da meta. |
| `created_at` | Data/Hora | Data de criação da meta. |

---

## Tabela: `tasks` (Tarefas)

Representa as atividades executadas diariamente pelo usuário.

### Campos

| Campo | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID (PK) | Identificador da tarefa. |
| `title` | Texto | Título da tarefa. |
| `description` | Texto (Opcional) | Descrição da tarefa. |
| `status` | Enum (`TODO`, `IN_PROGRESS`, `DONE`) | Estado atual da tarefa. |
| `due_date` | Data/Hora | Prazo final da tarefa. |
| `user_id` | UUID (FK → users) | Usuário proprietário da tarefa. |
| `category_id` | UUID (FK → categories, opcional) | Categoria da tarefa. |
| `goal_id` | UUID (FK → goals, opcional) | Meta associada à tarefa. |
| `created_at` | Data/Hora | Data de criação da tarefa. |

---

# 2. Relacionamentos

A estrutura do banco segue um modelo relacional simples.

## Usuário → Categorias

Um usuário pode possuir diversas categorias.

```text
User (1)
    │
    └────── (N) Categories
```

---

## Usuário → Metas

Cada usuário pode criar várias metas.

```text
User (1)
    │
    └────── (N) Goals
```

---

## Usuário → Tarefas

Todas as tarefas pertencem a um único usuário.

```text
User (1)
    │
    └────── (N) Tasks
```

Essa relação garante o isolamento dos dados, permitindo que cada usuário visualize apenas suas próprias informações.

---

## Categoria → Tarefas

Uma categoria pode possuir várias tarefas associadas.

```text
Category (1)
      │
      └────── (N) Tasks
```

Exemplo:

```
Categoria: Faculdade

├── Estudar Cálculo
├── Fazer Trabalho de Redes
└── Entregar Projeto
```

---

## Meta → Tarefas

Uma meta é composta por várias tarefas.

```text
Goal (1)
    │
    └────── (N) Tasks
```

Exemplo:

```
Meta:
Passar no Semestre

├── Estudar Cálculo
├── Fazer Exercícios
├── Revisar para Prova
└── Entregar Projeto Final
```

Essa relação permitirá calcular automaticamente o progresso da meta.

---

# 3. Geração dos Insights

O Dashboard utilizará consultas SQL simples para produzir indicadores e gráficos.

## Taxa de Conclusão Semanal

O sistema calculará:

- Quantidade de tarefas concluídas (`DONE`) nos últimos sete dias;
- Quantidade de tarefas criadas no mesmo período.

Com esses dados será possível exibir indicadores como:

- Percentual de produtividade semanal;
- Evolução da produtividade.

---

## Foco por Área

As tarefas concluídas serão agrupadas por categoria (`category_id`).

Exemplo de resultado:

| Categoria | Percentual |
|-----------|-----------:|
| Trabalho | 60% |
| Faculdade | 30% |
| Saúde | 10% |

Esses dados poderão alimentar gráficos de pizza ou gráficos de barras.

---

## Progresso das Metas

Para cada meta, o sistema calculará:

```text
(Progresso) =
(Tarefas concluídas da meta)
÷
(Total de tarefas da meta)
×
100
```

### Exemplo

Meta:

```
Passar no Semestre
```

Tarefas:

- ✅ Estudar Cálculo
- ✅ Fazer Exercícios
- ⬜ Revisar para Prova
- ⬜ Entregar Projeto

Resultado:

```
2 concluídas / 4 totais = 50%
```

Essa porcentagem será utilizada para atualizar automaticamente a barra de progresso exibida no Dashboard.

---

# Resumo da Modelagem

```text
Users
│
├── Categories
│      └── Tasks
│
├── Goals
│      └── Tasks
│
└── Tasks
```

Essa modelagem oferece:

- Organização por usuário;
- Organização por categorias;
- Gerenciamento de metas;
- Controle de tarefas;
- Cálculo automático de progresso;
- Geração de indicadores e insights para o Dashboard.