import * as dotenv from 'dotenv';
dotenv.config();

import {Configuration, OpenAIApi} from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI,
});

const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

const app = express();
//cors is a middleware used in express server
//cross origin resource sharing
app.use(cors());
//middleware that tells app to only handle data in json format
app.use(express.json());

//our first endpoint on the server
//2nd argument is a callback fucntion
app.post('/dream', async (req,res)=>{

    const prompt = req.body.prompt;
    //n is the number of images we want in response
    const aiResponse = await openai.createImage({
        prompt,
        n:1,
        size: '1024x1024'
    });

    const image = aiResponse.data.data[0].url;
    res.send({image});
});

app.listen(8080,()=> console.log('make art on http://localhost:8080/dream'));
//to run server type
//node server.js in command prompt