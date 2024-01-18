/*
  Warnings:

  - You are about to drop the `PedidoItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PedidoItems" DROP CONSTRAINT "PedidoItems_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoItems" DROP CONSTRAINT "PedidoItems_produtoId_fkey";

-- DropTable
DROP TABLE "PedidoItems";

-- CreateTable
CREATE TABLE "pedidosItens" (
    "id" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,

    CONSTRAINT "pedidosItens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pedidosItens" ADD CONSTRAINT "pedidosItens_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedidosItens" ADD CONSTRAINT "pedidosItens_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
