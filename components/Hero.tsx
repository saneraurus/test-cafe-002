export default function Hero() {
  const headline = "Best coffee in Austin";
  const subhead = "test-cafe-002 delivers reservations — done right, every time.";
  const cta = "Reserve Now";

  return (
    <section className="relative bg-[var(--primary)] text-[var(--bg)] overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--accent),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-36 text-center">
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
