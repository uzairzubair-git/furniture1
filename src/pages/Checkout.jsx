import "./Checkout.css";

const Checkout = () => {
  return (
    <main className="checkout-page">

      <header className="checkout-hero">

        <h1>Checkout</h1>

        <div>
          <a href="/">Home</a>
          {" › "}
          <span>Checkout</span>
        </div>

      </header>

      <section className="checkout-layout">

        <form className="billing-form">

          <h2>
            Billing details
          </h2>

          <div className="two-columns">

            <label>
              First Name
              <input type="text" />
            </label>

            <label>
              Last Name
              <input type="text" />
            </label>

          </div>

          <label>
            Company Name (Optional)
            <input type="text" />
          </label>

          <label>
            Country / Region

            <select defaultValue="">
              <option value="" disabled>
                Choose a country
              </option>

              <option>
                Pakistan
              </option>

              <option>
                United Kingdom
              </option>
            </select>

          </label>

          <label>
            Street address
            <input type="text" />
          </label>

          <label>
            Town / City
            <input type="text" />
          </label>

          <label>
            Province
            <input type="text" />
          </label>

          <label>
            ZIP code
            <input type="text" />
          </label>

          <label>
            Phone
            <input type="tel" />
          </label>

          <label>
            Email address
            <input type="email" />
          </label>

          <label>
            Additional information
            <textarea />
          </label>

        </form>

        <aside className="order-summary">

          <div className="summary-row heading">
            <strong>Product</strong>
            <strong>Subtotal</strong>
          </div>

          <div className="summary-row">
            <span>
              Asgaard sofa × 1
            </span>

            <strong>
              Rs. 250,000.00
            </strong>
          </div>

          <div className="summary-row">
            <span>
              Subtotal
            </span>

            <strong>
              Rs. 250,000.00
            </strong>
          </div>

          <div className="summary-row total">
            <span>
              Total
            </span>

            <strong>
              Rs. 250,000.00
            </strong>
          </div>

          <div className="payment-note">

            <strong>
              Direct Bank Transfer
            </strong>

            <p>
              Make your payment directly into our
              bank account. Please use your order ID
              as the payment reference.
            </p>

          </div>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
              defaultChecked
            />

            Direct Bank Transfer

          </label>

          <label className="payment-option">

            <input
              type="radio"
              name="payment"
            />

            Cash On Delivery

          </label>

          <p className="privacy-note">
            Your personal data will be used to
            process your order and support your
            experience throughout this website.
          </p>

          <button className="place-order">
            Place order
          </button>

        </aside>

      </section>

    </main>
  );
};

export default Checkout;