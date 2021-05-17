import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Customer from '../../../customers/typeorm/entities/Customer';

@Entity('contracts')
class Contract {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  code: string;

  @Column()
  viability: number;

  @Column()
  status: number;

  @CreateDateColumn()
  start_date: Date;

  @CreateDateColumn()
  expected_finished_date: Date;

  @CreateDateColumn()
  finished_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Contract;
