"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var yenv_1 = __importDefault(require("yenv"));
var env = yenv_1.default('env.yaml', { env: 'development' });
var app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default({ origin: true }));
app.listen(env.PORT, function () {
    console.log("\n\nlistening on : " + env.PORT);
});
