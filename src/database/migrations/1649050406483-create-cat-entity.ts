import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCatEntity1649050406483 implements MigrationInterface {
  name = 'createCatEntity1649050406483';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "cats" (
      "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
      "name" text, "age" smallint, "type" text,
      CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id")
    )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cats"`);
  }

}
