CREATE DATABASE clinic;

CREATE TABLE
    "public"."Patients" (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );

CREATE TABLE
    "public"."Doctors" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        "specialtyId" INT NOT NULL,
        status BOOLEAN NOT NULL DEFAULT false,
        FOREIGN KEY ("specialtyId") REFERENCES "public"."Specialties"(id)
    );

CREATE TABLE
    "public"."Doctors" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        "specialtyId" INT NOT NULL,
        status BOOLEAN NOT NULL DEFAULT false,
        FOREIGN KEY ("specialtyId") REFERENCES "public"."Specialties"(id)
    );

CREATE TABLE
    consultations (
        id SERIAL PRIMARY KEY,
        consultationType VARCHAR(255),
        consultationStatus BOOLEAN NOT NULL DEFAULT true,
        "consultationValue" INT NOT NULL,
        "patientId" INT NOT NULL,
        FOREIGN KEY ("consultationValue") REFERENCES "public"."Specialties" (value),
        FOREIGN KEY ("patientId") REFERENCES "public"."Patients" (id)
    );