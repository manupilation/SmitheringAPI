-- DropForeignKey
ALTER TABLE `Products` DROP FOREIGN KEY `Products_orderId_fkey`;

-- AddForeignKey
ALTER TABLE `Products` ADD CONSTRAINT `Products_orderId_fkey` FOREIGN KEY (`orderId`) REFERENCES `Orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
