import "./Blog.css";

const posts = [
  {
    id: 1,
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
  },
  {
    id: 2,
    title: "Exploring new ways of decorating",
    date: "03 Aug 2022",
  },
  {
    id: 3,
    title: "Handmade pieces that took time to make",
    date: "18 Jul 2022",
  },
];

const Blog = () => {
  return (
    <main className="blog-page">

      <header className="blog-hero">

        <h1>
          Blog
        </h1>

        <div>
          <a href="/">Home</a>
          {" › "}
          <span>Blog</span>
        </div>

      </header>

      <section className="blog-layout">

        <div className="blog-posts">

          {posts.map((post) => (

            <article
              className="blog-post"
              key={post.id}
            >

              {/* IMAGE REMINDER:
                  Add your blog image here
              */}

              <div className="blog-image">
                Blog Image
              </div>

              <h2>
                {post.title}
              </h2>

              <p className="post-meta">
                Admin • {post.date}
              </p>

              <p>
                Discover ideas, inspiration and
                practical tips for creating beautiful
                interiors. Explore modern furniture
                and thoughtful design choices for your home.
              </p>

              <a href="/blog">
                Read more
              </a>

            </article>

          ))}

          <div className="blog-pagination">

            <button className="active">
              1
            </button>

            <button>
              2
            </button>

            <button>
              3
            </button>

            <button>
              Next
            </button>

          </div>

        </div>

        <aside className="blog-sidebar">

          <input
            type="search"
            placeholder="Search..."
          />

          <h3>
            Categories
          </h3>

          <ul>

            <li>
              Crafts
              <span>2</span>
            </li>

            <li>
              Design
              <span>8</span>
            </li>

            <li>
              Handmade
              <span>7</span>
            </li>

            <li>
              Interior
              <span>1</span>
            </li>

            <li>
              Wood
              <span>6</span>
            </li>

          </ul>

          <h3>
            Recent Posts
          </h3>

          {posts.map((post) => (

            <div
              className="recent-post"
              key={post.id}
            >

              {/* IMAGE REMINDER */}

              <div className="recent-image">
                Image
              </div>

              <div>

                <strong>
                  {post.title}
                </strong>

                <small>
                  {post.date}
                </small>

              </div>

            </div>

          ))}

        </aside>

      </section>

    </main>
  );
};

export default Blog;