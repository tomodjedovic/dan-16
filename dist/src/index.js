"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./app/app"));
(0, dotenv_1.config)();
const app = (0, app_1.default)();
const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
    console.log(`Server is running on port 3000`);
});
