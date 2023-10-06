interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface ProductPayload {
  category: string;
  description: string;
  title: string;
}
