import { Router } from "express";

const productsRouter = Router();

const products = [
  { name: "Producto 1", price: 100, stock: 1 },
  { name: "Producto 2", price: 200, stock: 5 },
  { name: "Producto 3", price: 300, stock: 3 },
  { name: "Producto 4", price: 400, stock: 8 },
  { name: "Producto 5", price: 500, stock: 2 },
];

productsRouter.get("/", (req, res) => {
  res.send(products);
});

export default productsRouter;
