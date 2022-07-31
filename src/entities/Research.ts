import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'


@Entity()
export default class Research {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column({unique: true})
    name: string

    @Column()
    research: string
}
    
    