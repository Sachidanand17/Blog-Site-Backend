
import {getConnection} from "typeorm";
import Student from "../entities/Student";


const StudentController = {
    create: async (req: any, res: any) => {



        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Student)
                .values({
                    fname: req.body.fname,
                    lname: req.body.lname,
                    username: req.body.username,
                    email: req.body.email,  
                    password: req.body.password,
                    institutionName: req.body.institutionName
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
                .from(Student,'Student')
                .where("username= :name", {name: req.body.username})
                .execute()
        return res.send(result)
    },

    verify: async (_req: any, res: any) => {
       
        const result =
            await getConnection()
                .createQueryBuilder()
                .select()
                .from(Student,'Student')
                .where({})
                .execute()
        return res.send(result)
    }
    
}

export default StudentController