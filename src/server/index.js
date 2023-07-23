import express from 'express';
import utils from "./helpers/utils.js";
import path from "path";
import dotenv from "dotenv";
import mongoose from "mongoose";

global.path = path;
global.dotenv = dotenv;

utils.loadENV();
const app = express();

app.use(express.static(path.resolve(process.cwd(), 'public')))

app.get('/api', (req, res) => {
    res.send('Express to the rescue!');
});
//express router and /user

//keep at very end
app.listen(process.env.port, () => {
    utils.log(`Server has started and is listening on port ${process.env.port}!`)
});

