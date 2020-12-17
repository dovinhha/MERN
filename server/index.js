import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import postRoutes from './routes/post.js';

const app = express();
dotenv.config({ path: './config.env'});

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
app.get('/',(req, res) => {
  res.send('Hello World');
});
app.use('/posts',postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECT_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(PORT,() => console.log(`Running in port ${PORT}`))
  })
  .catch((error) => {
    console.log(error);
  })

mongoose.set('useFindAndModify',false);