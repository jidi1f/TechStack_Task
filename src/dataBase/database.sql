CREATE DATABASE Bike;

CREATE TABLE Bikes(
    b_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    price integer,
    rentFlag boolean
);