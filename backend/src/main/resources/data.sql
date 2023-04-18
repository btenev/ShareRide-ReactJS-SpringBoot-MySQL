INSERT INTO addresses (id, city, country, postal_code, street)
VALUES (1, 'Sofia', 'BG', '1000', 'Magic Street'),
       (2, 'Sofia', 'BG', '1000', 'Utopia Street'),
       (3, 'Plovdiv', 'BG', '4000', 'Some Street'),
       (4, 'Varna', 'BG', '9000', 'No Street');


INSERT INTO users (id, birth_date, communication, email, first_name, gender, language, last_name, music , password, pet, phone_number, smoking, address_id)
VALUES (1, '1983-05-10', 'HIGH', 'boyan@abv.bg' , 'Boyan', 'MALE', 'BULGARIAN', 'Tenev', 'NO' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'NO', '+359111111111', 'NONSMOKER', 1),
       (2, '1976-03-03', 'LOW', 'georgi@abv.bg' , 'Georgi', 'MALE', 'BULGARIAN', 'Georgiev', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'YES', '+359222222', 'SMOKER', 2),
       (3, '1983-05-10', 'MEDIUM', 'petar@abv.bg' , 'Petar', 'MALE', 'BULGARIAN', 'Petrov', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'NO', '+3593333333', 'SMOKER', 3),
       (4, '1980-04-08', 'HIGH', 'monika@abv.bg' , 'Monika', 'FEMALE', 'BULGARIAN', 'Nikolova', 'NO' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'YES', '+359444444', 'SMOKER', 1),
       (5, '1979-01-10', 'LOW', 'borko@abv.bg' , 'Borko', 'MALE', 'BULGARIAN', 'Kostadinov', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'YES', '+359555555', 'NONSMOKER', 2),
       (6, '1969-05-10', 'MEDIUM', 'elena@abv.bg' , 'Elena', 'FEMALE', 'BULGARIAN', 'Mihailova', 'NO' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'NO', '+35966666', 'NONSMOKER', 3),
       (7, '2000-11-02', 'MEDIUM', 'eleonora@abv.bg' , 'Eleonora', 'FEMALE', 'BULGARIAN', 'Pencheva', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'YES', '+359777777', 'SMOKER', 1),
       (8, '2002-08-01', 'HIGH', 'chocho@abv.bg' , 'Chocho', 'MALE', 'BULGARIAN', 'Petrov', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'YES', '+359888888', 'NONSMOKER', 2),
       (9, '1988-09-02', 'MEDIUM', 'tencho@abv.bg' , 'Tencho', 'MALE', 'BULGARIAN', 'Tenchev', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'NO', '+3599999999', 'SMOKER', 3),
       (10, '1965-09-02', 'MEDIUM', 'admin@abv.bg' , 'Admin', 'MALE', 'BULGARIAN', 'Adminov', 'YES' , '$2a$10$hod.RS7tLpA69xw7wpnwIuuLJ93TooqGWRqH8fw5UkgzD9QxBBUfy', 'NO', '+350000000', 'SMOKER', 3);

INSERT INTO roles (id, user_role)
VALUES (1, 'ADMIN'),
       (2, 'USER');

INSERT INTO users_roles (user_entity_id, roles_id)
VALUES (1,2),
       (2,2),
       (3,2),
       (4,2),
       (5,2),
       (6,2),
       (7,2),
       (8,2),
       (9,2),
       (10,1);

INSERT INTO cars (id, brand, color, license_plate, model)
VALUES (1, 'VW', 'blue', 'CA87956C', 'Polo'),
       (2, 'VW', 'red', 'CA76451C', 'Tuareg'),
       (3, 'Toyota', 'grey', 'PB893647C', 'Yaris');


INSERT INTO rides (id, active, archived, arrival, baggage_quantity, departure, departure_date, departure_time, number_of_seats, price, trip_information, car_id, driver_id)
VALUES (1, 1, 0, 'Plovdiv, Bulgaria', 'SMALL', 'Sofia, Bulgaria', '2022-08-20', '17:30:00', 'One', 15, 'Sofia Plovdiv trip', 3, 1),
       (2, 1, 0, 'Varna, Bulgaria', 'LARGE', 'Sofia, Bulgaria', '2022-08-23', '10:30:00', 'Three', 30, 'Sofia Varna trip', 2, 1),
       (3, 1, 0, 'Haskovo, Bulgaria', 'MEDIUM', 'Sofia, Bulgaria', '2022-08-25', '14:30:00', 'Two', 20, 'Sofia Haskovo trip', 1, 1);

INSERT INTO rides_status(id,approve_ride, join_ride, passenger_id)
VALUES (1,0, 1, 2),
       (2,0, 1, 3),
       (3,0, 1, 4),
       (4,0, 1, 5),
       (5,0, 0, 6);

INSERT INTO rides_requests(ride_entity_id, requests_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (2, 4);



