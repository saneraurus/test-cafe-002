export default function Footer() {
  const siteName = "test-cafe-002";
  const tagline = "test-cafe-002 — reservations.";

  return (
    <footer className="bg-[var(--primary)] text-[var(--bg)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div>
            <p className="font-semibold text-lg mb-2" style={{ fontFamily: "var(--font-headings)" }}>{siteName}</p>
            <p className="opacity-70 text-sm">{tagline}</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p className="opacity-70 text-sm">hello@example.com</p>
            <p className="opacity-70 text-sm">+1 (555) 000-0000</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Location</p>
            <p className="opacity-70 text-sm">123 Main Street</p>
            <p className="opacity-70 text-sm">Austin, TX 78701</p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center opacity-50 text-sm">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
