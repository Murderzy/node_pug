import Router from "express";
import path from "path";
import fs from "fs";
import news from "../models/news.js";
import { title } from "process";
const __dirname = path.resolve();
const router = Router();

router.route('/').get((req,res)=>{
    res.render("index.pug",{news});
})

router.route("/sortByOrder").get((req,res)=>{
    news.sort();
    news.reverse();
    res.render("index.pug",{news});
})

router.route("/searchNews").get((req,res)=>{
    let text = req.body.text;
    let t;
    news.forEach(n => {
        if(news[title] == text)
        {
             t = n;
        }
    });

    res.render("index.pug",{t});
})

export default router;