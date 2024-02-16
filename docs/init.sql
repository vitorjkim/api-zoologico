CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL,  
					 raca VARCHAR(15));
					 
CREATE TABLE ave (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL,  
					 envergadura FLOAT);
					 
CREATE TABLE reptil (id SERIAL NOT NULL PRIMARY KEY,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT, 
					 genero VARCHAR(12) NOT NULL, 
					 tipo_de_escamas VARCHAR(50));

INSERT INTO mamifero (nome, idade, genero, raca)
   VALUES
('Simba', 2,'Macho', 'Leão'),
('Timão', 1, 'Macho', 'Suricato'),
('Puma', 10, 'Macho', 'Javali'),
('Nala', 3, 'Fêmea', 'Leoa');

INSERT INTO reptil (nome, idade, genero, tipo_de_escamas)
   VALUES
('Pascal', 4, 'Macho', 'Escamas dérmis'),
('Crush', 50, 'Macho', 'Escudos'),
('Kaa', 8, 'Fêmea', 'Escamas quilíferas');

INSERT INTO ave (nome, idade, genero, envergadura)
   VALUES
('Zazu', 3, 'Fêmea', 20),
('Iago', 5, 'Fêmea', 30),
('Scuttle', 2, 'Macho', 50);

-- ALTER TALBE peptil
-- ALTER COLUMN tipo_de_escamas TYPE VARCHAR(50)

-- SELECT * FROM mamifero;
-- SELECT * FROM ave;
-- SELECT * FROM reptil;