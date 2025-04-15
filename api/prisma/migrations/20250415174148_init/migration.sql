-- CreateTable
CREATE TABLE `Motorista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(100) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(255) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `pedido_id` INTEGER NOT NULL AUTO_INCREMENT,
    `id` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `valor` DECIMAL(10, 2) NULL,
    `endereco` VARCHAR(100) NOT NULL,
    `numero` VARCHAR(10) NULL,
    `cep` VARCHAR(8) NOT NULL,
    `complemento` VARCHAR(250) NULL,

    PRIMARY KEY (`pedido_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_id_fkey` FOREIGN KEY (`id`) REFERENCES `Motorista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
