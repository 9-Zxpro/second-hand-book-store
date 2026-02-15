import { ArrowRight, Leaf, Recycle, BookOpen, Star, TrendingUp, Users } from "lucide-react";

const STATS = [
  { icon: BookOpen, value: "180K+", label: "Books Listed" },
  { icon: Users, value: "40K+", label: "Happy Readers" },
  { icon: Leaf, value: "12T", label: "CO₂ Saved" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-stone-50 bg-paper-texture overflow-hidden pt-24">
      
      {/* Ambient background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-sage-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-stone-200/30 rounded-full blur-3xl" />
      </div>

      {/* Decorative dots grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #57534e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 lg:py-24">
          
          {/* Left Column — Text */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100/80 border border-sage-200 rounded-full">
              <Recycle className="w-3.5 h-3.5 text-sage-600" />
              <span className="text-xs font-sans font-semibold text-sage-700 uppercase tracking-widest">
                Sustainable Reading
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.08] tracking-tight">
                Every Story
                <br />
                <span className="text-amber-600 relative">
                  Deserves
                  {/* Underline decoration */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-amber-200"
                    viewBox="0 0 200 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8 Q50 2 100 6 Q150 10 198 4"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <br />
                a Second Life
              </h1>
            </div>

            {/* Subtext */}
            <p className="font-body text-lg text-stone-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Discover pre-loved books at a fraction of the price. Give your bookshelf a sustainable upgrade — or sell the ones gathering dust and let another reader fall in love.
            </p>

            {/* Sustainability stats */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-sans text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-500 inline-block" />
                75% cheaper than new
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                Free shipping over £15
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400 inline-block" />
                30-day returns
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="/browse"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <BookOpen className="w-5 h-5" />
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/sell"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-stone-50 text-stone-800 font-sans font-semibold text-base rounded-xl border-2 border-stone-200 hover:border-stone-300 transition-all duration-200 shadow-card hover:shadow-card-hover active:scale-[0.98]"
              >
                <TrendingUp className="w-5 h-5 text-amber-600" />
                Sell a Book
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              <div className="flex -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Happy customer"
                    className="w-9 h-9 rounded-full border-2 border-stone-50 object-cover shadow-sm"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-sm font-sans font-semibold text-stone-900">4.9</span>
                </div>
                <p className="text-xs font-sans text-stone-500">from 8,240+ reviews</p>
              </div>
            </div>
          </div>

          {/* Right Column — Book Stack Visual */}
          <div className="flex-1 relative flex items-center justify-center lg:justify-end min-h-[420px] w-full">
            {/* Floating card decorations */}
            <div className="absolute top-8 right-8 lg:right-0 bg-white/90 backdrop-blur-sm shadow-card rounded-2xl px-4 py-3 flex items-center gap-2.5 animate-[fadeIn_0.8s_ease-out_0.4s_both]">
              <div className="w-8 h-8 bg-sage-100 rounded-full flex items-center justify-center">
                <Leaf className="w-4 h-4 text-sage-600" />
              </div>
              <div>
                <p className="text-xs font-sans font-bold text-stone-900">Eco Saved</p>
                <p className="text-xs font-sans text-stone-500">12 trees this month</p>
              </div>
            </div>

            <div className="absolute bottom-10 left-4 lg:left-8 bg-white/90 backdrop-blur-sm shadow-card rounded-2xl px-4 py-3 flex items-center gap-2.5 animate-[fadeIn_0.8s_ease-out_0.6s_both]">
              <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-sans font-bold text-stone-900">New Arrival</p>
                <p className="text-xs font-sans text-stone-500">142 books today</p>
              </div>
            </div>

            {/* Main book stack */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Book 3 — back */}
              <div
                className="absolute bottom-0 right-0 w-44 h-60 rounded-lg overflow-hidden shadow-book"
                style={{ transform: "rotate(6deg) translateX(16px)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=560&fit=crop"
                  alt="Book cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Book 2 — middle */}
              <div
                className="absolute bottom-4 left-4 w-44 h-60 rounded-lg overflow-hidden shadow-book"
                style={{ transform: "rotate(-4deg)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1513001900722-370f803f498d?w=400&h=560&fit=crop"
                  alt="Book cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Book 1 — front, main */}
              <div
                className="absolute bottom-8 left-12 w-48 h-64 rounded-lg overflow-hidden shadow-book-hover z-10 animate-float"
              >
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=580&fit=crop"
                  alt="Featured book cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="inline-flex items-center gap-1 bg-amber-500 rounded-md px-2 py-0.5 mb-1">
                    <Star className="w-2.5 h-2.5 fill-white text-white" />
                    <span className="text-white text-xs font-sans font-bold">Bestseller</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="border-t border-stone-200/60 py-10">
          <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                  <Icon className="w-4 h-4 text-amber-600" />
                  <span className="font-display text-2xl font-bold text-stone-900">{value}</span>
                </div>
                <p className="text-sm font-sans text-stone-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
