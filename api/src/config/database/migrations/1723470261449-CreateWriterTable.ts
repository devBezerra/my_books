import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateWriterTable1723470261449 implements MigrationInterface {
    private WritersTable = new Table({
        name: 'writers',
        columns: [
          {
            name: 'id',
            type: 'INTEGER',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'VARCHAR',
            length: '50',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'TIMESTAMP',
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'TIMESTAMP',
            default: 'NOW() ON UPDATE CURRENT_TIMESTAMP()',
          },
          {
            name: 'deleted_at',
            type: 'TIMESTAMP',
            isNullable: true,
          },
        ],
      });
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.WritersTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.WritersTable)
    }

}
