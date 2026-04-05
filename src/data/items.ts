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
  },
  {
    id: "2",
    name: "Ribbed Crop Top",
    brand: "ZARA",
    price: 25,
    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&h=800&fit=crop",
    category: "tops",
    aesthetic: "Minimalist",
    fit: "Slim",
    gender: "female",
    affiliateUrl: "https://www.zara.com/us/en/woman/tops"
  },
  {
    id: "3",
    name: "Floral Summer Dress",
    brand: "SHEIN",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&h=800&fit=crop",
    category: "dresses",
    aesthetic: "Boho",
    fit: "Regular",
    gender: "female",
    affiliateUrl: "https://www.shein.com/Women-Dresses-c-1727.html"
  }
];
