"use client";

import { useState } from "react";
import { ArrowRight, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import BookCard from "./BookCard";
import { FEATURED_BOOKS } from "@/lib/data";
import { Book } from "@/lib/types";

const FILTERS = ["All", "Fiction", "Non-Fiction", "Sci-Fi", "Self-Help", "Classic", "Psychology"];

export default function FeaturedGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [cartCount, setCartCount] = useState(0);

  const filtered =
    activeFilter === "All"
      ? FEATURED_BOOKS
      : FEATURED_BOOKS.filter((b) => b.genre === activeFilter);

  const handleAddToCart = (_book: Book) => {
    setCartCount((c) => c + 1);
  };

  return (
    <section className="bg-stone-50 bg-paper-texture py-16 lg:py-24" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-sans font-semibold text-amber-600 uppercase tracking-widest mb-2">
              Handpicked for you
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
              Featured Books
            </h2>
            <p className="mt-2 font-body text-stone-500 max-w-md">
              Curated pre-loved books in great condition — each one verified and ready to ship.
            </p>
          </div>
          <a
            href="/browse"
            className="group inline-flex items-center gap-1.5 text-sm font-sans font-semibold text-stone-700 hover:text-stone-900 shrink-0 transition-colors"
          >
            View all books
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Filter + View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          {/* Genre Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide flex-nowrap">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`shrink-0 px-4 py-1.5 text-sm font-sans font-medium rounded-full border transition-all duration-150 ${
                  activeFilter === filter
                    ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                    : "bg-white text-stone-600 border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-sans text-stone-400 hidden sm:block">
              {filtered.length} results
            </span>
            <div className="flex items-center bg-white border border-stone-200 rounded-xl overflow-hidden shadow-inner-soft">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2.5 transition-colors ${
                  viewMode === "grid"
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-400 hover:text-stone-600"
                }`}
                aria-label="Grid view"
                aria-pressed={viewMode === "grid"}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2.5 transition-colors ${
                  viewMode === "list"
                    ? "bg-stone-100 text-stone-900"
                    : "text-stone-400 hover:text-stone-600"
                }`}
                aria-label="List view"
                aria-pressed={viewMode === "list"}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-sans font-medium text-stone-600 bg-white border border-stone-200 rounded-xl hover:border-stone-300 transition-colors shadow-inner-soft">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="hidden sm:block">Filters</span>
            </button>
          </div>
        </div>

        {/* Cart Toast */}
        {cartCount > 0 && (
          <div className="fixed bottom-6 right-6 z-40 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-up">
            <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-xs font-bold">
              {cartCount}
            </span>
            <span className="text-sm font-sans font-medium">
              {cartCount === 1 ? "1 item" : `${cartCount} items`} in cart
            </span>
            <a href="/cart" className="text-sm font-sans font-semibold text-amber-400 hover:text-amber-300 transition-colors">
              View →
            </a>
          </div>
        )}

        {/* Books Grid */}
        {filtered.length > 0 ? (
          <div
            className={`grid gap-5 transition-all duration-300 ${
              viewMode === "grid"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2"
            }`}
          >
            {filtered.map((book, idx) => (
              <div
                key={book.id}
                className="animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms`, animationFillMode: "both" }}
              >
                <BookCard book={book} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-stone-400">
              No books found in this category yet.
            </p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 text-sm font-sans text-amber-600 hover:text-amber-700 underline"
            >
              Clear filter
            </button>
          </div>
        )}

        {/* Load More */}
        {filtered.length > 0 && (
          <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-stone-800 font-sans font-semibold text-sm border-2 border-stone-200 hover:border-stone-300 rounded-xl transition-all duration-200 shadow-card hover:shadow-card-hover active:scale-95">
              Load More Books
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom trust section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { emoji: "🚚", title: "Free Shipping", desc: "On orders over £15" },
            { emoji: "🔍", title: "Verified Quality", desc: "Every book inspected" },
            { emoji: "↩️", title: "Easy Returns", desc: "30-day return window" },
            { emoji: "🌱", title: "Carbon Neutral", desc: "Offset every delivery" },
          ].map(({ emoji, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-3 p-4 bg-white rounded-xl border border-stone-100 shadow-card"
            >
              <span className="text-2xl" role="img" aria-label={title}>
                {emoji}
              </span>
              <div>
                <p className="text-sm font-sans font-bold text-stone-800">{title}</p>
                <p className="text-xs font-sans text-stone-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
