CREATE TABLE clientes (
    id INT PRIMARY KEY,  -- ID único para cada cliente
    nome VARCHAR(100) NOT NULL,         -- Nome do cliente
    saldo DECIMAL(15, 2) NOT NULL       -- Saldo atual do cliente
);

CREATE TABLE saques (
    id INT PRIMARY KEY,  -- ID único para cada saque
    cliente_id INT,                     -- ID do cliente que fez o saque
    valor DECIMAL(15, 2) NOT NULL,      -- Valor do saque
    data_saque TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Data e hora do saque
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)  -- Relaciona o saque com o cliente
);

INSERT INTO clientes (id,nome, saldo) VALUES 
(1,'Pedro H Prado', 7000.00),
(2,'Lenin', 5000.00),
(3,'Maria Bonita', 9000.00);

INSERT INTO saques (id,cliente_id, valor) VALUES 
(1,1, 700.00),  -- Pedro H Prado fez um saque de R$700
(2,1, 250.00),  -- Pedro H Prado fez outro saque de R$250
(3,2, 900.00),  -- Lenin fez um saque de R$900
(4,3, 50.00);  -- Maria Bonita fez um saque de R$50


SELECT COUNT(*) AS total_clientes FROM clientes;

SELECT SUM(saldo) AS saldo_total FROM clientes;

SELECT AVG(valor) AS media_saques FROM saques;
