import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import gallery from "@/data/gallery.json";

const CATEGORIES = ["All", ...Array.from(new Set(gallery.map((g) => g.category)))];
const PAGE_SIZE = 8;

// Helper function to construct image URLs - Vite will resolve these at build time
const getImageUrl = (filename: string): string => {
  return new URL(`../../assets/gallery/${filename}`, import.meta.url).href;
};

export default function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return gallery.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const visible = filtered.slice(0, page * PAGE_SIZE);
  const slides = filtered.map((item) => ({
    src: getImageUrl(item.image),
    title: item.title,
    description: item.category,
  }));

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === cat ? "bg-primary text-white" : "bg-accent/40 text-secondary/70 hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          type="search"
          placeholder="Search gallery..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setPage(1);
          }}
          className="w-full rounded-full border border-accent px-4 py-2 text-sm focus:border-primary focus:outline-none md:w-64"
          aria-label="Search gallery"
        />
      </div>

      {visible.length === 0 ? (
        <p className="mt-14 text-center text-sm text-secondary/50">No results match your search.</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {visible.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setLightboxIndex(i)}
              className="text-left overflow-hidden rounded-2xl hover:opacity-80 transition-opacity"
            >
              <img
                src={getImageUrl(item.image)}
                alt={item.title}
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {visible.length < filtered.length && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="rounded-full border border-accent px-6 py-3 text-sm font-medium text-secondary transition-colors hover:border-primary hover:text-primary"
          >
            Load More
          </button>
        </div>
      )}

      <Lightbox
        open={lightboxIndex !== null}
        close={() => setLightboxIndex(null)}
        index={lightboxIndex ?? 0}
        slides={slides}
      />
    </div>
  );
}
