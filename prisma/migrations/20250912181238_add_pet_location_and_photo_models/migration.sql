-- CreateEnum
CREATE TYPE "SpecieEnum" AS ENUM ('dog', 'cat');

-- CreateEnum
CREATE TYPE "GenderEnum" AS ENUM ('male', 'female');

-- CreateEnum
CREATE TYPE "StatusEnum" AS ENUM ('available', 'pending', 'adopted');

-- CreateTable
CREATE TABLE "pets" (
    "id" VARCHAR(36) NOT NULL,
    "name" TEXT NOT NULL,
    "specie" "SpecieEnum" NOT NULL,
    "breed" TEXT NOT NULL,
    "age_in_months" INTEGER NOT NULL,
    "gender" "GenderEnum" NOT NULL,
    "status" "StatusEnum" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "adopted_at" TIMESTAMP(3),
    "adopted_by" TEXT NOT NULL,
    "location_id" TEXT NOT NULL,

    CONSTRAINT "pets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" VARCHAR(36) NOT NULL,
    "city" TEXT NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "photos" (
    "id" VARCHAR(36) NOT NULL,
    "pet_id" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pets" ADD CONSTRAINT "pets_adopted_by_fkey" FOREIGN KEY ("adopted_by") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_pet_id_fkey" FOREIGN KEY ("pet_id") REFERENCES "pets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
