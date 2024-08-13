/*
  Warnings:

  - The primary key for the `Issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stauts` on the `Issue` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Issue` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` DROP PRIMARY KEY,
    DROP COLUMN `stauts`,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'OPEN',
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Issue_slug_key` ON `Issue`(`slug`);
