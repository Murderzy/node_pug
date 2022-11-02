import express from "express"; //подключили пакет с фреймворком
import path from "path";
import bodyParser from "body-parser";
import router from "./routers/routers.js";
import pug from "pug";

const __dirname = path.resolve();
const PORT = process.env.PORT ?? 3000; //определили port
const app = express();

app.use(router);
app.set("view engine", "pug");

app.listen(PORT,()=>{
    console.log("Server on");
})