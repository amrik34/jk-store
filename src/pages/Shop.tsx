import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchProduct } from "../redux/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addItem } from "../redux/cartSlice";

interface IProduct {
  id: number;
  title: String;
  description: String;
  category: String;
  price: number;

  thumbnail: string;
}

export default function Shop() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "";
  const [categories, setCategories] = useState<string[]>([]);
  const [categoryStatus, setCategoryStatus] = useState<
    "idle" | "loading" | "failed"
  >("idle");
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const {
    item: productList,
    status,
    error,
  } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProduct(selectedCategory || undefined));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    let isMounted = true;
    const loadCategories = async () => {
      setCategoryStatus("loading");
      setCategoryError(null);
      try {
        const resp = await fetch("https://dummyjson.com/products/categories");
        if (!resp.ok) {
          throw new Error("Failed to load categories.");
        }
        const data = await resp.json();
        const list = Array.isArray(data)
          ? data.map((item: any) =>
              typeof item === "string"
                ? item
                : String(item.name ?? item.slug ?? item.title ?? ""),
            )
          : [];
        if (isMounted) {
          setCategories(list.filter(Boolean));
          setCategoryStatus("idle");
        }
      } catch (err) {
        if (isMounted) {
          setCategoryError(
            err instanceof Error ? err.message : "Unknown error",
          );
          setCategoryStatus("failed");
        }
      }
    };
    loadCategories();
    return () => {
      isMounted = false;
    };
  }, []);

  const categoryOptions = useMemo(
    () =>
      categories.map((category) => ({
        label: category.replace(/-/g, " "),
        value: category,
      })),
    [categories],
  );

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const value = event.target.value;
    if (!value) {
      navigate("/shop");
      return;
    }
    navigate(`/shop?category=${encodeURIComponent(value)}`);
  };
  const handleAddToCart = (product: IProduct) => {
    console.log(product, "product");

    dispatch(addItem(product));
  };
  return (
    <div>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="muted small">Shop / New Arrivals</p>
            <h1>Everyday essentials, elevated.</h1>
            <p className="muted">
              Curated picks across apparel, home, and accessories. Simple
              designs, fair pricing, and quality you can feel.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button className="btn">Shop Bestsellers</button>
              <button className="btn ghost">View Lookbook</button>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80"
              alt="Fashion essentials on a rack"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>
                Shop the collection
              </h2>
              <p className="muted small">
                48 products · Free shipping over $75
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <select
                aria-label="Filter by category"
                value={selectedCategory}
                onChange={handleCategoryChange}
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #e6e6e6",
                }}
              >
                <option value="">All categories</option>
                {categoryOptions.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <select
                aria-label="Sort products"
                style={{
                  padding: "0.55rem 0.75rem",
                  borderRadius: "8px",
                  border: "1px solid #e6e6e6",
                }}
              >
                <option>Sort: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>
          {categoryStatus === "failed" ? (
            <div
              style={{
                border: "1px solid #fecaca",
                background: "#fef2f2",
                padding: "1rem",
                borderRadius: "12px",
                color: "#b91c1c",
                fontSize: "0.9rem",
                marginBottom: "1.5rem",
              }}
            >
              {categoryError ?? "Failed to load categories."}
            </div>
          ) : null}

          {status === "loading" ? (
            <div className="grid grid-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <article key={`skeleton-${index}`} className="card">
                  <div
                    style={{
                      height: "220px",
                      background: "#f1f5f9",
                    }}
                  />
                  <div className="card-body">
                    <div
                      style={{
                        height: "18px",
                        width: "60%",
                        background: "#e2e8f0",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <div
                      style={{
                        height: "14px",
                        width: "80%",
                        background: "#e2e8f0",
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>
          ) : status === "failed" ? (
            <div
              style={{
                border: "1px solid #fecaca",
                background: "#fef2f2",
                padding: "1rem",
                borderRadius: "12px",
                color: "#b91c1c",
                fontSize: "0.9rem",
              }}
            >
              {error ?? "Failed to load products."}
            </div>
          ) : (
            <div className="grid grid-4">
              {productList.map((product: IProduct) => (
                <article className="card" key={product.id}>
                  <img src={product.thumbnail} alt={String(product.title)} />
                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="muted small">{product.description}</p>
                    <div className="price">
                      <span className="new">${product.price}</span>
                    </div>
                    <button
                      onClick={() => {
                        handleAddToCart(product);
                      }}
                      className="btn"
                      style={{ marginTop: "0.75rem" }}
                    >
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="promo">
            <img
              src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"
              alt="Work-from-home essentials"
            />
            <div className="promo-body">
              <h3 className="card-title">Workspace Essentials</h3>
              <p className="muted small">
                Curate a calm desk with warm neutrals and clean lines.
              </p>
              <a className="btn" href="/shop">
                Explore Home
              </a>
            </div>
          </div>
          <div className="promo">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
              alt="New season apparel"
            />
            <div className="promo-body">
              <h3 className="card-title">Spring Layers</h3>
              <p className="muted small">
                Lightweight pieces built for warm days and cool nights.
              </p>
              <a className="btn" href="/shop">
                Shop Apparel
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container newsletter">
          <div>
            <h2>Get 10% off your first order</h2>
            <p className="muted small">
              Join the list for launches, limited drops, and curated styling
              tips.
            </p>
          </div>
          <form className="newsletter-form">
            <label className="visually-hidden" htmlFor="shop-email">
              Email address
            </label>
            <input
              id="shop-email"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <button className="btn" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
