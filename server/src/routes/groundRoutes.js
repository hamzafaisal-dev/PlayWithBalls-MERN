import express from 'express'
const groundRouter = express.Router();
import { addGround, viewGrounds, viewGround, getGround, updateGround, deleteGround, deleteGrounds, getAllGrounds } from "../controllers/ground_controllers.js"
import { verifyAccessToken } from '../helpers/authHelpers.js';

// CREATE new ground in a particular area
groundRouter.post('/cities/:cityID/grounds', addGround);

// GET indiv ground find by incharge ID
groundRouter.get('/manager/ground', verifyAccessToken, getGround);

// GET all grounds
groundRouter.get('/grounds', getAllGrounds);

// GET all grounds in a particular area
// groundRouter.get('/cities/:cityID/areas/:areaID/grounds', viewGrounds);

// GET particular ground in a particular area. Search by name
groundRouter.get('/cities/:cityID/all-grounds/:groundID', verifyAccessToken, viewGround);

// get all grounds / filter grounds
groundRouter.post('/cities/:cityID/all-grounds', verifyAccessToken, viewGrounds);

// UPDATE a particular ground
groundRouter.put('/cities/:cityID/all-grounds/:groundID', updateGround);

// DELETE a particular ground
groundRouter.delete('/cities/:cityID/grounds/:groundID', deleteGround);

groundRouter.delete('/grounds', deleteGrounds);

export { groundRouter }