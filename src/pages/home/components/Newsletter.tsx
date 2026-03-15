import React from "react";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div className="newsletter-copy">
          <h2>Join our newsletter</h2>
          <p className="muted">
            Get exclusive deals and early access to new collections.
          </p>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button className="btn" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
