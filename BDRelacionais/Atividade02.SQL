Exercicio 02
CREATE TABLE "Aluguel" (
  "cliente_id_cpf" integer,
  "carro_id_placa" integer,
  "created_at" timestamp
);

CREATE TABLE "Carro" (
  "id_placa" integer PRIMARY KEY,
  "Modelo" varchar,
  "aluguel" interger
);

CREATE TABLE "Cliente" (
  "id_cpf" integer PRIMARY KEY,
  "nome" varchar
);

ALTER TABLE "Cliente" ADD FOREIGN KEY ("id_cpf") REFERENCES "Aluguel" ("cliente_id_cpf");

ALTER TABLE "Carro" ADD FOREIGN KEY ("id_placa") REFERENCES "Aluguel" ("carro_id_placa");

________________________________________________________________________________________________________

Table Aluguel {
  cliente_id_cpf integer 
  carro_id_placa integer
  created_at timestamp 
}

Table Carro {
  id_placa integer [primary key]
  Modelo varchar
  aluguel interger
}

Table Cliente {
  id_cpf integer [primary key]
  nome varchar
 
}

Ref: Cliente.id_cpf > Aluguel.cliente_id_cpf // many-to-one

Ref: Carro.id_placa > Aluguel.carro_id_placa
