/*
  Warnings:

  - Made the column `price` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Products` MODIFY `price` VARCHAR(191) NOT NULL;
