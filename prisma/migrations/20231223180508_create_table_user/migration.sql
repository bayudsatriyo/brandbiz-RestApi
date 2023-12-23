-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `fullname` VARCHAR(100) NOT NULL,
    `password` VARCHAR(50) NOT NULL,
    `alamat` VARCHAR(100) NULL,
    `role` VARCHAR(50) NULL,
    `profileUrl` TEXT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
