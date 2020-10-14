import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm'
import Orphanage from './Orphanage'

@Entity('images')
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToMany(() => Orphanage, orphanage => orphanage.images, {
    cascade: ["insert", "update"]
  })
  orphanage: Orphanage
}