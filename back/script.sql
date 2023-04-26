-- CREATE TABLE users (
-- id INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
-- pseudo VARCHAR(255),
-- password VARCHAR(255),
-- score INT
-- );

-- CREATE TABLE loots (
-- id INT IDENTITY(1, 1) PRIMARY KEY NOT NULL,
-- name VARCHAR(255),
-- value INT
-- )

-- INSERT INTO users (pseudo, password, score) VALUES ('Proco', 'Zoz123', 0);
-- INSERT INTO users (pseudo, password, score) VALUES ('Catosh', 'Zoz321', 0);


-- INSERT INTO loots (name, value) VALUES ('Iron', 30);
-- INSERT INTO loots (name, value) VALUES ('Bronze', 50);
-- INSERT INTO loots (name, value) VALUES ('Wool', 70);
-- INSERT INTO loots (name, value) VALUES ('Rhodium', 150);
-- INSERT INTO loots (name, value) VALUES ('Gold', 300);
-- INSERT INTO loots (name, value) VALUES ('Adamantium', 700);
-- INSERT INTO loots (name, value) VALUES ('Plutonium', 900);
-- INSERT INTO loots (name, value) VALUES ('Tritum', 1500);

--POSTGRE

CREATE TABLE users (
id SERIAL PRIMARY KEY,
pseudo VARCHAR(255),
password VARCHAR(255),
score INT
);

CREATE TABLE loots (
id SERIAL PRIMARY KEY,
name VARCHAR(255),
value INT
);

INSERT INTO public.users (createdAt, updatedAt, deletedAt, pseudo, password, score) VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 'Proco', 'Zoz123', 0);
INSERT INTO public.users (createdAt, updatedAt, deletedAt, pseudo, password, score) VALUES (CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, null, 'Catosh', 'Zoz321', 0);


INSERT INTO public.loot (name, value) VALUES ('Iron', 30);
INSERT INTO public.loot (name, value) VALUES ('Bronze', 50);
INSERT INTO public.loot (name, value) VALUES ('Wool', 70);
INSERT INTO public.loot (name, value) VALUES ('Rhodium', 150);
INSERT INTO public.loot (name, value) VALUES ('Gold', 300);
INSERT INTO public.loot (name, value) VALUES ('Adamantium', 700);
INSERT INTO public.loot (name, value) VALUES ('Plutonium', 900);
INSERT INTO public.loot (name, value) VALUES ('Tritium', 1500);
