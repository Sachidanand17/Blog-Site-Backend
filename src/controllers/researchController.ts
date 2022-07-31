
import {getConnection} from "typeorm";
import Research from "../entities/Research";


const ResearchController = {
    create: async (req: any, res: any) => {



        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Research)
                .values({
                    title: req.body.title,
                    name: req.body.name,
                    research: req.body.research
                })
                .returning('*')
                .execute()
            return res.send({data: "succesfully added"})
        } catch (err) {
            return res.status(400).send(err)
        }
    },

    findOne: async (req: any, res: any) => {
       
        const result =
            await getConnection()
                .createQueryBuilder()
                .select("research")
                .from(Research,'research')
                .where({name: req.params.name})
                .execute()
        return res.send(result)
    },

    fetch: async (_req: any, res: any) => {
       
        const result =
            await getConnection()
                .createQueryBuilder()
                .select()
                .from(Research,'research')
                .where({})
                .execute()
        return res.send(result)
    }
   
   
    
}

export default ResearchController