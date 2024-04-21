import { USER_STATUS } from '@config/constants/common.constants'
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
export class Tokens extends BaseEntity {
  @PrimaryGeneratedColumn()
    user_id: number

  @Column()
    fname: string

  @Column()
    lname: string

  @Column()
  @Index()
    auth_token: string

  @Column({
    type: 'enum',
    enum: USER_STATUS
  })
    status: string

  @CreateDateColumn({ type: 'timestamp' })
  @Index()
  readonly created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updated_at?: Date
}
