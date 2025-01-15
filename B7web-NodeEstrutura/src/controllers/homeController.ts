import { Request, Response } from "express";
import { Product } from "../models/Product";

export const home = (req: Request, res: Response) => {
  let age: number = 90;
  let showOld: boolean = false;

  if (age > 50) {
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getPriceAfter(100);

  res.render("pages/home", {
    name: "Pedro",
    lastName: "Lacerda",
    showOld,
    products: list,
    expensives: expensiveList,
    frasesDODia: [],
  });
};
