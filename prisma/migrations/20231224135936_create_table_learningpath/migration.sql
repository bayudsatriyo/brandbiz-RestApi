-- CreateTable
CREATE TABLE `Learningpath` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `Learningpath_judul_key`(`judul`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userhaslearning` (
    `useremail` VARCHAR(191) NOT NULL,
    `learningId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`useremail`, `learningId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `userhaslearning` ADD CONSTRAINT `userhaslearning_useremail_fkey` FOREIGN KEY (`useremail`) REFERENCES `users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `userhaslearning` ADD CONSTRAINT `userhaslearning_learningId_fkey` FOREIGN KEY (`learningId`) REFERENCES `Learningpath`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
