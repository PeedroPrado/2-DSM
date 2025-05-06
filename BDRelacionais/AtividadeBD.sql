create database bd_bancofinanceiro;
-- TABELA: Cliente
CREATE TABLE cliente (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    data_nascimento DATE
);

-- TABELA: Agência
CREATE TABLE agencia (
    id_agencia SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    cidade VARCHAR(50)
);

-- TABELA: Conta
CREATE TABLE conta (
    id_conta SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES cliente(id_cliente),
    id_agencia INT REFERENCES agencia(id_agencia),
    saldo NUMERIC(10,2) DEFAULT 0
);

-- TABELA: Transação
CREATE TABLE transacao (
    id_transacao SERIAL PRIMARY KEY,
    id_conta INT REFERENCES conta(id_conta),
    tipo VARCHAR(20) CHECK (tipo IN ('Saque', 'Depósito', 'Transferência')),
    valor NUMERIC(10,2),
    data_transacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TABELA: Endereço
CREATE TABLE endereco (
    id_endereco SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES cliente(id_cliente),
    rua VARCHAR(100),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(2)
);
//Inserção de Dados
-- Clientes
INSERT INTO cliente (nome, cpf, data_nascimento) VALUES
('Andre Eduardo', '12345678900', '1985-02-10'),
('Ana Clara', '98765432100', '1990-11-25');

-- Agências
INSERT INTO agencia (nome, cidade) VALUES
('Agência Sul', 'São Paulo'),
('Agência Norte', 'Rio de Janeiro');

-- Contas
INSERT INTO conta (id_cliente, id_agencia, saldo) VALUES
(1, 1, 1000.00),
(2, 2, 2500.50);

-- Transações
INSERT INTO transacao (id_conta, tipo, valor) VALUES
(1, 'Depósito', 500.00),
(1, 'Saque', 200.00),
(2, 'Depósito', 1000.00);

-- Endereços
INSERT INTO endereco (id_cliente, rua, bairro, cidade, estado) VALUES
(1, 'Rua das Flores, 123', 'Jardins', 'São Paulo', 'SP'),
(2, 'Av. Brasil, 456', 'Centro', 'Rio de Janeiro', 'RJ');


-- 8. Criar a Procedure para aplicar bônus de 5%
CREATE OR REPLACE PROCEDURE aplicar_bonus()
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE conta
    SET saldo = saldo * 1.05;
END;
$$;

-- 9. Verificar os saldos antes do bônus
SELECT * FROM conta;

-- 10. Executar a Procedure aplicar_bonus
CALL aplicar_bonus();

-- 11. Verificar os saldos após o bônus
SELECT * FROM conta;

-------------------------------------------------------------------------
create database bd_escola;
CREATE TABLE cursos (id_curso SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL);
CREATE TABLE alunos (id_aluno SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, idade INT, id_curso INT REFERENCES cursos(id_curso));
CREATE TABLE notas (id_nota PRIMARY KEY, disciplina VARCHAR(100) NOT NULL, nota float, id_aluno INT REFERENCES alunos(id_aluno));
INSERT INTO cursos (nome) VALUES ('Engenharia’);
INSERT INTO cursos (nome) VALUES ('Análise de Sistemas’), ('Computação’), ('Matemática’);
INSERT INTO alunos (nome, idade, id_curso) VALUES ('João Silva', 22, 1);
INSERT INTO alunos (nome, idade, id_curso) VALUES ('Marina Lima', 16, 3), ('Maria Souza', 20, 3), ('Carlos Lima', 25, 4), (‘Lucas Pereira’, 18, 3);
INSERT INTO notas (id_nota, id_aluno, disciplina, nota) VALUES (101, 1, 'Matemática', 8.5),(102, 2, 'História', 9.0);
UPDATE alunos SET idade = 16 WHERE nome = 'João Silva’;
UPDATE alunos SET idade = 17, id_curso = 1 WHERE nome = 'Marina Lima’;
Select * from cursos;
Select * from alunos;

-- 1. Criar a Procedure curso2
CREATE OR REPLACE PROCEDURE curso2(nome_curso VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO cursos (nome) VALUES (nome_curso);
END;
$$;

-- 2. Chamar a Procedure curso2 (exemplo)
CALL curso2('Física');

-- 3. Renomear a procedure para novo_cadastro_curso
ALTER PROCEDURE curso2(VARCHAR) RENAME TO novo_cadastro_curso;

-- 4. Excluir a Procedure novo_cadastro_curso
DROP PROCEDURE IF EXISTS novo_cadastro_curso(VARCHAR);

-- 5. Criar novamente a Procedure com nome novo_cadastro_curso
CREATE OR REPLACE PROCEDURE novo_cadastro_curso(nome_curso VARCHAR)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO cursos (nome) VALUES (nome_curso);
END;
$$;

-- 6. Chamar a Procedure novo_cadastro_curso (exemplo)
CALL novo_cadastro_curso('Biomedicina');

-- 7. Consultar os cursos
SELECT * FROM cursos;