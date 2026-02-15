export type BookCondition =
  | "Like New"
  | "Very Good"
  | "Good"
  | "Well Read"
  | "Acceptable";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  originalPrice: number;
  salePrice: number;
  condition: BookCondition;
  genre: string;
  rating?: number;
  soldCount?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
