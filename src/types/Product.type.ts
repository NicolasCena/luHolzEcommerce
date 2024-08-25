export type Product = {
  name: string;
  description: string;
  isNew: boolean;
  price: number;
  images: string[];
};

export type ProductFirebase = {
  name: string;
  description: string;
  isNew: boolean;
  price: number;
  images: string[];
  id: string;
};
