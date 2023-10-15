import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @Column()
  email: string;
}
