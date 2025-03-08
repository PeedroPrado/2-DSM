-- 1️⃣ Apagar tabelas na ordem correta para evitar erros de referência
DROP TABLE IF EXISTS notas, alunos, cursos;

-- 2️⃣ Criar as tabelas corretamente
CREATE TABLE cursos (
    id_curso SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE alunos (
    id_aluno SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    idade INT,
    id_curso INT REFERENCES cursos(id_curso) ON DELETE SET NULL
);

CREATE TABLE notas (
    id_nota SERIAL PRIMARY KEY,
    disciplina VARCHAR(100) NOT NULL,
    nota FLOAT,
    id_aluno INT REFERENCES alunos(id_aluno) ON DELETE CASCADE
);

-- 3️⃣ Inserir dados corretamente
INSERT INTO cursos (nome) VALUES
    ('Engenharia'),
    ('Analise de Sistema'),
    ('Computação'),
    ('Matemática');

INSERT INTO alunos (nome, idade, id_curso) VALUES
    ('João Silva', 22, 1),
    ('Marina Lima', 16, 3),
    ('Maria Souza', 20, 3),
    ('Carlos Lima', 25, 4),
    ('Lucas Pereira', 18, 3),
    ('Fernando Alves', 30, NULL); -- Um aluno sem curso

INSERT INTO notas (id_aluno, disciplina, nota) VALUES
    (1, 'Matemática', 8.5),
    (2, 'História', 9.0);

-- 4️⃣ Atualizações
UPDATE alunos SET idade = 16 WHERE nome = 'João Silva';
UPDATE alunos SET idade = 17, id_curso = 1 WHERE nome = 'Marina Lima';

-- 5️⃣ Consultas
-- Listar todos os cursos
SELECT * FROM cursos;

-- Listar todos os alunos
SELECT * FROM alunos;

-- Listar todas as notas
SELECT * FROM notas;

-- Listar alunos com suas notas (INNER JOIN)
SELECT alunos.nome, notas.disciplina, notas.nota
FROM alunos
INNER JOIN notas ON alunos.id_aluno = notas.id_aluno;

-- Listar alunos com seus cursos (INNER JOIN)
SELECT alunos.nome, cursos.nome AS curso
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso;

-- Listar TODOS os alunos, incluindo os que não têm curso (LEFT JOIN)
SELECT alunos.nome, COALESCE(cursos.nome, 'Sem Curso') AS curso
FROM alunos
LEFT JOIN cursos ON alunos.id_curso = cursos.id_curso;
------------------------------------------------------------


-- 1️⃣ Remove as tabelas se elas já existirem (na ordem correta para evitar conflitos)
DROP TABLE IF EXISTS transacoes;
DROP TABLE IF EXISTS contas;
DROP TABLE IF EXISTS clientes;

-- 2️⃣ Criação da tabela 'clientes'
CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    endereco TEXT,
    telefone VARCHAR(15)
);

-- 3️⃣ Inserção de dados na tabela 'clientes'
INSERT INTO clientes (nome, cpf, endereco, telefone) VALUES
    ('João Silva', '12345678900', 'Rua A, 123', '11999990000'),
    ('Maria Oliveira', '98765432100', 'Rua B, 456', '11988887777');

-- 4️⃣ Criação da tabela 'contas'
CREATE TABLE contas (
    id_conta SERIAL PRIMARY KEY,
    numero_conta VARCHAR(10) UNIQUE NOT NULL,
    saldo DECIMAL(10,2) DEFAULT 0 CHECK (saldo >= 0),
    id_cliente INT REFERENCES clientes(id_cliente) ON DELETE CASCADE
);

-- 5️⃣ Inserção de dados na tabela 'contas'
INSERT INTO contas (numero_conta, saldo, id_cliente) VALUES
    ('000123', 1500.00, 1),
    ('000456', 2300.00, 2);

-- 6️⃣ Criação da tabela 'transacoes' (agora com `ON DELETE CASCADE` em `destino_transferencia`)
CREATE TABLE transacoes (
    id_transacao SERIAL PRIMARY KEY,
    id_conta INT REFERENCES contas(id_conta) ON DELETE CASCADE,
    tipo VARCHAR(15) CHECK (tipo IN ('Depósito', 'Saque', 'Transferência')),
    valor DECIMAL(10,2) NOT NULL CHECK (valor > 0),
    data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    destino_transferencia INT REFERENCES contas(id_conta) ON DELETE CASCADE
);

-- 7️⃣ Inserção de dados na tabela 'transacoes'
INSERT INTO transacoes (id_conta, tipo, valor, destino_transferencia) VALUES
    (1, 'Depósito', 500.00, NULL),
    (2, 'Saque', 200.00, NULL),
    (1, 'Transferência', 300.00, 2);

-- 8️⃣ Consultas básicas no sistema bancário
-- Listar todos os clientes cadastrados
SELECT * FROM clientes;

-- Listar todas as contas e seus respectivos clientes
SELECT contas.numero_conta, clientes.nome, contas.saldo
FROM contas
INNER JOIN clientes ON contas.id_cliente = clientes.id_cliente;

-- Listar todas as transações registradas
SELECT transacoes.tipo, transacoes.valor, transacoes.data_transacao,
       c1.numero_conta AS origem,
       c2.numero_conta AS destino
FROM transacoes
INNER JOIN contas c1 ON transacoes.id_conta = c1.id_conta
LEFT JOIN contas c2 ON transacoes.destino_transferencia = c2.id_conta;

-- 9️⃣ Atualizações e remoções
-- Atualizar o saldo de uma conta (exemplo de um depósito)
UPDATE contas
SET saldo = saldo + 500.00
WHERE id_conta = 1;

-- Excluir um cliente e suas contas (ON DELETE CASCADE remove automaticamente as contas e transações associadas)
DELETE FROM clientes WHERE id_cliente = 2;

-- 🔟 Atividade prática
-- 1️⃣ Insira um novo cliente no sistema
INSERT INTO clientes (nome, cpf, endereco, telefone) VALUES
    ('Carlos Souza', '99988877766', 'Rua C, 789', '11977776666');

-- 2️⃣ Crie uma conta para esse novo cliente
INSERT INTO contas (numero_conta, saldo, id_cliente) VALUES
    ('000789', 1000.00, 3);

-- 3️⃣ Realize uma transferência de R$ 100,00 da conta 000123 para a conta 000789
BEGIN TRANSACTION;
    -- Inserir transação de transferência
    INSERT INTO transacoes (id_conta, tipo, valor, destino_transferencia)
    VALUES (1, 'Transferência', 100.00, 3);

    -- Atualizar saldo das contas
    UPDATE contas SET saldo = saldo - 100.00 WHERE id_conta = 1;
    UPDATE contas SET saldo = saldo + 100.00 WHERE id_conta = 3;
COMMIT;

-- 4️⃣ Liste todas as contas do banco, mostrando os saldos atualizados
SELECT contas.numero_conta, clientes.nome, contas.saldo
FROM contas
INNER JOIN clientes ON contas.id_cliente = clientes.id_cliente;
