import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function Header() {
  const navigate = useNavigate();
  const handleCart = () => {
    navigate("/cart");
  };
  const cartSelector = useAppSelector((state) => state.cart.items);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/" className="logo">
            JK Store
          </Link>
        </div>

        <form className="search" role="search">
          <div className="search-wrap">
            <input
              type="search"
              placeholder="Search products, categories..."
              aria-label="Search"
            />
            <button className="search-btn" aria-label="Search">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>

        <nav className="main-nav" aria-label="Main Navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          {/* <NavLink to="/offers">Offers</NavLink> */}
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header-actions">
          {/* <button className="btn ghost">
            <i className="fas fa-user"></i>
            <span className="visually-hidden">Login</span>
          </button> */}
          {/* <a className="cart" href="#"></a> */}
          <button className="cart" onClick={() => handleCart()}>
            {" "}
            <i className="fas fa-shopping-cart"></i> Cart
            <span className="cart-count">{cartSelector.length}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
