-- Criação das tabelas --

CREATE TABLE cursos (
id_curso SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL
);
CREATE TABLE alunos (
id_aluno SERIAL PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
idade INT,
id_curso INT REFERENCES cursos(id_curso)
);

-- Inserir os dados nas tabelas --

insert into cursos (id_curso, nome)
VALUES (4, 'Computação')

insert into alunos (nome, idade, id_curso)
VALUES ('Carlos Lima', 23, 2)

-- Buscar a tabela --

select *from cursos

-- Atualização de dados no banco de dados --

UPDATE alunos SET idade = 23
WHERE nome = 'João Silva'

UPDATE alunos SET idade = 21, id_curso = 3
WHERE nome = 'Maria Souza'

-- Deletar alguma informação da tabela -- 

DELETE FROM alunos 
where nome = 'Carlos Lima'

-- Excluir as informações da tabela --

DELETE FROM alunos

-- Desfazer o delete --

ROLLBACK 

-- Remover todos os registor de uma tableta  (NAO CONSEGUE DESFAZER) --

TRUNCATE 
