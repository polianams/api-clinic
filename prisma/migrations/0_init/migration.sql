-- CreateTable
CREATE TABLE "Consultations" (
    "id" SERIAL NOT NULL,
    "consultationType" VARCHAR(255),
    "consultationStatus" BOOLEAN NOT NULL DEFAULT true,
    "consultationValue" INTEGER NOT NULL,
    "patientId" INTEGER NOT NULL,

    CONSTRAINT "Consultations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "specialtyId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Patients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "Patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialties" (
    "id" SERIAL NOT NULL,
    "specialty" VARCHAR(255) NOT NULL,
    "value" INTEGER NOT NULL,

    CONSTRAINT "Specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_email_key" ON "Doctors"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Patients_email_key" ON "Patients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Specialties_specialty_key" ON "Specialties"("specialty");

-- AddForeignKey
ALTER TABLE "Consultations" ADD CONSTRAINT "Consultations_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Doctors" ADD CONSTRAINT "Doctors_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

