import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { RepairRecord } from './repair-record.entity';

@Entity('tb_records')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  customerName: string;

  @Column('varchar')
  mobileNumber: string;

  @Column('varchar')
  address: string;

  @Column('varchar')
  repairFrequency: string;

  @Column('varchar')
  ip: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany('Customer', 'RepairRecord')
  RepairRecord: RepairRecord[];
}
