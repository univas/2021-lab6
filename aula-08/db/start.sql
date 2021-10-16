create table customer(
  id serial primary key,
  cpf varchar(15) not null,
  nome varchar(100) not null,
  email varchar(100) not null
);

