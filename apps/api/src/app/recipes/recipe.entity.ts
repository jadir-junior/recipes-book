import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Recipe extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  title: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  ingredients: string;

  @Column({ type: 'varchar', length: 200 })
  tags: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  imageUrl: string;

  @Column({ nullable: false, type: 'int' })
  cookingTime: number;

  @Column({ nullable: false, type: 'int' })
  prepTime: number;

  @Column({ type: 'varchar', length: 200 })
  steps: string;

  @Column({ nullable: false, type: 'int' })
  rating: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
