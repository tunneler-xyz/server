import { CONNECTION_STATUS } from '@config/constants/common.constants'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Connections extends BaseEntity {
  @PrimaryGeneratedColumn()
    connection_id: number

  @Column()
    user_id: number

  @Column()
  @Index()
    subdomain: string

  @Column({
    type: 'enum',
    enum: CONNECTION_STATUS
  })
    status: string

  @CreateDateColumn({ type: 'timestamp' })
  @Index()
  readonly created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updated_at?: Date
}
