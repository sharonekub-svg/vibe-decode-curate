export interface StyleItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: string;
  aesthetic: string;
  fit: string;
  gender: string;
  affiliateUrl: string;
}

export const styleItems: StyleItem[] = [
  {
    id: "1",
    name: "Oversized Hoodie",
    brand: "ESSENTIALS",
    price: 89,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    category: "tops",
    aesthetic: "Streetwear",
    fit: "Oversized",
    gender: "female",
    affiliateUrl: "https://www.asos.com/search/?q=oversized+hoodie+women"
  }
];
