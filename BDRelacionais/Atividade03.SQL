-- criação da tabela --
CREATE table funcionarios (
id_func SERIAL PRIMARY KEY,
nome VARCHAR NOT NULL, 
cargo VARCHAR NOT NULL,
salario DECIMAL (10, 2) NOT NULL
);
-- inserior os dados
INSERT INTO funcionarios (nome, cargo, salario) VALUES
('Pedro H Prado', 'Desenvolvedor de Sistemas', 5500.00),
('Antonio Henrique', 'Analista de Sistemas', 8800.00),
('Julietta', 'CEO', 12000.00)
-- buscar
SELECT * FROM funcionarios
