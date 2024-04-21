import { TOKEN_STATUS } from '@config/constants/common.constants'
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
    token_id: number

  @Column()
    user_id: number

  @Column()
  @Index()
    token: string

  @Column()
    name: string

  @Column({
    type: 'enum',
    enum: TOKEN_STATUS
  })
    status: string

  @CreateDateColumn({ type: 'timestamp' })
  @Index()
  readonly created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updated_at?: Date
}
