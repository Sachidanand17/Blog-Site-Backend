import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from 'typeorm'


@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fname: string

    @Column()
    lname: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string
}
    
    