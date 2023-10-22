import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1697972490325 implements MigrationInterface {
    name = 'InitialMigration1697972490325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tb_records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customerName" character varying NOT NULL, "mobileNumber" character varying NOT NULL, "address" character varying NOT NULL, "repairFrequency" character varying NOT NULL, "ip" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5ba9fb256c5d35b16a39af6a36e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tb_users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_a2c23e0679749c22ffa6c2be910" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."tb_repair_records_status_enum" AS ENUM('pending', 'cancelled', 'completed')`);
        await queryRunner.query(`CREATE TABLE "tb_repair_records" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "customerId" uuid NOT NULL, "mobile" character varying NOT NULL, "status" "public"."tb_repair_records_status_enum" NOT NULL DEFAULT 'pending', "issue" character varying NOT NULL, "repairCost" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_0c7152a319d79b5b4d66605cb38" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tb_repair_records" ADD CONSTRAINT "FK_176cda9fe8cf33233c3c0794b26" FOREIGN KEY ("customerId") REFERENCES "tb_repair_records"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tb_repair_records" DROP CONSTRAINT "FK_176cda9fe8cf33233c3c0794b26"`);
        await queryRunner.query(`DROP TABLE "tb_repair_records"`);
        await queryRunner.query(`DROP TYPE "public"."tb_repair_records_status_enum"`);
        await queryRunner.query(`DROP TABLE "tb_users"`);
        await queryRunner.query(`DROP TABLE "tb_records"`);
    }

}
