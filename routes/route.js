import express from 'express'
import { getDataCPU, insertDataCPU } from '../controller/cpuController.js';


const routes = express.Router();

routes.get("/data", getDataCPU);
routes.post("/data", insertDataCPU);


export default routes;