/*
This is the script to create the backend of the quiz website;
*/
CREATE database alulearn;
USE alulearn;
CREATE TABLE questions(id INT NOT NULL auto_increment,questionnumber INT(2),question VARCHAR(255)NOT NULL, option1 VARCHAR(255), option2 VARCHAR(255), option3 VARCHAR(255), option4 VARCHAR(255),correctoption VARCHAR(255) NOT NULL, primary key(id));
CREATE TABLE feedback(id INT NOT NULL auto_increment,first VARCHAR(20),last VARCHAR(20),email VARCHAR(20),moduleleader VARCHAR(30), feedback VARCHAR(255), primary key(id));
CREATE TABLE users (id INT NOT NULL auto_increment,firstname VARCHAR(45) NOT NULL,lastname VARCHAR(45) NOT NULL,email VARCHAR(45) NOT NULL,category VARCHAR(45) NOT NULL,password VARCHAR(45) NOT NULL,PRIMARY KEY (id));
