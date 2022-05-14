-- DropForeignKey
ALTER TABLE `Orders` DROP FOREIGN KEY `Orders_userId_fkey`;

-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
