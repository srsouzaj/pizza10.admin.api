import express from "express"
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());

const data = [];

app.get("/pizzas", (req, res) => {
    const totalItems = data.length;

    return res.status(201).json({ success: true, totalItems, data });
})

app.post('/pizzas', (req, res) => {
  const { name, ingredients, price } = req.body;

  const pizzaAlreadyExists = data.some(pizza => pizza.name === name)

  if (pizzaAlreadyExists) return res.status(400).json({ success: false, error: 'This Pizza already exists' });

  data.push({
    id: uuidv4(),
    name,
    ingredients,
    price,
    created_at: new Date()
  });

  const totalItems = data.length

  return res.status(201).json({ success: true, totalItems, data });
});


app.listen(3333, () => console.log('Server is running!'));