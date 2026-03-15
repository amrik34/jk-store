import React from "react";

export default function Categories() {
  return (
    <section className="section categories">
      <div className="container">
        <div className="section-header">
          <h2>Categories</h2>
        </div>
        <div className="grid grid-4">
          <div className="cat">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80"
              alt="Fashion"
            />
            <h4>Fashion</h4>
          </div>
          <div className="cat">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
              alt="Audio"
            />
            <h4>Audio</h4>
          </div>
          <div className="cat">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Home"
            />
            <h4>Home</h4>
          </div>
          <div className="cat">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80"
              alt="Outdoor"
            />
            <h4>Outdoor</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
