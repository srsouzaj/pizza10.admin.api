import { Router } from "express"
import {v4 as uuidv4} from "uuid"

const categoriesRoutes = Router();

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
});