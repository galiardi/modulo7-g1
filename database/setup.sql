-- $ docker volume create mysql-data

-- $ docker volume ls

-- $ docker run -d -p 33060:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=secret --mount src=mysql-data,dst=/var/lib/mysql mysql

-- $ docker exec -it mysql-db mysql -p

CREATE DATABASE grupal1;

-- SHOW DATABASES;

USE grupal1;

CREATE TABLE student(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  idNumber VARCHAR(12) NOT NULL UNIQUE,
  course VARCHAR(30) NOT NULL,
  level INT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- SHOW COLUMNS FROM student;


-- $ docker rm -f mysql-db
