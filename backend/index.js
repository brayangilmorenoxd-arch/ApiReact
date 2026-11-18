import express from "express";
import "dotenv/config";
import cors from "cors";
import rutausuario from "./src/modules/usuario/usuario.routes.js";


const app = express();
const PORT = process.env.PORT || 4100;
// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Ruta principal
app.get("/", (req, res) => {
    res.send("¡Hola, mundo!");
});
// Rutas de usuario
app.use("/api", rutausuario);
// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
