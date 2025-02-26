-- CRIAR TABELA
CREATE TABLE PRODUTOS (
ID SERIAL PRIMARY KEY,
NOME VARCHAR(255) NOT NULL,
PRECO DECIMAL (10, 2) NOT NULL,
CATEGORIA VARCHAR(100) NOT NULL
);

-- VALORES --

INSERT INTO PRODUTOS (NOME, PRECO, CATEGORIA) VALUES
('Notebook', 4500.00, 'Eletrônicos'),
('Smartphone', 2500.00, 'Eletrônicos'),
('Cadeira Gamer', 850.00, 'Móveis'),
('Geladeira', 3200.00, 'Eletrodomésticos'),
('Fone de Ouvido', 200.00, 'Acessório');

-- Listar todos os produtos --

SELECT * FROM PRODUTOS

-- Busque apenas categoria eletronica --

SELECT * FROM PRODUTOS WHERE CATEGORIA = 'Eletrônicos'

--Liste os produtos mais caros --

SELECT * FROM PRODUTOS ORDER BY PRECO DESC;
