import "./Cart.css";

const Cart = () => {
  return (
    <main className="cart-page">

      <header className="cart-hero">
        <h1>Cart</h1>

        <div>
          <a href="/">Home</a>
          {" › "}
          <span>Cart</span>
        </div>
      </header>

      <section className="cart-layout">

        <div className="cart-items">

          <div className="cart-head">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
            <span></span>
          </div>

          <div className="cart-item">

            {/* IMAGE REMINDER */}
            <div className="cart-image">
              Product Image
            </div>

            <div className="cart-name">
              Asgaard sofa
            </div>

            <div>
              Rs. 250,000.00
            </div>

            <input
              type="number"
              min="1"
              defaultValue="1"
            />

            <div>
              Rs. 250,000.00
            </div>

            <button>
              ×
            </button>

          </div>

        </div>

        <aside className="cart-total">

          <h2>
            Cart Totals
          </h2>

          <div>
            <span>
              Subtotal
            </span>

            <strong>
              Rs. 250,000.00
            </strong>
          </div>

          <div>
            <span>
              Total
            </span>

            <strong className="gold">
              Rs. 250,000.00
            </strong>
          </div>

          <a href="/checkout">
            Check Out
          </a>

        </aside>

      </section>

    </main>
  );
};

export default Cart;