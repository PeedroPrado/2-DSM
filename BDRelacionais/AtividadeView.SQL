DROP TABLE IF EXISTS notas, alunos, cursos;

-- 2️⃣ Criar as tabelas corretamente
CREATE TABLE cursos (
    id_curso SERIAL PRIMARY KEY,
    Curso VARCHAR(100) NOT NULL
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

-- Inserir dados corretamente
INSERT INTO cursos (Curso) VALUES
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

_____________________________________________________________________

CREATE VIEW vw_alunos_cursos AS
SELECT alunos.nome, cursos.Curso
FROM alunos
INNER JOIN cursos ON alunos.id_curso = cursos.id_curso;

-- sempre que precisarmos dessa informação, basta usar:
SELECT * FROM vw_alunos_cursos;

DROP VIEW vw_alunos_cursos

___________________________________________________________________________

Exercicio 02

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
	
CREATE VIEW vw_ultimas_transacoes AS
SELECT 
    clientes.nome AS cliente,
    contas.numero_conta AS conta_origem,
    transacoes.tipo,
    transacoes.valor,
    transacoes.data_transacao,
    contas_destino.numero_conta AS conta_destino
FROM transacoes
INNER JOIN contas ON transacoes.id_conta = contas.id_conta
INNER JOIN clientes ON contas.id_cliente = clientes.id_cliente
INNER JOIN contas AS contas_destino ON transacoes.destino_transferencia = contas_destino.id_conta
ORDER BY transacoes.data_transacao DESC;


SELECT * FROM vw_ultimas_transacoes;

DROP VIEW vw_clientes_transacao


