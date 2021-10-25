create table customer(
  id serial primary key,
  cpf varchar(15) not null,
  nome varchar(100) not null,
  email varchar(100) not null
);

create table product(
  id serial primary key,
  nome varchar(100) not null,
  valor numeric(6,2) not null,
  quantidade int not null
);

