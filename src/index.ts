import express = require("express");
const app = express()
import User from "./entities/User";
import Mentor from "./entities/Mentor";
import Student from "./entities/Student";
import Research from "./entities/Research"
import UserController from "./controllers/userController";
import ResearchController from "./controllers/researchController";
import MentorController from "./controllers/mentorController";




import {createConnection} from 'typeorm'
import cors = require('cors')
import bodyParser = require('body-parser')
import StudentController from "./controllers/studentController";
const router = express.Router()


const main = async () => {

    app.use(bodyParser.json())
    app.use(cors({origin: "http://localhost:3000", credentials: true}))

    //Creating database connection
    await createConnection({
        type: 'postgres',
        host: "localhost" as string,
        port: 5432 as any,
        username: 'postgres' as string,
        password: "Sachi@2020" as string,
        database: "postgres" as string,
       // ---
   
    // ---
        synchronize: true,
        entities: [
         User, Research, Mentor, Student
        ],
        logging: true
    })

    router.post("/createresearch", ResearchController.create)

    router.post("/mentors/:name", ResearchController.create)
    router.get("/researchPapers", ResearchController.fetch)
    router.post("/studentSignup", StudentController.create)
    router.post("/mentorSignup", MentorController.create)
    router.post('/user', UserController.create)
    router.post("/login", StudentController.fetch)
    router.get("/verifyStudent", StudentController.verify)
    router.get("/research/:name", ResearchController.findOne)
   

    app.use('/api', router)

    app.listen(3300, () => {
        console.log(`App listening at http://localhost:3300/api`)
    })
}

main()