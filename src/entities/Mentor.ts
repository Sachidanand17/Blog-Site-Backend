import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'


@Entity()
export default class Mentor {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fname: string

    @Column()
    lname: string

    @Column({unique: true})
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    experties: string
}
    
    