import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState<
    { name: string; slug: string }[]
  >([]);
  const [status, setStatus] = useState<"idle" | "loading" | "failed">("idle");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const loadCategories = async () => {
      setStatus("loading");
      setError(null);
      try {
        const resp = await fetch(
          "https://dummyjson.com/products/categories",
        );
        if (!resp.ok) {
          throw new Error("Failed to load categories.");
        }
        const data = await resp.json();
        const normalized = Array.isArray(data)
          ? data.map((item: any) => {
              if (typeof item === "string") {
                return {
                  name: item,
                  slug: item
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, ""),
                };
              }
              const name = String(item.name ?? item.slug ?? item.title ?? "");
              return {
                name,
                slug: String(item.slug ?? item.name ?? name)
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-+|-+$/g, ""),
              };
            })
          : [];
        if (isMounted) {
          setCategories(normalized.filter((c) => c.name));
          setStatus("idle");
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unknown error");
          setStatus("failed");
        }
      }
    };
    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
            Browse
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Categories
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Explore our curated product categories.
          </p>
        </div>

        {status === "loading" ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={`skeleton-${index}`}
                className="h-28 animate-pulse rounded-2xl border border-slate-200 bg-white"
              />
            ))}
          </div>
        ) : status === "failed" ? (
          <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-sm text-rose-700">
            {error ?? "Failed to load categories."}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/shop?category=${encodeURIComponent(category.slug)}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Category
                </p>
                <h2 className="mt-3 text-lg font-semibold text-slate-900 capitalize">
                  {category.name.replace(/-/g, " ")}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Shop the latest in {category.name.replace(/-/g, " ")}.
                </p>
                <span className="mt-4 inline-flex text-sm font-semibold text-slate-900">
                  Explore
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
