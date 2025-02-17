import { NextResponse } from "next/server";

// Sample categories with full properties
const categories = [
  {
    id: 1,
    name: "Fresh",
    description: "Light and refreshing scents inspired by the ocean and cool breezes.",
    image: "https://example.com/images/fresh.jpg"
  },
  {
    id: 2,
    name: "Woody",
    description: "Earthy and rich scents with notes of sandalwood, cedar, and oud.",
    image: "https://example.com/images/woody.jpg"
  },
  {
    id: 3,
    name: "Musk",
    description: "Sensual and warm scents with a deep, musky aroma.",
    image: "https://example.com/images/musk.jpg"
  },
  {
    id: 4,
    name: "Citrus",
    description: "Energizing scents with notes of lemon, orange, and bergamot.",
    image: "https://example.com/images/citrus.jpg"
  },
  {
    id: 5,
    name: "Sweet",
    description: "Delicious and cozy scents with vanilla, caramel, and chocolate notes.",
    image: "https://example.com/images/sweet.jpg"
  },
  {
    id: 6,
    name: "Amber",
    description: "Warm and luxurious scents with resinous and oriental notes.",
    image: "https://example.com/images/amber.jpg"
  },
  {
    id: 7,
    name: "Floral",
    description: "Elegant and romantic scents featuring rose, jasmine, and lavender.",
    image: "https://example.com/images/floral.jpg"
  },
  {
    id: 8,
    name: "Fruity",
    description: "Playful and vibrant scents with berries, apple, and tropical fruits.",
    image: "https://example.com/images/fruity.jpg"
  },
  {
    id: 9,
    name: "Earthy",
    description: "Natural and grounded scents inspired by soil, moss, and patchouli.",
    image: "https://example.com/images/earthy.jpg"
  },
  {
    id: 10,
    name: "Spicy",
    description: "Bold and exotic scents featuring cinnamon, pepper, and cardamom.",
    image: "https://example.com/images/spicy.jpg"
  },
  {
    id: 11,
    name: "Oriental",
    description: "Rich and intense scents with exotic spices and deep notes.",
    image: "https://example.com/images/oriental.jpg"
  },
  {
    id: 12,
    name: "Aquatic",
    description: "Crisp and clean scents inspired by sea water and marine air.",
    image: "https://example.com/images/aquatic.jpg"
  },
  {
    id: 13,
    name: "Gourmand",
    description: "Irresistible edible scents with notes of coffee, almond, and honey.",
    image: "https://example.com/images/gourmand.jpg"
  },
  {
    id: 14,
    name: "Green",
    description: "Refreshing and natural scents with hints of grass, leaves, and herbs.",
    image: "https://example.com/images/green.jpg"
  },
  {
    id: 15,
    name: "Leather",
    description: "Sophisticated scents with smoky and leathery undertones.",
    image: "https://example.com/images/leather.jpg"
  },
  {
    id: 16,
    name: "Powdery",
    description: "Soft and comforting scents with baby powder and iris notes.",
    image: "https://example.com/images/powdery.jpg"
  },
  {
    id: 17,
    name: "Smoky",
    description: "Mysterious and bold scents with smoky and incense notes.",
    image: "https://example.com/images/smoky.jpg"
  },
  {
    id: 18,
    name: "Herbal",
    description: "Aromatic scents with notes of mint, basil, and rosemary.",
    image: "https://example.com/images/herbal.jpg"
  },
  {
    id: 19,
    name: "Oud",
    description: "Intense and exotic scents with deep, woody oud notes.",
    image: "https://example.com/images/oud.jpg"
  },
  {
    id: 20,
    name: "Exotic",
    description: "Unique and rare scents featuring rare flowers and mysterious spices.",
    image: "https://example.com/images/exotic.jpg"
  }
];

// GET Request: Fetch all categories
export async function GET() {
  return NextResponse.json(categories);
}
