export default function Hero() {
  return (
    <section className="bg-[var(--primary)] text-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-headings)" }}>
          {headline}
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-10">{subhead}</p>
        <button className="bg-[var(--accent)] text-[var(--primary)] font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-200 cursor-pointer">
          {cta}
        </button>
      </div>
    </section>
  );
}
