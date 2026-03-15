export default function Hero() {
  return (
    <>
      <section className="top-banner animate-fade">
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Discover Modern Living</h1>
            <p>
              Curated essentials designed for simplicity, comfort, and style.
            </p>
            <a href="#" className="btn large">
              Explore Collection
            </a>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Modern essentials. Curated for daily life.</h1>
            <p className="muted">
              Shop premium picks with transparent pricing and limited-time
              offers.
            </p>
            <div className="hero-ctas">
              <a className="btn large" href="#">
                Shop Now
              </a>
              <a className="link ml-16" href="#">
                See Offers
              </a>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80"
              alt="Hero lifestyle"
            />
          </div>
        </div>
      </section>
    </>
  );
}
