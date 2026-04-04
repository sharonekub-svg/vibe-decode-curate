import item01 from "@/assets/item-01.jpg";
import item02 from "@/assets/item-02.jpg";
import item03 from "@/assets/item-03.jpg";
import item04 from "@/assets/item-04.jpg";
import item05 from "@/assets/item-05.jpg";
import item06 from "@/assets/item-06.jpg";
import item07 from "@/assets/item-07.jpg";
import item08 from "@/assets/item-08.jpg";
import item09 from "@/assets/item-09.jpg";
import item10 from "@/assets/item-10.jpg";

const imgs = [item01, item02, item03, item04, item05, item06, item07, item08, item09, item10];
const img = (n: number) => imgs[(n - 1) % 10];

export interface StyleItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: "tops" | "bottoms" | "kicks" | "accessories" | "outerwear" | "dresses";
  aesthetic: string;
  fit: string;
  gender: "male" | "female" | "unisex";
  affiliateUrl: string;
}

export const styleItems: StyleItem[] = [
  // ===== WOMEN'S TOPS =====
  { id: "1",  name: "Oversized Hoodie",     brand: "ESSENTIALS",        price: 89,  image: img(1),  category: "tops",        aesthetic: "Streetwear", fit: "Oversized", gender: "female", affiliateUrl: "https://www.asos.com/search/?q=oversized+hoodie+women" },
  { id: "2",  name: "Ribbed Crop Top",       brand: "ZARA",              price: 25,  image: img(2),  category: "tops",        aesthetic: "Minimalist", fit: "Slim",      gender: "female", affiliateUrl: "https://www.zara.com/us/en/woman/tops" },
  { id: "3",  name: "Satin Slip Top",        brand: "H&M",               price: 29,  image: img(3),  category: "tops",        aesthetic: "Y2K",        fit: "Slim",      gender: "female", affiliateUrl: "https://www2.hm.com/en_us/women/tops/shirts" },
  { id: "4",  name: "Floral Wrap Blouse",    brand: "SHEIN",             price: 18,  image: img(4),  category: "tops",        aesthetic: "Boho",       fit: "Regular",   gender: "female", affiliateUrl: "https://www.shein.com/Women-Blouses-c-1733.html" },
  { id: "5",  name: "Off-Shoulder Knit",     brand: "MANGO",             price: 49,  image: img(5),  category: "tops",        aesthetic: "Romantic",   fit: "Slim",      gender: "female", affiliateUrl: "https://shop.mango.com/us/women/knitwear" },
  { id: "6",  name: "Graphic Baby Tee",      brand: "URBAN OUTFITTERS",  price: 35,  image: img(6),  category: "tops",        aesthetic: "Y2K",        fit: "Slim",      gender: "female", affiliateUrl: "https://www.urbanoutfitters.com/tops" },
  { id: "7",  name: "Linen Button Shirt",    brand: "UNIQLO",            price: 39,  image: img(7),  category: "tops",        aesthetic: "Minimalist", fit: "Oversized", gender: "female", affiliateUrl: "https://www.uniqlo.com/us/en/women/tops/shirts" },
  { id: "8",  name: "Velvet Cami",           brand: "FREE PEOPLE",       price: 68,  image: img(8),  category: "tops",        aesthetic: "Boho",       fit: "Slim",      gender: "female", affiliateUrl: "https://www.freepeople.com/tops" },
  { id: "9",  name: "Halter Neck Top",       brand: "PRETTYLITTLETHING", price: 15,  image: img(9),  category: "tops",        aesthetic: "Going Out",  fit: "Slim",      gender: "female", affiliateUrl: "https://www.prettylittlething.com/clothing/tops" },
  { id: "10", name: "Cropped Blazer",        brand: "ZARA",              price: 79,  image: img(10), category: "tops",        aesthetic: "Classique",  fit: "Regular",   gender: "female", affiliateUrl: "https://www.zara.com/us/en/woman/blazers" },

  // ===== WOMEN'S BOTTOMS =====
  { id: "11", name: "Wide-Leg Trouser",      brand: "COS",               price: 79,  image: img(1),  category: "bottoms",     aesthetic: "Minimalist", fit: "Wide",      gender: "female", affiliateUrl: "https://www.cosstores.com/en_usd/women/trousers" },
  { id: "12", name: "Mini Denim Skirt",      brand: "LEVI'S",            price: 55,  image: img(2),  category: "bottoms",     aesthetic: "Y2K",        fit: "Slim",      gender: "female", affiliateUrl: "https://www.levi.com/US/en_US/women-skirts" },
  { id: "13", name: "Maxi Floral Skirt",     brand: "H&M",               price: 35,  image: img(3),  category: "bottoms",     aesthetic: "Boho",       fit: "Flowy",     gender: "female", affiliateUrl: "https://www2.hm.com/en_us/women/skirts" },
  { id: "14", name: "Cargo Pants",           brand: "URBAN OUTFITTERS",  price: 69,  image: img(4),  category: "bottoms",     aesthetic: "Streetwear", fit: "Wide",      gender: "female", affiliateUrl: "https://www.urbanoutfitters.com/womens-pants" },
  { id: "15", name: "High-Waist Leggings",   brand: "ASOS",              price: 28,  image: img(5),  category: "bottoms",     aesthetic: "Athleisure", fit: "Slim",      gender: "female", affiliateUrl: "https://www.asos.com/women/leggings" },
  { id: "16", name: "Slip Midi Skirt",       brand: "MANGO",             price: 45,  image: img(6),  category: "bottoms",     aesthetic: "Romantic",   fit: "Regular",   gender: "female", affiliateUrl: "https://shop.mango.com/us/women/skirts" },
  { id: "17", name: "Wide-Leg Jeans",        brand: "AGOLDE",            price: 198, image: img(7),  category: "bottoms",     aesthetic: "Classique",  fit: "Wide",      gender: "female", affiliateUrl: "https://www.revolve.com/agolde/brand/?navsrc=brand" },
  { id: "18", name: "Tennis Skirt",          brand: "AMAZON ESSENTIALS", price: 22,  image: img(8),  category: "bottoms",     aesthetic: "Preppy",     fit: "Flared",    gender: "female", affiliateUrl: "https://www.amazon.com/s?k=tennis+skirt&tag=YOUR_AMAZON_TAG" },
  { id: "19", name: "Satin Mini Skirt",      brand: "SHEIN",             price: 16,  image: img(9),  category: "bottoms",     aesthetic: "Going Out",  fit: "Slim",      gender: "female", affiliateUrl: "https://www.shein.com/Women-Skirts-c-1732.html" },
  { id: "20", name: "Barrel Jeans",          brand: "MADEWELL",          price: 128, image: img(10), category: "bottoms",     aesthetic: "Minimalist", fit: "Wide",      gender: "female", affiliateUrl: "https://www.madewell.com/womens-jeans" },

  // ===== WOMEN'S DRESSES =====
  { id: "21", name: "Floral Midi Dress",     brand: "REFORMATION",       price: 198, image: img(1),  category: "dresses",     aesthetic: "Romantic",   fit: "Regular",   gender: "female", affiliateUrl: "https://www.thereformation.com/collections/dresses" },
  { id: "22", name: "Wrap Dress",            brand: "DVF",               price: 298, image: img(2),  category: "dresses",     aesthetic: "Classique",  fit: "Regular",   gender: "female", affiliateUrl: "https://www.dvf.com/collections/dresses" },
  { id: "23", name: "Slip Dress",            brand: "ASOS",              price: 45,  image: img(3),  category: "dresses",     aesthetic: "Minimalist", fit: "Slim",      gender: "female", affiliateUrl: "https://www.asos.com/women/dresses" },
  { id: "24", name: "Knit Mini Dress",       brand: "ZARA",              price: 59,  image: img(4),  category: "dresses",     aesthetic: "Y2K",        fit: "Slim",      gender: "female", affiliateUrl: "https://www.zara.com/us/en/woman/dresses" },
  { id: "25", name: "Linen Shirt Dress",     brand: "H&M",               price: 49,  image: img(5),  category: "dresses",     aesthetic: "Minimalist", fit: "Regular",   gender: "female", affiliateUrl: "https://www2.hm.com/en_us/women/dresses" },
  { id: "26", name: "Ruched Mini Dress",     brand: "PRETTYLITTLETHING", price: 30,  image: img(6),  category: "dresses",     aesthetic: "Going Out",  fit: "Slim",      gender: "female", affiliateUrl: "https://www.prettylittlething.com/clothing/dresses" },
  { id: "27", name: "Boho Maxi Dress",       brand: "FREE PEOPLE",       price: 128, image: img(7),  category: "dresses",     aesthetic: "Boho",       fit: "Flowy",     gender: "female", affiliateUrl: "https://www.freepeople.com/dresses" },
  { id: "28", name: "Denim Dress",           brand: "LEVI'S",            price: 89,  image: img(8),  category: "dresses",     aesthetic: "Casual",     fit: "Regular",   gender: "female", affiliateUrl: "https://www.levi.com/US/en_US/women-dresses" },
  { id: "29", name: "Sequin Mini Dress",     brand: "REVOLVE",           price: 178, image: img(9),  category: "dresses",     aesthetic: "Going Out",  fit: "Slim",      gender: "female", affiliateUrl: "https://www.revolve.com/dresses" },
  { id: "30", name: "Smocked Sundress",      brand: "AMAZON ESSENTIALS", price: 32,  image: img(10), category: "dresses",     aesthetic: "Boho",       fit: "Regular",   gender: "female", affiliateUrl: "https://www.amazon.com/s?k=smocked+sundress&tag=YOUR_AMAZON_TAG" },

  // ===== WOMEN'S OUTERWEAR =====
  { id: "31", name: "Oversized Blazer",      brand: "ZARA",              price: 99,  image: img(1),  category: "outerwear",   aesthetic: "Classique",  fit: "Oversized", gender: "female", affiliateUrl: "https://www.zara.com/us/en/woman/blazers" },
  { id: "32", name: "Teddy Bear Coat",       brand: "ASOS",              price: 89,  image: img(2),  category: "outerwear",   aesthetic: "Cozy",       fit: "Oversized", gender: "female", affiliateUrl: "https://www.asos.com/women/coats-jackets" },
  { id: "33", name: "Trench Coat",           brand: "MANGO",             price: 149, image: img(3),  category: "outerwear",   aesthetic: "Classique",  fit: "Regular",   gender: "female", affiliateUrl: "https://shop.mango.com/us/women/coats" },
  { id: "34", name: "Puffer Vest",           brand: "AMAZON ESSENTIALS", price: 44,  image: img(4),  category: "outerwear",   aesthetic: "Athleisure", fit: "Regular",   gender: "female", affiliateUrl: "https://www.amazon.com/s?k=women+puffer+vest&tag=YOUR_AMAZON_TAG" },
  { id: "35", name: "Leather Jacket",        brand: "ALLSAINTS",         price: 259, image: img(5),  category: "outerwear",   aesthetic: "Edgy",       fit: "Slim",      gender: "female", affiliateUrl: "https://www.allsaints.com/women/jackets" },

  // ===== WOMEN'S SHOES =====
  { id: "36", name: "Platform Mary Janes",   brand: "STEVE MADDEN",      price: 89,  image: img(6),  category: "kicks",       aesthetic: "Y2K",        fit: "Regular",   gender: "female", affiliateUrl: "https://www.stevemadden.com/collections/womens-mary-janes" },
  { id: "37", name: "White Chunky Sneakers", brand: "NEW BALANCE",       price: 109, image: img(7),  category: "kicks",       aesthetic: "Streetwear", fit: "Regular",   gender: "female", affiliateUrl: "https://www.newbalance.com/women/shoes" },
  { id: "38", name: "Strappy Heels",         brand: "REVOLVE",           price: 98,  image: img(8),  category: "kicks",       aesthetic: "Going Out",  fit: "Regular",   gender: "female", affiliateUrl: "https://www.revolve.com/shoes" },
  { id: "39", name: "Western Boots",         brand: "AMAZON",            price: 65,  image: img(9),  category: "kicks",       aesthetic: "Western",    fit: "Regular",   gender: "female", affiliateUrl: "https://www.amazon.com/s?k=women+western+boots&tag=YOUR_AMAZON_TAG" },
  { id: "40", name: "Ballet Flats",          brand: "MANGO",             price: 59,  image: img(10), category: "kicks",       aesthetic: "Classique",  fit: "Regular",   gender: "female", affiliateUrl: "https://shop.mango.com/us/women/shoes" },

  // ===== WOMEN'S ACCESSORIES =====
  { id: "41", name: "Mini Shoulder Bag",     brand: "ZARA",              price: 49,  image: img(1),  category: "accessories", aesthetic: "Minimalist", fit: "One Size",  gender: "female", affiliateUrl: "https://www.zara.com/us/en/woman/bags" },
  { id: "42", name: "Tote Bag",              brand: "MADEWELL",          price: 148, image: img(2),  category: "accessories", aesthetic: "Classique",  fit: "One Size",  gender: "female", affiliateUrl: "https://www.madewell.com/bags" },
  { id: "43", name: "Gold Hoop Earrings",    brand: "MEJURI",            price: 65,  image: img(3),  category: "accessories", aesthetic: "Minimalist", fit: "One Size",  gender: "female", affiliateUrl: "https://mejuri.com/shop/type/earrings" },
  { id: "44", name: "Scrunchie Pack",        brand: "AMAZON",            price: 12,  image: img(4),  category: "accessories", aesthetic: "Y2K",        fit: "One Size",  gender: "female", affiliateUrl: "https://www.amazon.com/s?k=scrunchie+set&tag=YOUR_AMAZON_TAG" },
  { id: "45", name: "Claw Clip",             brand: "KITSCH",            price: 15,  image: img(5),  category: "accessories", aesthetic: "Boho",       fit: "One Size",  gender: "female", affiliateUrl: "https://mykitsch.com/hair-accessories" },
  { id: "46", name: "Silk Scarf",            brand: "SHEIN",             price: 9,   image: img(6),  category: "accessories", aesthetic: "Vintage",    fit: "One Size",  gender: "female", affiliateUrl: "https://www.shein.com/Women-Scarves-c-1742.html" },
  { id: "47", name: "Bucket Hat",            brand: "ASOS",              price: 22,  image: img(7),  category: "accessories", aesthetic: "Y2K",        fit: "One Size",  gender: "female", affiliateUrl: "https://www.asos.com/women/hats" },
  { id: "48", name: "Belt Bag",              brand: "AMAZON ESSENTIALS", price: 28,  image: img(8),  category: "accessories", aesthetic: "Athleisure", fit: "One Size",  gender: "female", affiliateUrl: "https://www.amazon.com/s?k=belt+bag+women&tag=YOUR_AMAZON_TAG" },
  { id: "49", name: "Layered Necklace",      brand: "MEJURI",            price: 98,  image: img(9),  category: "accessories", aesthetic: "Boho",       fit: "One Size",  gender: "female", affiliateUrl: "https://mejuri.com/shop/type/necklaces" },
  { id: "50", name: "Sunglasses",            brand: "QUAY",              price: 65,  image: img(10), category: "accessories", aesthetic: "Streetwear", fit: "One Size",  gender: "female", affiliateUrl: "https://www.quayaustralia.com/collections/womens" },

  // ===== MEN'S TOPS =====
  { id: "51", name: "Oversized Hoodie",      brand: "ESSENTIALS",        price: 89,  image: img(1),  category: "tops",        aesthetic: "Streetwear", fit: "Oversized", gender: "male",   affiliateUrl: "https://www.asos.com/men/hoodies/" },
  { id: "52", name: "Polo Shirt",            brand: "RALPH LAUREN",      price: 89,  image: img(2),  category: "tops",        aesthetic: "Preppy",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.ralphlauren.com/men-tops-polo-shirts" },
  { id: "53", name: "Graphic Tee",           brand: "STÜSSY",            price: 45,  image: img(3),  category: "tops",        aesthetic: "Streetwear", fit: "Oversized", gender: "male",   affiliateUrl: "https://www.stussy.com/collections/mens-tees" },
  { id: "54", name: "Oxford Button-Down",    brand: "UNIQLO",            price: 39,  image: img(4),  category: "tops",        aesthetic: "Minimalist", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.uniqlo.com/us/en/men/shirts" },
  { id: "55", name: "Crewneck Sweatshirt",   brand: "CHAMPION",          price: 55,  image: img(5),  category: "tops",        aesthetic: "Casual",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=champion+crewneck&tag=YOUR_AMAZON_TAG" },
  { id: "56", name: "Linen Short-Sleeve",    brand: "H&M",               price: 25,  image: img(6),  category: "tops",        aesthetic: "Summer",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www2.hm.com/en_us/men/shirts" },
  { id: "57", name: "Quarter-Zip Pullover",  brand: "AMAZON ESSENTIALS", price: 38,  image: img(7),  category: "tops",        aesthetic: "Preppy",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=quarter+zip+men&tag=YOUR_AMAZON_TAG" },
  { id: "58", name: "Henley Shirt",          brand: "MANGO MAN",         price: 35,  image: img(8),  category: "tops",        aesthetic: "Casual",     fit: "Slim",      gender: "male",   affiliateUrl: "https://shop.mango.com/us/men/shirts" },
  { id: "59", name: "Vintage Washed Tee",    brand: "URBAN OUTFITTERS",  price: 34,  image: img(9),  category: "tops",        aesthetic: "Vintage",    fit: "Oversized", gender: "male",   affiliateUrl: "https://www.urbanoutfitters.com/mens-tees" },
  { id: "60", name: "Tech Fleece",           brand: "NIKE",              price: 110, image: img(10), category: "tops",        aesthetic: "Athleisure", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.nike.com/men/tops" },

  // ===== MEN'S BOTTOMS =====
  { id: "61", name: "Slim Dark Denim",       brand: "ACNE",              price: 199, image: img(1),  category: "bottoms",     aesthetic: "Minimalist", fit: "Slim",      gender: "male",   affiliateUrl: "https://www.farfetch.com/shopping/men/acne-studios-jeans" },
  { id: "62", name: "Cargo Shorts",          brand: "DICKIES",           price: 45,  image: img(2),  category: "bottoms",     aesthetic: "Streetwear", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=dickies+cargo+shorts&tag=YOUR_AMAZON_TAG" },
  { id: "63", name: "Chino Pants",           brand: "UNIQLO",            price: 49,  image: img(3),  category: "bottoms",     aesthetic: "Preppy",     fit: "Slim",      gender: "male",   affiliateUrl: "https://www.uniqlo.com/us/en/men/pants" },
  { id: "64", name: "Track Pants",           brand: "ADIDAS",            price: 65,  image: img(4),  category: "bottoms",     aesthetic: "Athleisure", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.adidas.com/us/men-track-pants" },
  { id: "65", name: "Wide Cargo Pants",      brand: "H&M",               price: 49,  image: img(5),  category: "bottoms",     aesthetic: "Streetwear", fit: "Wide",      gender: "male",   affiliateUrl: "https://www2.hm.com/en_us/men/pants" },
  { id: "66", name: "Linen Trousers",        brand: "ZARA",              price: 59,  image: img(6),  category: "bottoms",     aesthetic: "Summer",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.zara.com/us/en/man/trousers" },
  { id: "67", name: "Classic 501 Jeans",     brand: "LEVI'S",            price: 69,  image: img(7),  category: "bottoms",     aesthetic: "Classic",    fit: "Regular",   gender: "male",   affiliateUrl: "https://www.levi.com/US/en_US/men-jeans/c/levi_mens_jeans" },
  { id: "68", name: "Relaxed Fit Jeans",     brand: "ASOS",              price: 55,  image: img(8),  category: "bottoms",     aesthetic: "Casual",     fit: "Relaxed",   gender: "male",   affiliateUrl: "https://www.asos.com/men/jeans" },
  { id: "69", name: "Swim Shorts",           brand: "AMAZON ESSENTIALS", price: 22,  image: img(9),  category: "bottoms",     aesthetic: "Summer",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+swim+shorts&tag=YOUR_AMAZON_TAG" },
  { id: "70", name: "Jogger Pants",          brand: "CHAMPION",          price: 55,  image: img(10), category: "bottoms",     aesthetic: "Athleisure", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=champion+joggers+men&tag=YOUR_AMAZON_TAG" },

  // ===== MEN'S OUTERWEAR =====
  { id: "71", name: "Bomber Jacket",         brand: "ALPHA IND.",        price: 159, image: img(1),  category: "outerwear",   aesthetic: "Gorpcore",   fit: "Regular",   gender: "male",   affiliateUrl: "https://www.alphaindustries.com/men/jackets/bomber-jackets" },
  { id: "72", name: "Puffer Jacket",         brand: "AMAZON ESSENTIALS", price: 75,  image: img(2),  category: "outerwear",   aesthetic: "Streetwear", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+puffer+jacket&tag=YOUR_AMAZON_TAG" },
  { id: "73", name: "Denim Jacket",          brand: "LEVI'S",            price: 89,  image: img(3),  category: "outerwear",   aesthetic: "Classic",    fit: "Regular",   gender: "male",   affiliateUrl: "https://www.levi.com/US/en_US/men-jackets" },
  { id: "74", name: "Windbreaker",           brand: "NIKE",              price: 80,  image: img(4),  category: "outerwear",   aesthetic: "Athleisure", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.nike.com/men/outerwear" },
  { id: "75", name: "Coach Jacket",          brand: "H&M",               price: 59,  image: img(5),  category: "outerwear",   aesthetic: "Streetwear", fit: "Regular",   gender: "male",   affiliateUrl: "https://www2.hm.com/en_us/men/jackets-coats" },
  { id: "76", name: "Fleece Zip Hoodie",     brand: "PATAGONIA",         price: 139, image: img(6),  category: "outerwear",   aesthetic: "Gorpcore",   fit: "Regular",   gender: "male",   affiliateUrl: "https://www.rei.com/b/patagonia/c/mens-fleece" },
  { id: "77", name: "Overshirt",             brand: "ZARA",              price: 79,  image: img(7),  category: "outerwear",   aesthetic: "Casual",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.zara.com/us/en/man/shirts" },
  { id: "78", name: "Field Jacket",          brand: "AMAZON ESSENTIALS", price: 85,  image: img(8),  category: "outerwear",   aesthetic: "Gorpcore",   fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+field+jacket&tag=YOUR_AMAZON_TAG" },

  // ===== MEN'S SHOES =====
  { id: "79", name: "Clean Court Sneaker",   brand: "COMMON PROJECTS",   price: 149, image: img(9),  category: "kicks",       aesthetic: "Minimalist", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.farfetch.com/shopping/men/common-projects" },
  { id: "80", name: "Chelsea Boot",          brand: "DR. MARTENS",       price: 179, image: img(10), category: "kicks",       aesthetic: "Classic",    fit: "Slim",      gender: "male",   affiliateUrl: "https://www.drmartens.com/us/en/mens-boots" },
  { id: "81", name: "Air Force 1",           brand: "NIKE",              price: 110, image: img(1),  category: "kicks",       aesthetic: "Streetwear", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.nike.com/w/air-force-1-shoes" },
  { id: "82", name: "Stan Smith",            brand: "ADIDAS",            price: 90,  image: img(2),  category: "kicks",       aesthetic: "Minimalist", fit: "Regular",   gender: "male",   affiliateUrl: "https://www.adidas.com/us/stan-smith" },
  { id: "83", name: "New Balance 574",       brand: "NEW BALANCE",       price: 99,  image: img(3),  category: "kicks",       aesthetic: "Sporty",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.newbalance.com/men/shoes" },
  { id: "84", name: "Loafers",               brand: "AMAZON ESSENTIALS", price: 59,  image: img(4),  category: "kicks",       aesthetic: "Preppy",     fit: "Regular",   gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+loafers&tag=YOUR_AMAZON_TAG" },
  { id: "85", name: "Hiking Boots",          brand: "HOKA",              price: 165, image: img(5),  category: "kicks",       aesthetic: "Gorpcore",   fit: "Regular",   gender: "male",   affiliateUrl: "https://www.hoka.com/en-us/mens-hiking/" },
  { id: "86", name: "Slip-On Sneakers",      brand: "VANS",              price: 65,  image: img(6),  category: "kicks",       aesthetic: "Skate",      fit: "Regular",   gender: "male",   affiliateUrl: "https://www.vans.com/en-us/mens-shoes" },

  // ===== MEN'S ACCESSORIES =====
  { id: "87", name: "Dad Cap",               brand: "STÜSSY",            price: 35,  image: img(7),  category: "accessories", aesthetic: "Streetwear", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.stussy.com/collections/hats" },
  { id: "88", name: "Beanie",                brand: "CARHARTT WIP",      price: 28,  image: img(8),  category: "accessories", aesthetic: "Streetwear", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=carhartt+beanie&tag=YOUR_AMAZON_TAG" },
  { id: "89", name: "Crossbody Bag",         brand: "AMAZON",            price: 35,  image: img(9),  category: "accessories", aesthetic: "Casual",     fit: "One Size",  gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+crossbody+bag&tag=YOUR_AMAZON_TAG" },
  { id: "90", name: "Leather Watch",         brand: "MVMT",              price: 125, image: img(10), category: "accessories", aesthetic: "Minimalist", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.mvmtwatches.com/collections/mens" },
  { id: "91", name: "Sunglasses",            brand: "QUAY",              price: 55,  image: img(1),  category: "accessories", aesthetic: "Streetwear", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.quayaustralia.com/collections/mens" },
  { id: "92", name: "Leather Belt",          brand: "AMAZON ESSENTIALS", price: 22,  image: img(2),  category: "accessories", aesthetic: "Classic",    fit: "One Size",  gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+leather+belt&tag=YOUR_AMAZON_TAG" },
  { id: "93", name: "Bucket Hat",            brand: "CARHARTT WIP",      price: 38,  image: img(3),  category: "accessories", aesthetic: "Streetwear", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=carhartt+bucket+hat&tag=YOUR_AMAZON_TAG" },
  { id: "94", name: "Canvas Tote",           brand: "MADEWELL",          price: 45,  image: img(4),  category: "accessories", aesthetic: "Minimalist", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.madewell.com/bags" },
  { id: "95", name: "Chain Necklace",        brand: "AMAZON",            price: 18,  image: img(5),  category: "accessories", aesthetic: "Streetwear", fit: "One Size",  gender: "male",   affiliateUrl: "https://www.amazon.com/s?k=men+chain+necklace&tag=YOUR_AMAZON_TAG" },

  // ===== UNISEX =====
  { id: "96",  name: "Crewneck Sweat",       brand: "UNIQLO",            price: 39,  image: img(6),  category: "tops",        aesthetic: "Basics",     fit: "Oversized", gender: "unisex", affiliateUrl: "https://www.uniqlo.com/us/en/sweatshirts" },
  { id: "97",  name: "Oversized Tee",        brand: "FEAR OF GOD",       price: 45,  image: img(7),  category: "tops",        aesthetic: "Minimalist", fit: "Oversized", gender: "unisex", affiliateUrl: "https://www.farfetch.com/shopping/women/fear-of-god" },
  { id: "98",  name: "Sweatpants",           brand: "AMAZON ESSENTIALS", price: 28,  image: img(8),  category: "bottoms",     aesthetic: "Basics",     fit: "Regular",   gender: "unisex", affiliateUrl: "https://www.amazon.com/s?k=sweatpants+unisex&tag=YOUR_AMAZON_TAG" },
  { id: "99",  name: "Classic White Tee",    brand: "GILDAN",            price: 12,  image: img(9),  category: "tops",        aesthetic: "Basics",     fit: "Regular",   gender: "unisex", affiliateUrl: "https://www.amazon.com/s?k=white+tee&tag=YOUR_AMAZON_TAG" },
  { id: "100", name: "Tie-Dye Hoodie",       brand: "URBAN OUTFITTERS",  price: 59,  image: img(10), category: "tops",        aesthetic: "Y2K",        fit: "Oversized", gender: "unisex", affiliateUrl: "https://www.urbanoutfitters.com/hoodies" },
  { id: "101", name: "Sherpa Jacket",        brand: "AMAZON ESSENTIALS", price: 55,  image: img(1),  category: "outerwear",   aesthetic: "Cozy",       fit: "Regular",   gender: "unisex", affiliateUrl: "https://www.amazon.com/s?k=sherpa+jacket&tag=YOUR_AMAZON_TAG" },
  { id: "102", name: "Beret",                brand: "AMAZON",            price: 14,  image: img(2),  category: "accessories", aesthetic: "Vintage",    fit: "One Size",  gender: "unisex", affiliateUrl: "https://www.amazon.com/s?k=beret+hat&tag=YOUR_AMAZON_TAG" },
  { id: "103", name: "Canvas High-Top",      brand: "CONVERSE",          price: 70,  image: img(3),  category: "kicks",       aesthetic: "Classic",    fit: "Regular",   gender: "unisex", affiliateUrl: "https://www.converse.com/c/chuck-taylor" },
  { id: "104", name: "Mini Backpack",        brand: "AMAZON",            price: 30,  image: img(4),  category: "accessories", aesthetic: "Y2K",        fit: "One Size",  gender: "unisex", affiliateUrl: "https://www.amazon.com/s?k=mini+backpack&tag=YOUR_AMAZON_TAG" },
  { id: "105", name: "Vintage Denim Jacket", brand: "LEVI'S",            price: 89,  image: img(5),  category: "outerwear",   aesthetic: "Vintage",    fit: "Regular",   gender: "unisex", affiliateUrl: "https://www.levi.com/US/en_US/clothing/unisex/jackets" },
];
  