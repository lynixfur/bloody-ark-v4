/*
  Warnings:

  - Made the column `clusterId` on table `info` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clusterId` on table `server` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `info` MODIFY `clusterId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `server` MODIFY `clusterId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Cluster` (
    `id` VARCHAR(191) NOT NULL,
    `strId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `databaseUrl` VARCHAR(191) NULL,
    `databasePort` VARCHAR(191) NULL,
    `databaseUsername` VARCHAR(191) NULL,
    `databasePassword` VARCHAR(191) NULL,
    `databaseDb` VARCHAR(191) NULL,
    `visible` BOOLEAN NOT NULL DEFAULT false,
    `lastUpdated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Info` ADD CONSTRAINT `Info_clusterId_fkey` FOREIGN KEY (`clusterId`) REFERENCES `Cluster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Server` ADD CONSTRAINT `Server_clusterId_fkey` FOREIGN KEY (`clusterId`) REFERENCES `Cluster`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
