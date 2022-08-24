/*
  Warnings:

  - You are about to drop the column `img` on the `Products` table. All the data in the column will be lost.
  - Added the required column `url` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Products` DROP COLUMN `img`,
    ADD COLUMN `url` VARCHAR(191) NOT NULL;
