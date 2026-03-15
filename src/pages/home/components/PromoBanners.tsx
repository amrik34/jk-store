export default function PromoBanners() {
  return (
    <div>
      {" "}
      <section className="section offers">
        <div className="container">
          <div className="section-header">
            <h2>Special Offers</h2>
            <p className="muted">Limited-time bundles and seasonal picks.</p>
          </div>

          <div className="grid grid-2">
            <div className="promo">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Home decor"
              />
              <div className="promo-body">
                <h3>Home Starter Kit</h3>
                <p className="muted small">Save on curated home essentials.</p>
                <div className="price">
                  <span className="old">$299</span>
                  <span className="new">$229</span>
                </div>
              </div>
            </div>

            <div className="promo">
              <img
                src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80"
                alt="Electronics"
              />
              <div className="promo-body">
                <h3>Audio Combo</h3>
                <p className="muted small">
                  Earbuds + portable speaker at a special price.
                </p>
                <div className="price">
                  <span className="old">$189</span>
                  <span className="new">$139</span>
                </div>
              </div>
            </div>
          </div>

          <div className="promo-full">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1400&q=80"
              alt="Flash sale"
            />
            <div className="promo-full-body">
              <h3>Weekend Flash Sale</h3>
              <p className="muted small">
                Extra 10% off on selected items. Ends Sunday.
              </p>
              <a className="btn" href="#">
                Shop Flash Sale
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
