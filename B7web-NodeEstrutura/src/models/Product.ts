type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { title: "Notebook", price: 2499 },
  { title: "Mouse", price: 100 },
  { title: "Mousepad", price: 20 },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getPriceAfter: (price: number): Product[] => {
    return data.filter((item) => item.price >= price);
  },
};
