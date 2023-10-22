import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Customer } from './customer.entity';
import { ERepairStatus } from 'src/utils/helpers/global-enum';

@Entity('tb_repair_records')
export class RepairRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  customerId: string;

  @ManyToOne('RepairRecord', 'Customer')
  @JoinColumn({
    name: 'customerId',
    referencedColumnName: 'id',
  })
  Customer: Customer;

  @Column('varchar')
  mobile: string;

  @Column({
    type: 'enum',
    enum: ERepairStatus,
    default: ERepairStatus.pending
  })
  status: string;

  @Column('varchar')
  issue: string;

  @Column('varchar')
  repairCost: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
