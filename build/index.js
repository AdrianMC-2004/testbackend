"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// CORS: permitir llamadas desde frontend en Netlify
app.use(cors({
    origin: ["https://classy-lily-defc05.netlify.app"], // puede ser array
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type"]
}));
// API ejemplo
app.get("/api/hello", (req, res) => {
    res.json({ message: "Hola desde backend 🚀" });
});
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
