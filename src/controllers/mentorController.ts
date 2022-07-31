
import {getConnection} from "typeorm";
import Mentor from "../entities/Mentor";


const MentorController = {
    create: async (req: any, res: any) => {



        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Mentor)
                .values({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    username: req.body.username,
                    email: req.body.email,  
                    password: req.body.password,
                    experties: req.body.experties
                })
                .returning('*')
                .execute()
            return res.send({data: "succesfully added"})
        } catch (err) {
            return res.status(400).send(err)
        }
    },


    fetch: async ( req: any, res: any) => {
       
        const result =
            await getConnection()
                .createQueryBuilder()
                .select()
                .from(Mentor,'Mentor')
                .where("username= :name", {name: req.body.username})
                .execute()
        return res.send(result)
    }
    
}

export default MentorController