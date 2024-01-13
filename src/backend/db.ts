import type { Product } from "./product";

export const popularProducts: Product[] = [
  {
    prodName: "Lighter",
    price: "35",
    vendorName: "CHLight",
    imageUrl: "lighter.jpg",
    prodId: "1",
  },
  {
    prodName: "Playing Cards",
    price: "15",
    vendorName: "T&T",
    imageUrl: "cards.jpg",
    prodId: "2",
  },
  {
    prodName: "Keyboard",
    price: "120",
    prevPrice: "150",
    vendorName: "HK Tech",
    imageUrl: "keyboard.jpg",
    prodId: "3",
  },
  {
    prodName: "AirTag 4 Pack",
    price: "1200",
    vendorName: "Apple",
    imageUrl: "tag.jpg",
    prodId: "4",
  },
];

export const saleProducts: Product[] = [
  {
    prodName: "Desk",
    price: "300",
    prevPrice: "450",
    vendorName: "TK Furniture",
    imageUrl: "desk.jpg",
    prodId: "5",
  },
  {
    prodName: "Lenovo Ideapad 4",
    price: "400",
    prevPrice: "440",
    vendorName: "Lenovo",
    imageUrl: "laptop.jpg",
    prodId: "6",
  },
  {
    prodName: "Plates",
    price: "40",
    prevPrice: "100",
    vendorName: "Pkate",
    imageUrl: "plates.jpg",
    prodId: "7",
  },
  {
    prodName: "Sweater",
    price: "60",
    prevPrice: "94",
    vendorName: "Aran",
    imageUrl: "cloth.jpg",
    prodId: "8",
  },
];

export const products: Product[] = [...popularProducts, ...saleProducts];
