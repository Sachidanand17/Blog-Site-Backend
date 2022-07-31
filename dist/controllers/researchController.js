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
const Research_1 = __importDefault(require("../entities/Research"));
const ResearchController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(Research_1.default)
                .values({
                title: req.body.title,
                name: req.body.name,
                research: req.body.research
            })
                .returning('*')
                .execute();
            return res.send({ data: "succesfully added" });
        }
        catch (err) {
            return res.status(400).send(err);
        }
    }),
    findOne: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield typeorm_1.getConnection()
            .createQueryBuilder()
            .select("research")
            .from(Research_1.default, 'research')
            .where({ name: req.params.name })
            .execute();
        return res.send(result);
    }),
    fetch: (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield typeorm_1.getConnection()
            .createQueryBuilder()
            .select()
            .from(Research_1.default, 'research')
            .where({})
            .execute();
        return res.send(result);
    })
};
exports.default = ResearchController;
//# sourceMappingURL=researchController.js.map