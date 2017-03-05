/*
Created: 23/01/2017
Modified: 05/03/2017
Project: Pets
Model: Postgres 9.0
Company: Pets
Author: Diego Ramos
Version: 0.0.5
Database: PostgreSQL 9.0
*/




-- Create tables section -------------------------------------------------

-- Table user

CREATE TABLE "user"(
 "id" Serial NOT NULL,
 "name" Character varying(80) NOT NULL,
 "email" Character varying(100) NOT NULL,
 "password" Varchar,
 "address" Character varying(90),
 "address_number" Character varying(10),
 "state" Character varying(80),
 "city" Character varying(80),
 "zip_code" Character varying(8),
 "phone" Character varying(12),
 "active" Boolean DEFAULT false NOT NULL,
 "register_at" Timestamp with time zone DEFAULT NOW() NOT NULL,
 "last_update" Timestamp with time zone
)
;

-- Add keys for table user

ALTER TABLE "user" ADD CONSTRAINT "pk_user" PRIMARY KEY ("id")
;

ALTER TABLE "user" ADD CONSTRAINT "email_user" UNIQUE ("email")
;

-- Table advertisement

CREATE TABLE "advertisement"(
 "id" Serial NOT NULL,
 "category_id" Integer NOT NULL,
 "breed_id" Integer,
 "age_classification_id" Integer,
 "user_id" Integer NOT NULL,
 "predominant_color" Character varying(50),
 "age" Integer,
 "is_hatch" Boolean DEFAULT false NOT NULL,
 "is_puppy" Boolean DEFAULT false NOT NULL,
 "state" Character varying(60) NOT NULL,
 "city" Character varying(100) NOT NULL,
 "price" Numeric(15,4),
 "phone" Character varying(15) NOT NULL,
 "have_pedigree" Boolean DEFAULT false NOT NULL,
 "castrated" Boolean DEFAULT false NOT NULL,
 "have_microchip" Boolean DEFAULT false NOT NULL,
 "description" Character varying(500) NOT NULL,
 "register_date" Timestamp with time zone DEFAULT NOW() NOT NULL,
 "approved" Boolean DEFAULT false NOT NULL
)
;
COMMENT ON COLUMN "advertisement"."is_hatch" IS 'Ninhada'
;
COMMENT ON COLUMN "advertisement"."is_puppy" IS 'Filhote'
;

-- Create indexes for table advertisement

CREATE INDEX "idx_category_advertisement" ON "advertisement" ("category_id")
;

CREATE INDEX "idx_breed_advertisement" ON "advertisement" ("breed_id")
;

CREATE INDEX "idx_age_classification_advertisement" ON "advertisement" ("age_classification_id")
;

CREATE INDEX "idx_user_advertisement" ON "advertisement" ("user_id")
;

-- Add keys for table advertisement

ALTER TABLE "advertisement" ADD CONSTRAINT "pk_advertisement" PRIMARY KEY ("id")
;

-- Table advertisement_category

CREATE TABLE "advertisement_category"(
 "id" Integer NOT NULL,
 "name" Character varying(25) NOT NULL
)
;

INSERT INTO advertisement_category(id, name) VALUES(1, 'Adoção');
INSERT INTO advertisement_category(id, name) VALUES(2, 'Venda');

-- Add keys for table advertisement_category

ALTER TABLE "advertisement_category" ADD CONSTRAINT "pk_advertisement_category" PRIMARY KEY ("id")
;

ALTER TABLE "advertisement_category" ADD CONSTRAINT "advertisement_category_name" UNIQUE ("name")
;

-- Table breed

CREATE TABLE "breed"(
 "id" Serial NOT NULL,
 "name" Character varying(100) NOT NULL
)
;

-- DEFAULT
INSERT INTO breed(name) VALUES('Outros');

-- A
INSERT INTO breed(name) VALUES('Affenpinscher');
INSERT INTO breed(name) VALUES('Afghan Hound');
INSERT INTO breed(name) VALUES('Airedale Terrier');
INSERT INTO breed(name) VALUES('Akbash Dog');
INSERT INTO breed(name) VALUES('Akita Americano');
INSERT INTO breed(name) VALUES('Akita Inu');
INSERT INTO breed(name) VALUES('American Pitbull Terrier');
INSERT INTO breed(name) VALUES('Australian Cattle');
INSERT INTO breed(name) VALUES('Australian Shepherd');

-- B
INSERT INTO breed(name) VALUES('Barbet');
INSERT INTO breed(name) VALUES('Basenji');
INSERT INTO breed(name) VALUES('Basset Fulvo');
INSERT INTO breed(name) VALUES('Basset Griffon');
INSERT INTO breed(name) VALUES('Basset Hound');
INSERT INTO breed(name) VALUES('Beagle');
INSERT INTO breed(name) VALUES('Bearded Collie');
INSERT INTO breed(name) VALUES('Bernese Mountain Dog');
INSERT INTO breed(name) VALUES('Bichon Frisé');
INSERT INTO breed(name) VALUES('Bichon Havanês');
INSERT INTO breed(name) VALUES('Bloodhound');
INSERT INTO breed(name) VALUES('Border Collie');
INSERT INTO breed(name) VALUES('Borzoi');
INSERT INTO breed(name) VALUES('Bouvier de Flandres');
INSERT INTO breed(name) VALUES('Boston Terrier');
INSERT INTO breed(name) VALUES('Braco Alemão');

-- C
INSERT INTO breed(name) VALUES('Cairn Terrier');
INSERT INTO breed(name) VALUES('Cane Corso Italiano');
INSERT INTO breed(name) VALUES('Cão da Serra da Estrela');
INSERT INTO breed(name) VALUES('Cão DÁgua Português');
INSERT INTO breed(name) VALUES('Cão Fila de São Miguel');
INSERT INTO breed(name) VALUES('Cavalier King Charles');
INSERT INTO breed(name) VALUES('Chihuahua');
INSERT INTO breed(name) VALUES('Chow Chow');
INSERT INTO breed(name) VALUES('Cimarrón Uruguayo');
INSERT INTO breed(name) VALUES('Clumber Spaniel');
INSERT INTO breed(name) VALUES('Cocker Americano');
INSERT INTO breed(name) VALUES('Cocker Inglês');
INSERT INTO breed(name) VALUES('Collie');
INSERT INTO breed(name) VALUES('Coton de Tuléar');
INSERT INTO breed(name) VALUES('Cristado Chinês');
INSERT INTO breed(name) VALUES('Cuvac');

-- D
INSERT INTO breed(name) VALUES('Dachshund');
INSERT INTO breed(name) VALUES('Dálmata');
INSERT INTO breed(name) VALUES('Dobermann');
INSERT INTO breed(name) VALUES('Dogue Alemão');
INSERT INTO breed(name) VALUES('Dogue de Bordeaux');
INSERT INTO breed(name) VALUES('Dogo Argentino');

-- E

-- F 
INSERT INTO breed(name) VALUES('Fila Brasileiro');
INSERT INTO breed(name) VALUES('Flat Coated Retriever');
INSERT INTO breed(name) VALUES('Foxhound Inglês');
INSERT INTO breed(name) VALUES('Fox Terrier Pelo Duro');
INSERT INTO breed(name) VALUES('Fox Terrier Pelo Liso');

-- G
INSERT INTO breed(name) VALUES('Greyhound');
INSERT INTO breed(name) VALUES('Griffon de Bruxelas');
INSERT INTO breed(name) VALUES('Golden Retriever');

-- H
INSERT INTO breed(name) VALUES('Husky Siberiano');


-- I
INSERT INTO breed(name) VALUES('Irish Setter');
INSERT INTO breed(name) VALUES('Irish Wolfhound');

-- J
INSERT INTO breed(name) VALUES('Jack Russel Terrier');

-- K
INSERT INTO breed(name) VALUES('Keeshond');
INSERT INTO breed(name) VALUES('Kerry Blue Terrier');
INSERT INTO breed(name) VALUES('Komondor');
INSERT INTO breed(name) VALUES('Kurzhaar');
INSERT INTO breed(name) VALUES('Kuvasz');

-- L
INSERT INTO breed(name) VALUES('Labrador');
INSERT INTO breed(name) VALUES('Lhasa Apso');
INSERT INTO breed(name) VALUES('Lulu da Pomerânia');

-- M
INSERT INTO breed(name) VALUES('Malamute do Alaska');
INSERT INTO breed(name) VALUES('Maltês');
INSERT INTO breed(name) VALUES('Maremmano');
INSERT INTO breed(name) VALUES('Mastiff Inglês');
INSERT INTO breed(name) VALUES('Mastim Espanhol');
INSERT INTO breed(name) VALUES('Mastim Tibetano');
INSERT INTO breed(name) VALUES('Mastino Napoletano');

-- N
INSERT INTO breed(name) VALUES('Norfolk Terrier');
INSERT INTO breed(name) VALUES('Nova Scotia D. T. R.');

-- O
INSERT INTO breed(name) VALUES('Old English Sheepdog');
INSERT INTO breed(name) VALUES('Otterhound');

-- P
INSERT INTO breed(name) VALUES('Pastor Alemão');
INSERT INTO breed(name) VALUES('Pastor de Beauce');
INSERT INTO breed(name) VALUES('Pastor Belga');
INSERT INTO breed(name) VALUES('Pastor Belga Groenendael');
INSERT INTO breed(name) VALUES('Pastor Belga Laekenois');
INSERT INTO breed(name) VALUES('Pastor Belga Malinois');
INSERT INTO breed(name) VALUES('Pastor Belga Tervuren');
INSERT INTO breed(name) VALUES('Pastor Bergamasco');
INSERT INTO breed(name) VALUES('Pastor Branco Suíço');
INSERT INTO breed(name) VALUES('Pastor de Cáucaso');
INSERT INTO breed(name) VALUES('Pastor Maremmano');
INSERT INTO breed(name) VALUES('Pastor de Shetland');
INSERT INTO breed(name) VALUES('Pastor de Tatra');
INSERT INTO breed(name) VALUES('Pastor dos Pirineus');
INSERT INTO breed(name) VALUES('Pequinês');
INSERT INTO breed(name) VALUES('Perdigueiro Português');
INSERT INTO breed(name) VALUES('Pinscher');
INSERT INTO breed(name) VALUES('Podengo Português');
INSERT INTO breed(name) VALUES('Pointer Inglês');
INSERT INTO breed(name) VALUES('Poodle');
INSERT INTO breed(name) VALUES('Pug');
INSERT INTO breed(name) VALUES('Puli');
INSERT INTO breed(name) VALUES('Pumi');

-- Q

-- R
INSERT INTO breed(name) VALUES('Rhodesian Ridgeback');
INSERT INTO breed(name) VALUES('Rottweiler');

--  S
INSERT INTO breed(name) VALUES('Saluki');
INSERT INTO breed(name) VALUES('Samoieda');
INSERT INTO breed(name) VALUES('São Bernardo');
INSERT INTO breed(name) VALUES('Schipperke');
INSERT INTO breed(name) VALUES('Schnauzer Gigante');
INSERT INTO breed(name) VALUES('Schnauzer Miniatura');
INSERT INTO breed(name) VALUES('Schnauzer Standard');
INSERT INTO breed(name) VALUES('cottish Terrier');
INSERT INTO breed(name) VALUES('Setter Gordon');
INSERT INTO breed(name) VALUES('Setter Inglês');
INSERT INTO breed(name) VALUES('Setter Irlandês');
INSERT INTO breed(name) VALUES('Shar Pei');
INSERT INTO breed(name) VALUES('Shih Tzu');
INSERT INTO breed(name) VALUES('Spaniel Bretão');
INSERT INTO breed(name) VALUES('Spaniel Francês');
INSERT INTO breed(name) VALUES('Spitz Alemão');
INSERT INTO breed(name) VALUES('Spitz Japonês');
INSERT INTO breed(name) VALUES('Springer Spaniel Inglês');
INSERT INTO breed(name) VALUES('Staff Bull Terrier');

-- T
INSERT INTO breed(name) VALUES('Teckel (Dachshund)');
INSERT INTO breed(name) VALUES('Terra Nova');
INSERT INTO breed(name) VALUES('Terrier Brasileiro');
INSERT INTO breed(name) VALUES('Terrier Tibetano');
INSERT INTO breed(name) VALUES('Tosa');

-- U


-- V
INSERT INTO breed(name) VALUES('Vizsla');

-- W
INSERT INTO breed(name) VALUES('Weimaraner');
INSERT INTO breed(name) VALUES('Welsh Corgi Cardigan');
INSERT INTO breed(name) VALUES('Welsh Corgi Pembroke');
INSERT INTO breed(name) VALUES('West Highland W. Terrier');
INSERT INTO breed(name) VALUES('Whippet');
INSERT INTO breed(name) VALUES('Wolfhound Irlandês');

-- X

-- Y
INSERT INTO breed(name) VALUES('Yorkshire Terrier');

-- Z

-- Add keys for table breed

ALTER TABLE "breed" ADD CONSTRAINT "pk_breed" PRIMARY KEY ("id")
;

ALTER TABLE "breed" ADD CONSTRAINT "name_breed" UNIQUE ("name")
;

-- Table age_classification

CREATE TABLE "age_classification"(
 "id" Integer NOT NULL,
 "name" Character varying(20) NOT NULL
)
;

INSERT INTO age_classification(id, name) VALUES(1, 'Filhote');
INSERT INTO age_classification(id, name) VALUES(2, 'Adulto');
INSERT INTO age_classification(id, name) VALUES(3, 'Idoso');

-- Add keys for table age_classification

ALTER TABLE "age_classification" ADD CONSTRAINT "pk_age_classification" PRIMARY KEY ("id")
;

ALTER TABLE "age_classification" ADD CONSTRAINT "age_classification_name" UNIQUE ("name")
;

-- Table advertisement_photo

CREATE TABLE "advertisement_photo"(
 "id" Serial NOT NULL,
 "advertisement_id" Integer NOT NULL,
 "photo" Varchar NOT NULL,
 "register_date" Timestamp with time zone NOT NULL
)
;

-- Create indexes for table advertisement_photo

CREATE INDEX "idx_adverti_photo" ON "advertisement_photo" ("advertisement_id")
;

-- Add keys for table advertisement_photo

ALTER TABLE "advertisement_photo" ADD CONSTRAINT "pk_advert_photo" PRIMARY KEY ("id")
;

-- Create relationships section ------------------------------------------------- 

ALTER TABLE "advertisement" ADD CONSTRAINT "pk_advertisement_category" FOREIGN KEY ("category_id") REFERENCES "advertisement_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "advertisement" ADD CONSTRAINT "fk_advertisement_breed" FOREIGN KEY ("breed_id") REFERENCES "breed" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "advertisement" ADD CONSTRAINT "fk_age_classif_advertis" FOREIGN KEY ("age_classification_id") REFERENCES "age_classification" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "advertisement_photo" ADD CONSTRAINT "fk_adverti_photo" FOREIGN KEY ("advertisement_id") REFERENCES "advertisement" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
;

ALTER TABLE "advertisement" ADD CONSTRAINT "fk_user_advertisement" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
;







