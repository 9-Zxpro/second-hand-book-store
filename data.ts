import { Book } from "./types";

export const FEATURED_BOOKS: Book[] = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    originalPrice: 24.99,
    salePrice: 9.5,
    condition: "Like New",
    genre: "Fiction",
    rating: 4.8,
    soldCount: 142,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverImage:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    originalPrice: 29.99,
    salePrice: 12.0,
    condition: "Very Good",
    genre: "Non-Fiction",
    rating: 4.9,
    soldCount: 289,
    isFeatured: true,
  },
  {
    id: "3",
    title: "Dune",
    author: "Frank Herbert",
    coverImage:
      "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=600&fit=crop",
    originalPrice: 19.99,
    salePrice: 7.75,
    condition: "Good",
    genre: "Sci-Fi",
    rating: 4.7,
    soldCount: 98,
    isNew: true,
  },
  {
    id: "4",
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&h=600&fit=crop",
    originalPrice: 16.99,
    salePrice: 5.5,
    condition: "Well Read",
    genre: "Fiction",
    rating: 4.5,
    soldCount: 203,
  },
  {
    id: "5",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop",
    originalPrice: 27.99,
    salePrice: 14.0,
    condition: "Like New",
    genre: "Self-Help",
    rating: 4.9,
    soldCount: 417,
    isFeatured: true,
  },
  {
    id: "6",
    title: "Norwegian Wood",
    author: "Haruki Murakami",
    coverImage:
      "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?w=400&h=600&fit=crop",
    originalPrice: 18.99,
    salePrice: 8.25,
    condition: "Very Good",
    genre: "Literary Fiction",
    rating: 4.6,
    soldCount: 156,
    isNew: true,
  },
  {
    id: "7",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
    originalPrice: 14.99,
    salePrice: 4.5,
    condition: "Acceptable",
    genre: "Classic",
    rating: 4.3,
    soldCount: 88,
  },
  {
    id: "8",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    coverImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    originalPrice: 32.0,
    salePrice: 15.5,
    condition: "Good",
    genre: "Psychology",
    rating: 4.7,
    soldCount: 231,
  },
];

export const NAV_ITEMS = [
  { label: "Browse", href: "/browse" },
  { label: "Categories", href: "/categories" },
  { label: "New Arrivals", href: "/new" },
  { label: "Best Deals", href: "/deals" },
];

export const CONDITION_COLORS: Record<string, string> = {
  "Like New": "bg-sage-100 text-sage-800 border border-sage-200",
  "Very Good": "bg-blue-50 text-blue-700 border border-blue-100",
  Good: "bg-amber-50 text-amber-700 border border-amber-200",
  "Well Read": "bg-orange-50 text-orange-700 border border-orange-200",
  Acceptable: "bg-stone-100 text-stone-600 border border-stone-200",
};
