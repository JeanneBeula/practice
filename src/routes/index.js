import express from 'express';
import userRoute from './user';


const Router = express.Router();
Router.use('/auth', userRoute);


export default Router;
