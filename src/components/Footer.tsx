export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-col">
            <h3>JK Store</h3>
            <p className="muted">
              Modern minimal retail — curated products for daily life.
            </p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow</h4>
            <p className="muted">Instagram · Twitter · Facebook</p>
          </div>
        </div>
        <div className="container copyright">
          <p className="muted">© 2026 JK Store — All rights reserved.</p>
        </div>

        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </footer>
    </>
  );
}
