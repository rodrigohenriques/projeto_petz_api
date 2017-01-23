/*
Created: 23/01/2017
Modified: 23/01/2017
Project: Pets
Model: Postgres 9.0
Company: Pets
Author: Diego Ramos
Version: 0.0.1
Database: PostgreSQL 9.0
*/




-- Create tables section -------------------------------------------------

-- Table user

CREATE TABLE "user"(
 "id" Serial NOT NULL,
 "name" Character varying(80) NOT NULL,
 "email" Character varying(100) NOT NULL,
 "password" Varchar NOT NULL,
 "address" Character varying(90) NOT NULL,
 "address_number" Character varying(10),
 "state" Character varying(80) NOT NULL,
 "city" Character varying(80) NOT NULL,
 "zip_code" Character varying(8) NOT NULL,
 "phone" Character varying(12) NOT NULL
)
;

-- Add keys for table user

ALTER TABLE "user" ADD CONSTRAINT "pk_user" PRIMARY KEY ("id")
;

ALTER TABLE "user" ADD CONSTRAINT "email_user" UNIQUE ("email")
;

ALTER TABLE "user" ADD CONSTRAINT "phone_user" UNIQUE ("phone")
;







