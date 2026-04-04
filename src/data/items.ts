import item01 from "@/assets/items/item-01.jpg";
import item02 from "@/assets/items/item-02.jpg";
import item03 from "@/assets/items/item-03.jpg";
import item04 from "@/assets/items/item-04.jpg";
import item05 from "@/assets/items/item-05.jpg";
import item06 from "@/assets/items/item-06.jpg";
import item07 from "@/assets/items/item-07.jpg";
import item08 from "@/assets/items/item-08.jpg";
import item09 from "@/assets/items/item-09.jpg";
import item10 from "@/assets/items/item-10.jpg";

export interface StyleItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: "tops" | "bottoms" | "kicks" | "accessories" | "outerwear";
  aesthetic: string;
  fit: string;
}

export const styleItems: StyleItem[] = [
  { id: "1", name: "Oversized Hoodie", brand: "ESSENTIALS", price: 89, image: item01, category: "tops", aesthetic: "Streetwear", fit: "Oversized" },
  { id: "2", name: "Clean Court Sneaker", brand: "COMMON", price: 149, image: item02, category: "kicks", aesthetic: "Minimalist", fit: "Classic" },
  { id: "3", name: "Wide-Leg Trouser", brand: "COS", price: 79, image: item03, category: "bottoms", aesthetic: "Minimalist", fit: "Wide" },
  { id: "4", name: "Crossbody Bag", brand: "STUDIO", price: 65, image: item04, category: "accessories", aesthetic: "Casual", fit: "One Size" },
  { id: "5", name: "Crewneck Sweat", brand: "UNIQLO", price: 39, image: item05, category: "tops", aesthetic: "Basics", fit: "Oversized" },
  { id: "6", name: "Chelsea Boot", brand: "DR. MARTENS", price: 179, image: item06, category: "kicks", aesthetic: "Classic", fit: "Slim" },
  { id: "7", name: "Slim Dark Denim", brand: "ACNE", price: 199, image: item07, category: "bottoms", aesthetic: "Minimalist", fit: "Slim" },
  { id: "8", name: "Dad Cap", brand: "STÜSSY", price: 35, image: item08, category: "accessories", aesthetic: "Streetwear", fit: "One Size" },
  { id: "9", name: "Oversized Tee", brand: "FEAR OF GOD", price: 45, image: item09, category: "tops", aesthetic: "Minimalist", fit: "Oversized" },
  { id: "10", name: "Bomber Jacket", brand: "ALPHA IND.", price: 159, image: item10, category: "outerwear", aesthetic: "Gorpcore", fit: "Regular" },
];
