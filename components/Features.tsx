export default function Features() {
  const features: Array<{title: string; description: string}> = [{"title": "Instant Reservations", "description": "Secure your spot at test-cafe-002 online in under a minute \u2014 no phone tag, no waiting."}, {"title": "Crafted Experience", "description": "Every detail at test-cafe-002 is designed around you."}, {"title": "Built to Last", "description": "test-cafe-002 is committed to quality in everything we serve."}];

  return (
    <section className="py-20 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[var(--muted)]/20">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center mb-5 text-2xl">
                {["☕", "🚀", "💎", "🌟", "🔥", "✨"][idx % 6]}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[var(--primary)]" style={{ fontFamily: "var(--font-headings)" }}>{item.title}</h3>
              <p className="text-[var(--primary)]/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
