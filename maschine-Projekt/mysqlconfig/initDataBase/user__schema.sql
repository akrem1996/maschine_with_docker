ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
CREATE TABLE user
(
id INTEGER AUTO_INCREMENT,
name TEXT,
password TEXT,
PRIMARY KEY (id)
) COMMENT='on init user table';
insert into user(name,password) values('Akram','Akram') 

