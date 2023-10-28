-- AlterTable
ALTER TABLE `cluster` ADD COLUMN `game` ENUM('ArkASA', 'ArkASE', 'Ark2') NOT NULL DEFAULT 'ArkASA';
