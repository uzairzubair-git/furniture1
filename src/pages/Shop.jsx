import { useMemo, useState } from "react";
import "./Shop.css";

const products = [
  { id: 1, name: "Syltherine", category: "Stylish cafe chair", price: 2500000, oldPrice: 3500000, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80", badge: "-30%", badgeType: "sale" },
  { id: 2, name: "Leviosa", category: "Stylish cafe chair", price: 2500000, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=600&q=80" },
  // ...rest of your items, using numeric price / oldPrice
];

const formatPrice = (value) =>
  `Rp ${value.toLocaleString("id-ID")}`;

const SORTS = {
  default: () => 0,
  priceAsc: (a, b) => a.price - b.price,
  priceDesc: (a, b) => b.price - a.price,
  name: (a, b) => a.name.localeCompare(b.name),
};

function ShopHero() {
  return (
    <header className="shop-hero">
      <h1>Shop</h1>
      <nav aria-label="Breadcrumb">
        <a href="/">Home</a> <span aria-hidden="true">›</span> <span>Shop</span>
      </nav>
    </header>
  );
}

function FilterBar({ total, from, to, perPage, onPerPageChange, sort, onSortChange }) {
  return (
    <div className="filter-bar">
      <p>
        Showing {total === 0 ? 0 : from}–{to} of {total} results
      </p>

      <div className="filter-controls">
        <label htmlFor="per-page">Show</label>
        <select id="per-page" value={perPage} onChange={(e) => onPerPageChange(Number(e.target.value))}>
          {[8, 16, 32].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>

        <label htmlFor="sort-by">Sort by</label>
        <select id="sort-by" value={sort} onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="priceAsc">Price: low to high</option>
          <option value="priceDesc">Price: high to low</option>
        </select>
      </div>
    </div>
  );
}

function ProductGrid({ items }) {
  if (items.length === 0) return <p className="empty">No products found.</p>;

  return (
    <ul className="product-grid">
      {items.map((product) => (
        <li key={product.id} className="product-card">
          {product.badge && (
            <span className={`badge badge--${product.badgeType ?? "new"}`}>{product.badge}</span>
          )}

          <img src={product.image} alt={`${product.name} – ${product.category}`} loading="lazy" />

          <h2>{product.name}</h2>
          <p className="category">{product.category}</p>

          <p className="price">
            {formatPrice(product.price)}
            {product.oldPrice && <s className="old-price">{formatPrice(product.oldPrice)}</s>}
          </p>

          <div className="card-actions">
            <button type="button" aria-label={`Add ${product.name} to cart`}>Add to cart</button>
            <button type="button" aria-label={`Compare ${product.name}`}>Compare</button>
            <button type="button" aria-label={`Add ${product.name} to wishlist`}>Like</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Pagination({ page, pageCount, onPageChange }) {
  if (pageCount <= 1) return null;

  return (
    <nav className="pagination" aria-label="Pagination">
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          aria-current={n === page ? "page" : undefined}
          onClick={() => onPageChange(n)}
        >
          {n}
        </button>
      ))}

      <button type="button" disabled={page === pageCount} onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </nav>
  );
}

function Features() {
  const features = [
    { title: "High Quality", text: "Crafted from top materials" },
    { title: "Warranty Protection", text: "Over 2 years" },
    { title: "Free Shipping", text: "Order over 150 $" },
    { title: "24 / 7 Support", text: "Dedicated support" },
  ];

  return (
    <ul className="features">
      {features.map((f) => (
        <li key={f.title}>
          <h3>{f.title}</h3>
          <p>{f.text}</p>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: hook up newsletter API
  };

  return (
    <footer className="footer">
      <form className="subscribe" onSubmit={handleSubscribe}>
        <label htmlFor="shop-email" className="sr-only">Email address</label>
        <input id="shop-email" type="email" required placeholder="Enter Your Email Address" />
        <button type="submit">SUBSCRIBE</button>
      </form>

      <div className="footer-bottom">
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
}

const Shop = () => {
  const [perPage, setPerPage] = useState(8);
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);

  const sorted = useMemo(() => [...products].sort(SORTS[sort]), [sort]);

  const total = sorted.length;
  const pageCount = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(page, pageCount);
  const start = (safePage - 1) * perPage;
  const visible = sorted.slice(start, start + perPage);

  return (
    <div className="app">
      <ShopHero />

      <FilterBar
        total={total}
        from={start + 1}
        to={start + visible.length}
        perPage={perPage}
        onPerPageChange={(n) => { setPerPage(n); setPage(1); }}
        sort={sort}
        onSortChange={(v) => { setSort(v); setPage(1); }}
      />

      <ProductGrid items={visible} />

      <Pagination page={safePage} pageCount={pageCount} onPageChange={setPage} />

      <Features />

      <Footer />
    </div>
  );
};

export default Shop;
