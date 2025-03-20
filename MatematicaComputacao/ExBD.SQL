create table usuario(nome varchar(100), cidade varchar(100));

insert into usuario(nome, cidade) values('Pedro', 'Jacareí');
insert into usuario(nome, cidade) values('Felipe', 'São Paulo');
insert into usuario(nome, cidade) values('Gabriel', 'SJC');
insert into usuario (nome, cidade) values('Ana', 'Jacareí');

select * from usuario; 

select * from usuario where nome = 'Pedro'

select * from usuario where nome = 'Ana'

select * from usuario where nome = 'Felipe'

select * from usuario where nome = 'Pedro' union 
		 select * from usuario where nome = 'Ana'
		 
select * from usuario where nome = 'Gabriel' union 
		 select * from usuario where nome = 'Ana'union
		 select * from usuario where nome = 'Felipe'
