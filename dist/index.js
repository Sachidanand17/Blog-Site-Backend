"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const User_1 = __importDefault(require("./entities/User"));
const Mentor_1 = __importDefault(require("./entities/Mentor"));
const Student_1 = __importDefault(require("./entities/Student"));
const Research_1 = __importDefault(require("./entities/Research"));
const userController_1 = __importDefault(require("./controllers/userController"));
const researchController_1 = __importDefault(require("./controllers/researchController"));
const mentorController_1 = __importDefault(require("./controllers/mentorController"));
const typeorm_1 = require("typeorm");
const cors = require("cors");
const bodyParser = require("body-parser");
const studentController_1 = __importDefault(require("./controllers/studentController"));
const router = express.Router();
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    app.use(bodyParser.json());
    app.use(cors({ origin: "http://localhost:3000", credentials: true }));
    yield typeorm_1.createConnection({
        type: 'postgres',
        host: "localhost",
        port: 5432,
        username: 'postgres',
        password: "Sachi@2020",
        database: "postgres",
        synchronize: true,
        entities: [
            User_1.default, Research_1.default, Mentor_1.default, Student_1.default
        ],
        logging: true
    });
    router.post("/createresearch", researchController_1.default.create);
    router.post("/mentors/:name", researchController_1.default.create);
    router.get("/researchPapers", researchController_1.default.fetch);
    router.post("/studentSignup", studentController_1.default.create);
    router.post("/mentorSignup", mentorController_1.default.create);
    router.post('/user', userController_1.default.create);
    router.post("/login", studentController_1.default.fetch);
    router.get("/verifyStudent", studentController_1.default.verify);
    router.get("/research/:name", researchController_1.default.findOne);
    app.use('/api', router);
    app.listen(3300, () => {
        console.log(`App listening at http://localhost:3300/api`);
    });
});
main();
//# sourceMappingURL=index.js.map