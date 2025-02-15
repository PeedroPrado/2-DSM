--criando a tabelas--
drop table if exists focos_calor;
CREATE TABLE focos_calor (
  idfocos_calor INTEGER NOT NULL,
  estado VARCHAR(45) NULL,
  bioma  VARCHAR(45) NULL,
  data_ocorrencia DATE NULL,
  PRIMARY KEY(idfocos_calor)
);

select *from  focos_calor;
--inserindo os dados--
insert into focos_calor(idfocos_calor,estado,bioma,data_ocorrencia) values
(1,'Amazonas','Amazônia','2025-02-01'),
(2,'MatoGrosso','Cerrado','2025-02-03'),
(3,'Pará','Amazônia','2025-02-05');

 --4 consulta dos dados inseridos--
select *from  focos_calor;



-----------------------------------------

--criando a tabelas--
drop table if exists agencia,cliente,cliente_has_conta,conta;
CREATE TABLE agencia (
  cidade_agencia VARCHAR(255) NOT NULL,
  conta_nome_agencia VARCHAR(255) NOT NULL,
  deposito FLOAT NULL,
  PRIMARY KEY(cidade_agencia, conta_nome_agencia)
);

CREATE TABLE cliente (
  idcliente INTEGER NOT NULL,
  cidade_cliente VARCHAR(255) NULL,
  endereco_cliente VARCHAR(255) NULL,
  PRIMARY KEY(idcliente)
);

CREATE TABLE cliente_has_conta (
  cliente_idcliente INTEGER NOT NULL,
  conta_nome_agencia VARCHAR(255) NOT NULL,
  PRIMARY KEY(cliente_idcliente, conta_nome_agencia)
);

CREATE TABLE conta (
  nome_agencia VARCHAR(255) NOT NULL,
  saldo FLOAT NULL,
  PRIMARY KEY(nome_agencia)
);

CREATE TABLE emprestimo (
  nome_agencia VARCHAR NOT NULL,
  cliente_idcliente INTEGER NOT NULL,
  valor FLOAT NULL,
  PRIMARY KEY(nome_agencia)
);


select * from agencia




