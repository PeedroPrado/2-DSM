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

-- Inserir dados corretamente
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

-- Criar uma View que mostra o nome dos alunos e suas notas

CREATE VIEW vw_alunos_notas AS
SELECT alunos.nome, notas.disciplina, notas.nota
FROM alunos
INNER JOIN notas ON alunos.id_aluno = notas.id_aluno;

-- sempre que precisarmos dessa informação, basta usar:
SELECT * FROM vw_alunos_notas;
