CREATE TABLE company (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	country VARCHAR(100)
);

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    company_id INT REFERENCES company NOT NULL,
    model VARCHAR(120) NOT NULL,
    year INT NOT NULL,
    nickname VARCHAR(140)
);

INSERT INTO company ( name, country )
VALUES ('Ford', 'USA'),
('Aston Martin', 'UK'),
('Toyota', 'Japan'),
('VolksWagen', 'Germany');


INSERT INTO company ( name, country )
VALUES ('Ferarri', 'Italy');

INSERT INTO cars (company_id, model, year, nickname)
VALUES (1, 'Pinto', 2017, 'The Jackalnator'),
(3, 'Yaris', 2014, 'The Natasha Yaris'),
(4, 'Aveo', 1999, 'The Decade Pigeon');

SELECT *  FROM company JOIN cars ON company.id=cars.company_id;