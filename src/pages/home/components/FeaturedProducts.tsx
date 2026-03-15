export default function FeaturedProducts() {
  return (
    <div>
      {" "}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p className="muted">Top picks of the week curated just for you.</p>
          </div>

          <div className="grid grid-4">
            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
                alt="Smart Watch"
              />
              <div className="card-body">
                <h3 className="card-title">Smart Watch</h3>
                <p className="muted small">
                  Track fitness and stay connected on the go.
                </p>
                <div className="price">
                  <span className="old">$199</span>
                  <span className="new">$149</span>
                </div>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Wireless Earbuds"
              />
              <div className="card-body">
                <h3 className="card-title">Wireless Earbuds</h3>
                <p className="muted small">
                  Crystal-clear sound and all-day comfort.
                </p>
                <div className="price">
                  <span className="old">$129</span>
                  <span className="new">$89</span>
                </div>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Smart Lamp"
              />
              <div className="card-body">
                <h3 className="card-title">Smart Lamp</h3>
                <p className="muted small">
                  Modern design with customizable lighting.
                </p>
                <div className="price">
                  <span className="old">$79</span>
                  <span className="new">$59</span>
                </div>
              </div>
            </article>

            <article className="card">
              <img
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
                alt="Fitness Tracker"
              />
              <div className="card-body">
                <h3 className="card-title">Fitness Tracker</h3>
                <p className="muted small">
                  Monitor your daily activity effortlessly.
                </p>
                <div className="price">
                  <span className="old">$99</span>
                  <span className="new">$69</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
