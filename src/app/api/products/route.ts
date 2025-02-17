import { NextResponse } from "next/server";

// Sample perfume products
const products = [
  {
    id: 1,
    name: "Aqua Blue",
    price: 50,
    brand: "Brand A",
    category: "Fresh",
    description: "A refreshing aquatic fragrance with hints of ocean breeze and citrus.",
    image: "https://example.com/images/aqua-blue.jpg"
  },
  {
    id: 2,
    name: "Royal Oud",
    price: 120,
    brand: "Brand B",
    category: "Woody",
    description: "A luxurious oud blend with warm, spicy undertones.",
    image: "https://example.com/images/royal-oud.jpg"
  },
  {
    id: 3,
    name: "Musk Intense",
    price: 95,
    brand: "Brand C",
    category: "Musk",
    description: "A deep and intense musky aroma with long-lasting freshness.",
    image: "https://example.com/images/musk-intense.jpg"
  },
  {
    id: 4,
    name: "Citrus Bloom",
    price: 60,
    brand: "Brand D",
    category: "Citrus",
    description: "A zesty citrus fragrance with notes of orange and lemon.",
    image: "https://example.com/images/citrus-bloom.jpg"
  },
  {
    id: 5,
    name: "Vanilla Spice",
    price: 85,
    brand: "Brand E",
    category: "Sweet",
    description: "A warm vanilla fragrance with a hint of spicy cinnamon.",
    image: "https://example.com/images/vanilla-spice.jpg"
  },
  {
    id: 6,
    name: "Amber Nights",
    price: 110,
    brand: "Brand F",
    category: "Amber",
    description: "A rich amber scent with deep, sensual undertones.",
    image: "https://example.com/images/amber-nights.jpg"
  },
  {
    id: 7,
    name: "Sandalwood Essence",
    price: 105,
    brand: "Brand G",
    category: "Woody",
    description: "A smooth and creamy sandalwood fragrance with a touch of spice.",
    image: "https://example.com/images/sandalwood-essence.jpg"
  },
  {
    id: 8,
    name: "Lavender Mist",
    price: 70,
    brand: "Brand H",
    category: "Floral",
    description: "A calming lavender scent blended with fresh herbal notes.",
    image: "https://example.com/images/lavender-mist.jpg"
  },
  {
    id: 9,
    name: "Ocean Breeze",
    price: 55,
    brand: "Brand I",
    category: "Fresh",
    description: "A crisp and clean scent reminiscent of the ocean air.",
    image: "https://example.com/images/ocean-breeze.jpg"
  },
  {
    id: 10,
    name: "Rose Royale",
    price: 95,
    brand: "Brand J",
    category: "Floral",
    description: "A delicate rose fragrance with soft and powdery notes.",
    image: "https://example.com/images/rose-royale.jpg"
  },
  {
    id: 11,
    name: "Spicy Oud",
    price: 130,
    brand: "Brand K",
    category: "Woody",
    description: "An intense oud perfume with a spicy, smoky depth.",
    image: "https://example.com/images/spicy-oud.jpg"
  },
  {
    id: 12,
    name: "Patchouli Nights",
    price: 115,
    brand: "Brand L",
    category: "Earthy",
    description: "An exotic patchouli fragrance with warm and woody undertones.",
    image: "https://example.com/images/patchouli-nights.jpg"
  },
  {
    id: 13,
    name: "Honey Musk",
    price: 90,
    brand: "Brand M",
    category: "Musk",
    description: "A sweet honey and musk combination that feels warm and comforting.",
    image: "https://example.com/images/honey-musk.jpg"
  },
  {
    id: 14,
    name: "Coconut Paradise",
    price: 65,
    brand: "Brand N",
    category: "Sweet",
    description: "A tropical coconut fragrance with hints of vanilla and caramel.",
    image: "https://example.com/images/coconut-paradise.jpg"
  },
  {
    id: 15,
    name: "Cedarwood Bliss",
    price: 100,
    brand: "Brand O",
    category: "Woody",
    description: "A strong cedarwood scent with earthy undertones.",
    image: "https://example.com/images/cedarwood-bliss.jpg"
  },
];

// GET Request: Fetch all products
export async function GET() {
  return NextResponse.json(products);
}

// POST Request: Add a new product (optional)
export async function POST(req: Request) {
  const body = await req.json();
  products.push({ id: products.length + 1, ...body });
  return NextResponse.json({ message: "Product added successfully", products });
}
