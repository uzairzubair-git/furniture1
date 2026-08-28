import "./ProductComparison.css";

const products = [
  {
    name: "Asgaard Sofa",
    price: "Rs. 250,000.00",
    rating: "4.7",
    reviews: "204 Reviews",
  },
  {
    name: "Outdoor Sofa Set",
    price: "Rs. 224,000.00",
    rating: "4.2",
    reviews: "145 Reviews",
  },
];

const ProductComparison = () => {
  return (
    <main className="comparison-page">

      <header className="comparison-hero">

        <h1>
          Product Comparison
        </h1>

        <div>
          <a href="/">Home</a>
          {" › "}
          <span>Comparison</span>
        </div>

      </header>

      <section className="comparison-intro">

        <div className="comparison-add">

          <h2>
            Go to Product page
            <br />
            for more Products
          </h2>

          <a href="/shop">
            View More
          </a>

        </div>

        {products.map((product) => (

          <div
            className="comparison-product"
            key={product.name}
          >

            {/* IMAGE REMINDER */}
            <div className="comparison-image">
              Product Image
            </div>

            <h3>
              {product.name}
            </h3>

            <strong>
              {product.price}
            </strong>

            <div className="comparison-rating">
              ★★★★★
              <span>
                {product.rating}
              </span>
            </div>

            <small>
              {product.reviews}
            </small>

          </div>

        ))}

        <div className="add-product">

          <h3>
            Add A Product
          </h3>

          <select>
            <option>
              Choose a product
            </option>

            <option>
              Syltherine
            </option>

            <option>
              Leviosa
            </option>

            <option>
              Lolito
            </option>
          </select>

        </div>

      </section>

      <section className="comparison-table-wrap">

        <table className="comparison-table">

          <tbody>

            <tr>
              <th>General</th>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>Sales Package</th>
              <td>1 Three Seater Sofa</td>
              <td>1 Sofa Set</td>
            </tr>

            <tr>
              <th>Model Number</th>
              <td>SS001</td>
              <td>SS002</td>
            </tr>

            <tr>
              <th>Secondary Material</th>
              <td>Solid Wood</td>
              <td>Solid Wood</td>
            </tr>

            <tr>
              <th>Configuration</th>
              <td>3 Seater</td>
              <td>3 Seater</td>
            </tr>

            <tr>
              <th>Upholstery Material</th>
              <td>Fabric</td>
              <td>Fabric</td>
            </tr>

            <tr>
              <th>Filling Material</th>
              <td>Foam</td>
              <td>Foam</td>
            </tr>

            <tr>
              <th>Product</th>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <th>Height</th>
              <td>105 cm</td>
              <td>105 cm</td>
            </tr>

            <tr>
              <th>Width</th>
              <td>200 cm</td>
              <td>210 cm</td>
            </tr>

            <tr>
              <th>Depth</th>
              <td>95 cm</td>
              <td>95 cm</td>
            </tr>

            <tr>
              <th>Weight</th>
              <td>45 KG</td>
              <td>48 KG</td>
            </tr>

            <tr>
              <th>Warranty</th>
              <td>1 Year Manufacturing Warranty</td>
              <td>2 Year Manufacturing Warranty</td>
            </tr>

            <tr>
              <th>Warranty Service</th>
              <td>On Site</td>
              <td>On Site</td>
            </tr>

          </tbody>

        </table>

      </section>

    </main>
  );
};

export default ProductComparison;