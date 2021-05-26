import {MigrationInterface, QueryRunner} from "typeorm";

export class createItemEntity1621922294644 implements MigrationInterface {
    name = 'createItemEntity1621922294644'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "cats" DROP CONSTRAINT "PK_611e3c0a930b4ddc1541422864c"`);
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "cats" ADD CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cats" DROP CONSTRAINT "PK_611e3c0a930b4ddc1541422864c"`);
        await queryRunner.query(`ALTER TABLE "cats" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "cats" ADD CONSTRAINT "PK_611e3c0a930b4ddc1541422864c" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "cats" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
