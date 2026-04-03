const articles = [
  {
    category: "Middle East",
    headline: "Israel-Gaza War: Ceasefire talks resume amid mounting civilian toll",
    summary: "Negotiations are underway in Cairo as international mediators push for a temporary halt to fighting.",
    time: "2 hours ago",
  },
  {
    category: "World",
    headline: "UN Security Council votes on emergency resolution over Sudan crisis",
    summary: "Member states debate swift humanitarian corridors as millions face displacement.",
    time: "3 hours ago",
  },
  {
    category: "Climate",
    headline: "COP30 pledges fall short of 1.5°C target, scientists warn",
    summary: "New analysis reveals a significant gap between national commitments and what is needed.",
    time: "4 hours ago",
  },
  {
    category: "Technology",
    headline: "AI reshapes newsrooms: automation arrives in global media",
    summary: "From transcription to translation, AI is changing how journalists work.",
    time: "5 hours ago",
  },
  {
    category: "Sport",
    headline: "World Cup 2026: Ticket sales break records as host cities prepare",
    summary: "Demand exceeds supply in the first edition of the expanded 48-team tournament.",
    time: "6 hours ago",
  },
];

export default function Home() {
  return (
    <main className="pt-36 md:pt-44 min-h-screen bg-gray-950 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mb-8">
          <div className="lg:col-span-2 bg-gray-900 p-8 flex flex-col justify-end min-h-64 cursor-pointer hover:bg-gray-800 transition-colors">
            <span className="text-red-500 text-xs font-black uppercase tracking-widest mb-3">
              {articles[0].category}
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-black leading-tight mb-3">
              {articles[0].headline}
            </h2>
            <p className="text-white/60 text-sm mb-4">{articles[0].summary}</p>
            <span className="text-white/40 text-xs">🕐 {articles[0].time}</span>
          </div>

          <div className="flex flex-col gap-1">
            {articles.slice(1, 3).map((a, i) => (
              <div key={i} className="flex-1 bg-gray-900 p-5 border-l-2 border-red-600 cursor-pointer hover:bg-gray-800 transition-colors">
                <span className="text-red-500 text-xs font-black uppercase tracking-widest mb-2 block">
                  {a.category}
                </span>
                <h3 className="text-white text-sm font-bold leading-snug mb-2">{a.headline}</h3>
                <span className="text-white/30 text-xs">🕐 {a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {articles.slice(2).map((a, i) => (
            <div key={i} className="bg-gray-900 p-5 cursor-pointer hover:bg-gray-800 transition-colors">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-40 mb-4 flex items-end p-3">
                <span className="bg-red-600 text-white text-xs font-black uppercase px-2 py-0.5">
                  {a.category}
                </span>
              </div>
              <h3 className="text-white text-sm font-bold mb-2">{a.headline}</h3>
              <p className="text-white/50 text-xs mb-3">{a.summary}</p>
              <span className="text-white/30 text-xs">🕐 {a.time}</span>
            </div>
          ))}
        </div>

      </div>

      <footer className="border-t border-white/10 py-10 text-center text-white/30 text-xs mt-8">
        <p>© 2025 Eden News Network</p>
      </footer>
    </main>
  );
}