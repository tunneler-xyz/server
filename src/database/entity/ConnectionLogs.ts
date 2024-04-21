import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class ConnectionLogs extends BaseEntity {
  @PrimaryColumn()
    connection_id: number

  @Column()
    port: number

  @Column()
    requestCount: number

  @CreateDateColumn({ type: 'timestamp' })
  @Index()
  readonly created_at?: Date

  @UpdateDateColumn({ type: 'timestamp' })
  readonly updated_at?: Date
}
