"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { Book } from "@/lib/types";
import { CONDITION_COLORS } from "@/lib/data";

interface BookCardProps {
  book: Book;
  onAddToCart?: (book: Book) => void;
}

export default function BookCard({ book, onAddToCart }: BookCardProps) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const discount = Math.round(((book.originalPrice - book.salePrice) / book.originalPrice) * 100);
  const conditionClass = CONDITION_COLORS[book.condition] ?? "bg-stone-100 text-stone-600";

  const handleAddToCart = () => {
    setAdded(true);
    onAddToCart?.(book);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col border border-stone-100">
      
      {/* Book Cover */}
      <div className="relative overflow-hidden bg-stone-100 aspect-[3/4]">
        <img
          src={book.coverImage}
          alt={`${book.title} by ${book.author}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Image overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-300 flex items-center justify-center">
          <button
            className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-stone-800 text-xs font-sans font-semibold px-3 py-2 rounded-xl shadow-md"
            aria-label={`Quick view ${book.title}`}
          >
            <Eye className="w-3.5 h-3.5" />
            Quick View
          </button>
        </div>

        {/* Badges — top left */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5">
          {book.isNew && (
            <span className="inline-block bg-sage-600 text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
              New
            </span>
          )}
          {book.isFeatured && (
            <span className="inline-block bg-amber-500 text-white text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">
              Featured
            </span>
          )}
        </div>

        {/* Discount badge — top right */}
        {discount >= 30 && (
          <div className="absolute top-2.5 right-2.5 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white text-[10px] font-sans font-extrabold leading-none">
              -{discount}%
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setWished(!wished)}
          className={`absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 ${
            wished
              ? "bg-rose-500 text-white shadow-md"
              : "bg-white/90 text-stone-400 hover:text-rose-400 hover:bg-white"
          }`}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
        >
          <Heart className={`w-4 h-4 ${wished ? "fill-current" : ""}`} />
        </button>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        
        {/* Condition & Genre */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[11px] font-sans font-semibold px-2 py-0.5 rounded-md ${conditionClass}`}
          >
            {book.condition}
          </span>
          <span className="text-[11px] font-sans text-stone-400 truncate">
            {book.genre}
          </span>
        </div>

        {/* Title & Author */}
        <div className="flex-1">
          <h3 className="font-display text-base font-bold text-stone-900 leading-tight line-clamp-2 mb-0.5">
            {book.title}
          </h3>
          <p className="text-sm font-sans text-stone-500">
            by{" "}
            <span className="text-stone-600 hover:text-amber-600 cursor-pointer transition-colors">
              {book.author}
            </span>
          </p>
        </div>

        {/* Rating */}
        {book.rating && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= Math.floor(book.rating!)
                      ? "fill-amber-400 text-amber-400"
                      : star - 0.5 <= book.rating!
                      ? "fill-amber-200 text-amber-300"
                      : "text-stone-200 fill-stone-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-sans text-stone-500">
              {book.rating} · {book.soldCount} sold
            </span>
          </div>
        )}

        {/* Pricing */}
        <div className="flex items-end justify-between gap-2 pt-1 border-t border-stone-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xl font-bold text-stone-900">
                £{book.salePrice.toFixed(2)}
              </span>
              <span className="font-sans text-sm text-stone-400 line-through">
                £{book.originalPrice.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] font-sans text-sage-600 font-semibold">
              You save £{(book.originalPrice - book.salePrice).toFixed(2)}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-sans font-bold rounded-xl transition-all duration-200 active:scale-95 shrink-0 ${
              added
                ? "bg-sage-600 text-white shadow-md"
                : "bg-stone-900 hover:bg-stone-700 text-white"
            }`}
            aria-label={`Add ${book.title} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </article>
  );
}
