export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-accent shadow-card">
      <iframe
        title="Tofina Sparkle Solutions location map"
        src="https://www.google.com/maps?q=Mombasa,Kenya&output=embed"
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
