export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-[var(--bg)] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-semibold text-lg" style={{ fontFamily: "var(--font-headings)" }}>{site_name}</p>
        <p className="opacity-80 mt-1">{tagline}</p>
        <p className="opacity-50 text-sm mt-4">© {new Date().getFullYear()} {site_name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
