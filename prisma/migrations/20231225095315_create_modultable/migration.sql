-- CreateTable
CREATE TABLE `Modul` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(100) NOT NULL,
    `learning_id` INTEGER NOT NULL,

    UNIQUE INDEX `Modul_judul_key`(`judul`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Userhasmodul` (
    `useremail` VARCHAR(191) NOT NULL,
    `modulId` INTEGER NOT NULL,

    PRIMARY KEY (`useremail`, `modulId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Modul` ADD CONSTRAINT `Modul_learning_id_fkey` FOREIGN KEY (`learning_id`) REFERENCES `Learningpath`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Userhasmodul` ADD CONSTRAINT `Userhasmodul_useremail_fkey` FOREIGN KEY (`useremail`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Userhasmodul` ADD CONSTRAINT `Userhasmodul_modulId_fkey` FOREIGN KEY (`modulId`) REFERENCES `Modul`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
