create database prosa_bar;

use prosa_bar;

CREATE TABLE usuarios(
    usuario VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL,
    pass INTEGER NOT NULL
);

INSERT INTO usuarios VALUES('Teste', 'falecomprosa@gmail.com', 'falecomprosa');
select * from usuarios;

drop table usuarios;