-- Criar a tabela funcionarios

CREATE TABLE funcionarios (
    nome VARCHAR(100),
    cargo VARCHAR(50),
    salario DECIMAL(10,2)

);
 
-- 2 Inserir os registros na tabela

-- inserior os dados
INSERT INTO funcionarios (nome, cargo, salario) VALUES
('Pedro H Prado', 'Desenvolvedor de Sistemas', 5500.00),
('Antonio Henrique', 'Analista de Sistemas', 8800.00),
('Julietta', 'CEO', 12000.00)

UPDATE funcionarios
SET salario = 5500.00
WHERE nome = 'Pedro H Prado';

-- Excluir o funcionário 
DELETE FROM funcionarios
WHERE nome = 'Julietta'; 

--  Verificar os funcionários que ainda estão na tabela

SELECT * FROM funcionarios;
 
