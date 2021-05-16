import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateContracts1621173701353 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contracts',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'code',
            type: 'varchar',
          },
          {
            name: 'viability',
            type: 'integer',
          },
          {
            name: 'status',
            type: 'integer',
          },
          {
            name: 'start_date',
            type: 'timestamp',
          },
          {
            name: 'expeccted_finished_date',
            type: 'timestamp',
          },
          {
            name: 'finished_date',
            type: 'timestamp',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'customer_id',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCustomer',
            referencedTableName: 'customers',
            referencedColumnNames: ['id'],
            columnNames: ['customer_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contracts');
  }
}
