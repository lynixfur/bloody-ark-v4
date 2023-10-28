-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `steamId` VARCHAR(191) NOT NULL,
    `discordId` VARCHAR(191) NULL,
    `creationDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Info` (
    `id` VARCHAR(191) NOT NULL,
    `strId` VARCHAR(191) NOT NULL,
    `clusterId` VARCHAR(191) NULL,
    `game` ENUM('ArkASA', 'ArkASE', 'Ark2') NOT NULL DEFAULT 'ArkASA',
    `name` VARCHAR(191) NOT NULL,
    `icon` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `content` VARCHAR(191) NOT NULL,
    `visible` BOOLEAN NOT NULL DEFAULT false,
    `lastUpdated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Server` (
    `id` VARCHAR(191) NOT NULL,
    `clusterId` VARCHAR(191) NULL,
    `name` VARCHAR(191) NOT NULL,
    `map` VARCHAR(191) NULL,
    `cardBackground` VARCHAR(191) NOT NULL,
    `cardIcon` VARCHAR(191) NOT NULL,
    `ipAddress` VARCHAR(191) NULL,
    `country` ENUM('EU', 'NA') NOT NULL DEFAULT 'EU',
    `game` ENUM('ArkASA', 'ArkASE', 'Ark2') NOT NULL DEFAULT 'ArkASA',
    `onlinePlayers` INTEGER NULL,
    `visible` BOOLEAN NOT NULL DEFAULT false,
    `joinable` BOOLEAN NOT NULL DEFAULT false,
    `online` BOOLEAN NOT NULL DEFAULT true,
    `lastUpdated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
