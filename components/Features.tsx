export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[var(--muted)]/20">
          <h3 className="text-xl font-bold mb-3 text-[var(--primary)]" style={{ fontFamily: "var(--font-headings)" }}>{item.get("title", "Feature")}</h3>
          <p className="text-[var(--primary)]/70 leading-relaxed">{item.get("description", "")}</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[var(--muted)]/20">
          <h3 className="text-xl font-bold mb-3 text-[var(--primary)]" style={{ fontFamily: "var(--font-headings)" }}>{item.get("title", "Feature")}</h3>
          <p className="text-[var(--primary)]/70 leading-relaxed">{item.get("description", "")}</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[var(--muted)]/20">
          <h3 className="text-xl font-bold mb-3 text-[var(--primary)]" style={{ fontFamily: "var(--font-headings)" }}>{item.get("title", "Feature")}</h3>
          <p className="text-[var(--primary)]/70 leading-relaxed">{item.get("description", "")}</p>
        </div>
        </div>
      </div>
    </section>
  );
}
