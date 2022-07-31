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
const typeorm_1 = require("typeorm");
const Student_1 = __importDefault(require("../entities/Student"));
const StudentController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(Student_1.default)
                .values({
                fname: req.body.fname,
                lname: req.body.lname,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                institutionName: req.body.institutionName
            })
                .returning('*')
                .execute();
            return res.send({ data: "succesfully added" });
        }
        catch (err) {
            return res.status(400).send(err);
        }
    }),
    fetch: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield typeorm_1.getConnection()
            .createQueryBuilder()
            .select()
            .from(Student_1.default, 'Student')
            .where("username= :name", { name: req.body.username })
            .execute();
        return res.send(result);
    }),
    verify: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield typeorm_1.getConnection()
            .createQueryBuilder()
            .select()
            .from(Student_1.default, 'Student')
            .where({})
            .execute();
        return res.send(result);
    })
};
exports.default = StudentController;
//# sourceMappingURL=studentController.js.map