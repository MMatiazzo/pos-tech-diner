-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagens" TEXT[],

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);
