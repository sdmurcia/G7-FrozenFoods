create database frozenf_db;
create table frozenf_db.productos
(
id INT not null auto_increment,
producto varchar(100) not null,
descripcion varchar(200) not null,
precio decimal(10) not null,
image varchar(100) not null,
descuento decimal not null,
Idcategoria INT not null,
visitados varchar(10) not null,
primary key (id)
);

create table frozenf_db.usuarios
(
id INT not null auto_increment,
name varchar(20) not null,
last_name varchar(20) not null,
password varchar(500) not null,
avatar varchar(100) not null,
primary key (id)
);

create table frozenf_db.categorias
(
id INT not null auto_increment,
categoria varchar(50) not null,
primary key (id)
);