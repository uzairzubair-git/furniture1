import { useState } from "react";
import "./Product.css";

// IMAGE REMINDER:
// Replace this with your actual product image:
// import productImage from "../assets/images/card-1.jpg";

const productImage = null;

const relatedProducts = [
  {
    id: 1,
    name: "Syltherine",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: 3,
    name: "Lolito",
    category: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
  },
  {
    id: 4,
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
  },
];

function ImagePlaceholder() {
  return (
    <div className="image-placeholder">
      {/* IMAGE REMINDER: Put your image here */}
      <span>Product Image</span>
    </div>
  );
}

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("purple");
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <main className="product-page">
      {/* Breadcrumb */}
      <div className="product-breadcrumb">
        <a href="/">Home</a>
        <span>›</span>
        <a href="/shop">Shop</a>
        <span>›</span>
        <span>Asgaard sofa</span>
      </div>

      {/* PRODUCT */}
      <section className="product-main">
        {/* LEFT */}
        <div className="product-gallery">
          <div className="product-thumbnails">
            {[1, 2, 3, 4].map((item) => (
              <button key={item}>
                <ImagePlaceholder />
              </button>
            ))}
          </div>

          <div className="main-product-image">
            {productImage ? (
              <img src={productImage} alt="Asgaard sofa" />
            ) : (
              <ImagePlaceholder />
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-details">
          <h1>Asgaard sofa</h1>

          <p className="product-price">Rs. 250,000.00</p>

          <div className="rating-row">
            <span className="stars">★★★★★</span>

            <span>5 Customer Reviews</span>
          </div>

          <p className="product-description">
            Experience comfort and modern design with our Asgaard sofa.
            Carefully crafted for a stylish living room and everyday comfort.
          </p>

          {/* SIZE */}
          <div className="option-group">
            <span className="option-label">Size</span>

            <div className="size-options">
              {["L", "XL", "XS"].map((item) => (
                <button
                  key={item}
                  className={size === item ? "selected" : ""}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* COLOR */}
          <div className="option-group">
            <span className="option-label">Color</span>

            <div className="color-options">
              {["purple", "black", "gold"].map((item) => (
                <button
                  key={item}
                  className={`color ${item} ${
                    color === item ? "selected" : ""
                  }`}
                  onClick={() => setColor(item)}
                />
              ))}
            </div>
          </div>

          {/* PURCHASE */}
          <div className="purchase-row">
            <div className="quantity">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                −
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>

            <button className="add-cart" onClick={() => setCartOpen(true)}>
              Add To Cart
            </button>

            <button className="compare-button">+ Compare</button>
          </div>

          {/* META */}
          <div className="product-meta">
            <p>
              <span>SKU</span>
              SS001
            </p>

            <p>
              <span>Category</span>
              Sofas
            </p>

            <p>
              <span>Tags</span>
              Sofa, Chair, Home
            </p>

            <p>
              <span>Share</span>
              Facebook &nbsp; LinkedIn &nbsp; Twitter
            </p>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="product-tabs">
        <div className="tab-buttons">
          <button className="active">Description</button>

          <button>Additional Information</button>

          <button>Reviews [5]</button>
        </div>

        <div className="description-content">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Asgaard sofa
            is designed for people who love comfort without sacrificing style.
          </p>

          <p>
            The sofa has a beautiful balance between a soft seating experience
            and a clean modern silhouette.
          </p>

          <div className="description-images">
            <ImagePlaceholder />
            <ImagePlaceholder />
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="related-section">
        <h2>Related Products</h2>

        <div className="related-grid">
          {relatedProducts.map((product) => (
            <article className="related-card" key={product.id}>
              <div className="related-image">
                <ImagePlaceholder />

                {product.badge && (
                  <span className="related-badge">{product.badge}</span>
                )}
              </div>

              <h3>{product.name}</h3>

              <p>{product.category}</p>

              <strong>{product.price}</strong>

              {product.oldPrice && <s>{product.oldPrice}</s>}
            </article>
          ))}
        </div>
      </section>

      {/* CART DRAWER */}
      {cartOpen && (
        <>
          <div className="drawer-backdrop" onClick={() => setCartOpen(false)} />

          <aside className="cart-drawer">
            <div className="drawer-header">
              <h2>Shopping Cart</h2>

              <button onClick={() => setCartOpen(false)}>×</button>
            </div>

            <div className="drawer-product">
              <ImagePlaceholder />

              <div>
                <h3>Asgaard sofa</h3>

                <p>{quantity} × Rs. 250,000.00</p>
              </div>
            </div>

            <div className="drawer-total">
              <span>Subtotal</span>

              <strong>Rs. 250,000.00</strong>
            </div>

            <div className="drawer-actions">
              <a href="/cart">Cart</a>

              <a href="/checkout">Checkout</a>

              <a href="/comparison">Comparison</a>
            </div>
          </aside>
        </>
      )}
    </main>
  );
};

export default Product;
