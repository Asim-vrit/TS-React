export type HeaderProps = {
  id: number;
  name: string;
  studentDetails: { name: string; roll: number }[];
  state: Product[];
};

export type Product = {
  category: string;
  description: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};
