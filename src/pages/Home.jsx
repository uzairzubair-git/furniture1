import "./Home.css";

import card1 from "../assets/images/card-1.jpg";
import card2 from "../assets/images/card-2.jpg";

const products = [
  {
    id: 1,
    name: "Syltherine",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    badge: "-30%",
    image: card1,
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    image: card2,
  },
  {
    id: 3,
    name: "Lolito",
    category: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: card1,
  },
  {
    id: 4,
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: "Rp 500.000",
    badge: "New",
    image: card2,
  },
  {
    id: 5,
    name: "Grifo",
    category: "Night lamp",
    price: "Rp 1.500.000",
    image: card1,
  },
  {
    id: 6,
    name: "Muggo",
    category: "Small mug",
    price: "Rp 150.000",
    badge: "New",
    image: card2,
  },
  {
    id: 7,
    name: "Pingky",
    category: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    badge: "-50%",
    image: card1,
  },
  {
    id: 8,
    name: "Potty",
    category: "Minimalist flower pot",
    price: "Rp 500.000",
    badge: "New",
    image: card2,
  },
];

const footerLinks = [
  "Payment Options",
  "Returns",
  "Privacy Policies",
];

const Home = () => {
  // Newsletter submit
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <main className="home-page">

      {/* ================= HERO ================= */}
      <section className="home-hero">
        {/* IMAGE REMINDER:
            Replace this placeholder with your hero image.
        */}

        <div className="hero-placeholder">
          <div className="hero-content">
            <p>New Arrival</p>

            <h1>
              Discover Our
              <br />
              New Collection
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <button type="button">BUY NOW</button>
          </div>
        </div>
      </section>


      {/* ================= RANGE ================= */}
      <section className="range-section">

        <h2>Browse The Range</h2>

        <p>
          Discover our curated collection of modern furniture.
        </p>

        <div className="range-grid">

          <div className="range-card">
            {/* IMAGE REMINDER: Dining room image */}
            <div className="range-image">
              <img src={card1} alt="Dining room" />
            </div>

            <h3>Dining</h3>
          </div>


          <div className="range-card">
            {/* IMAGE REMINDER: Living room image */}
            <div className="range-image">
              <img src={card2} alt="Living room" />
            </div>

            <h3>Living</h3>
          </div>


          <div className="range-card">
            {/* IMAGE REMINDER: Bedroom image */}
            <div className="range-image">
              <img src={card1} alt="Bedroom" />
            </div>

            <h3>Bedroom</h3>
          </div>

        </div>
      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="home-products">

        <h2>Our Products</h2>

        <div className="home-product-grid">

          {products.map((product) => (

            <article
              className="home-product-card"
              key={product.id}
            >

              {/* BADGE */}
              {product.badge && (
                <span
                  className={
                    product.badge === "New"
                      ? "home-badge new-badge"
                      : "home-badge sale-badge"
                  }
                >
                  {product.badge}
                </span>
              )}


              {/* IMAGE */}
              <div className="home-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>


              {/* PRODUCT INFO */}
              <div className="home-product-info">

                <h3>{product.name}</h3>

                <p className="home-category">
                  {product.category}
                </p>


                <div className="home-price">

                  <strong>
                    {product.price}
                  </strong>

                  {product.oldPrice && (
                    <s>
                      {product.oldPrice}
                    </s>
                  )}

                </div>


                <button
                  type="button"
                  className="home-cart-button"
                >
                  Add to cart
                </button>

              </div>

            </article>

          ))}

        </div>


        <button
          type="button"
          className="show-more-button"
        >
          Show More
        </button>

      </section>


      {/* ================= INSPIRATION ================= */}
      <section className="home-inspiration">

        <div className="inspiration-text">

          <h2>
            50+ Beautiful rooms
            <br />
            inspiration
          </h2>

          <p>
            Our designers already made a lot of beautiful
            prototypes of rooms that inspire you.
          </p>

          <button type="button">
            Explore More
          </button>

        </div>


        <div className="inspiration-images">

          {/* IMAGE REMINDER: Room inspiration image */}
          <img
            src={card2}
            alt="Beautiful room"
          />

          {/* IMAGE REMINDER: Second room image */}
          <img
            src={card1}
            alt="Modern interior"
          />

        </div>

      </section>


      {/* ================= GALLERY ================= */}
      <section className="home-gallery">

        <p>#FuniroFurniture</p>

        <h2>
          Share your setup with us
        </h2>


        <div className="gallery-grid">

          {/* IMAGE REMINDER: Replace with gallery image 1 */}
          <img
            src={card1}
            alt="Furniture setup"
          />

          {/* IMAGE REMINDER: Replace with gallery image 2 */}
          <img
            src={card2}
            alt="Furniture setup"
          />

          {/* IMAGE REMINDER: Replace with gallery image 3 */}
          <img
            src={card1}
            alt="Furniture setup"
          />

          {/* IMAGE REMINDER: Replace with gallery image 4 */}
          <img
            src={card2}
            alt="Furniture setup"
          />

          {/* IMAGE REMINDER: Replace with gallery image 5 */}
          <img
            src={card1}
            alt="Furniture setup"
          />

          {/* IMAGE REMINDER: Replace with gallery image 6 */}
          <img
            src={card2}
            alt="Furniture setup"
          />

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-links">

          <h4>Help</h4>

          <ul>

            {footerLinks.map((label) => (

              <li key={label}>
                <a href="/help">
                  {label}
                </a>
              </li>

            ))}

          </ul>

        </div>


        <div className="footer-newsletter">

          <h4>Newsletter</h4>

          <form onSubmit={handleSubscribe}>

            <label
              htmlFor="home-email"
              className="sr-only"
            >
              Email address
            </label>

            <input
              id="home-email"
              type="email"
              required
              placeholder="Enter Your Email Address"
            />

            <button type="submit">
              SUBSCRIBE
            </button>

          </form>

        </div>


        <div className="footer-bottom">

          <p>
            2023 Funiro. All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
};

export default Home;