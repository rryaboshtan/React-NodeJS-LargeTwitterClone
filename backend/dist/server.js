"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// app.get('/hello', (_, res: express.Response) => {
//     res.send('Hello');
// });
app.get('/users');
app.listen(8888, () => {
    console.log('SERVER RUNNefgjfggffghghjd!');
});
//# sourceMappingURL=server.js.map