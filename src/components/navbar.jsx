import { useState, useRef, useEffect } from "react";

const categories = [
  { label: "Middle East", subcategories: ["Palestine", "Lebanon", "Syria", "Iraq", "Iran", "Yemen"] },
  { label: "News", subcategories: ["World", "Africa", "Asia", "US & Canada", "Europe", "Economy"] },
  { label: "Opinion", subcategories: ["Columnists", "Cartoons", "Podcasts", "Features"] },
  { label: "Sport", subcategories: ["Football", "Cricket", "Tennis", "Athletics", "Formula 1"] },
  { label: "Technology", subcategories: ["Space", "AI & Tech", "Environment", "Health"] },
  { label: "Climate", subcategories: ["Climate Crisis", "Solutions", "Data"] },
  { label: "More", subcategories: ["Business", "Human Rights", "Arts", "Culture", "Travel"] },
];

const tickerItems = [
  "BREAKING: World leaders gather at UN Summit to discuss global climate policy",
  "Israel-Gaza conflict: Latest developments from the region",
  "US Federal Reserve hints at interest rate decision next quarter",
  "Record temperatures recorded across Europe amid heatwave",
  "Tech giant announces major restructuring affecting thousands of employees",
];

function MobileMenuItem({ cat }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        className="flex items-center justify-between w-full px-5 py-4 text-sm font-medium text-white/80 hover:text-white"
        onClick={() => setOpen(!open)}
      >
        {cat.label}
        <span className={`text-white/40 ${open ? "text-red-500" : ""}`}>▾</span>
      </button>
      {open && (
        <div className="bg-black/40">
          {cat.subcategories.map((sub) => (
            <a key={sub} href="#"
              className="block px-8 py-3 text-sm text-white/60 hover:text-white hover:bg-red-600/20 border-b border-white/5 last:border-0">
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownTimeout = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  function handleMouseEnter(label) {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  }

  function handleMouseLeave() {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  }

  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      <div className="bg-black border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-9 text-xs text-white/60">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">{dateStr}</span>
            <span className="text-red-500 font-semibold uppercase text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
              Live
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:text-white">📺 AJ Live</button>
            <button className="hover:text-white">🌐 عربي</button>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center">
            <span className="text-white font-black text-2xl md:text-3xl">E</span>
            <span className="text-red-600 font-black text-2xl md:text-3xl">DEN</span>
            <div className="ml-2 hidden md:flex flex-col border-l border-white/20 pl-2">
              <span className="text-white/40 text-xs uppercase tracking-widest">English</span>
              <span className="text-red-500 text-xs uppercase tracking-widest">Network</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-3">
            {searchOpen ? (
              <div className="flex items-center bg-white/10 border border-white/20 rounded overflow-hidden">
                <input
                  ref={searchRef}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Eden..."
                  className="bg-transparent text-white placeholder:text-white/40 text-sm px-3 py-1.5 outline-none w-52"
                  onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
                />
                <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                  className="text-white/50 hover:text-white px-2">✕</button>
              </div>
            ) : (
              <button onClick={() => setSearchOpen(true)}
                className="text-white/70 hover:text-white p-2 hover:bg-white/10 rounded">
                🔍
              </button>
            )}
            <a href="#"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2">
              ▶ Watch Live
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="text-white p-2">🔍</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2 text-xl">
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <div className="flex items-center bg-white/10 border border-white/20 rounded overflow-hidden">
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Eden..."
                className="bg-transparent text-white placeholder:text-white/40 text-sm px-3 py-2.5 outline-none flex-1"
                autoFocus
              />
              <button onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                className="text-white/50 hover:text-white px-3">✕</button>
            </div>
          </div>
        )}
      </div>

      <nav className="bg-gray-900 border-b border-white/10 hidden md:block">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex items-center">
            {categories.map((cat) => (
              <li key={cat.label} className="relative"
                onMouseEnter={() => handleMouseEnter(cat.label)}
                onMouseLeave={handleMouseLeave}>
                <button className={`flex items-center gap-1 text-sm font-medium px-3.5 py-4 whitespace-nowrap
                  ${activeDropdown === cat.label ? "text-red-500" : "text-white/80 hover:text-white"}`}>
                  {cat.label} <span>▾</span>
                </button>
                {activeDropdown === cat.label && (
                  <div className="absolute top-full left-0 w-48 bg-gray-900 border border-white/10 shadow-2xl z-50"
                    onMouseEnter={() => handleMouseEnter(cat.label)}
                    onMouseLeave={handleMouseLeave}>
                    {cat.subcategories.map((sub) => (
                      <a key={sub} href="#"
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-red-600/20 border-b border-white/5 last:border-0">
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="bg-red-600 h-8 flex items-center overflow-hidden">
        <div className="shrink-0 bg-black text-white text-xs font-black uppercase tracking-widest px-4 h-full flex items-center border-r border-white/20">
          Breaking
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-animate flex whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center text-white text-xs px-8">
                <span className="mr-8 text-white/50">◆</span>{item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-white/10">
          {categories.map((cat) => <MobileMenuItem key={cat.label} cat={cat} />)}
          <div className="p-4 border-t border-white/10">
            <a href="#" className="flex items-center justify-center gap-2 bg-red-600 text-white text-sm font-semibold w-full py-3">
              ▶ Watch Live
            </a>
          </div>
        </div>
      )}
    </header>
  );
}