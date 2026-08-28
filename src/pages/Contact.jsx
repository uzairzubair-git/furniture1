import "./Contact.css";

const Contact = () => {
  return (
    <main className="contact-page">

      <header className="contact-hero">

        <h1>
          Contact
        </h1>

        <div>
          <a href="/">Home</a>
          {" › "}
          <span>Contact</span>
        </div>

      </header>

      <section className="contact-content">

        <div className="contact-heading">

          <h2>
            Get In Touch With Us
          </h2>

          <p>
            For more information about our products
            and services, please feel free to drop us
            an email. Our staff is always here to help you.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="info-item">

              <span className="info-icon">
                ⌖
              </span>

              <div>
                <h3>Address</h3>

                <p>
                  236 5th SE Avenue,
                  New York NY10000,
                  United States
                </p>
              </div>

            </div>

            <div className="info-item">

              <span className="info-icon">
                ☎
              </span>

              <div>

                <h3>Phone</h3>

                <p>
                  Mobile: +(84) 546-6789
                </p>

                <p>
                  Hotline: +(84) 456-6789
                </p>

              </div>

            </div>

            <div className="info-item">

              <span className="info-icon">
                ◷
              </span>

              <div>

                <h3>
                  Working Time
                </h3>

                <p>
                  Monday-Friday:
                  9:00 - 22:00
                </p>

                <p>
                  Saturday-Sunday:
                  9:00 - 21:00
                </p>

              </div>

            </div>

          </div>

          <form className="contact-form">

            <label>
              Your name

              <input
                type="text"
                placeholder="Abc"
              />
            </label>

            <label>
              Email address

              <input
                type="email"
                placeholder="Abc@def.com"
              />
            </label>

            <label>
              Subject

              <input
                type="text"
                placeholder="This is an optional"
              />
            </label>

            <label>
              Message

              <textarea
                placeholder="Hi! I'd like to ask about..."
              />

            </label>

            <button type="submit">
              Submit
            </button>

          </form>

        </div>

      </section>

    </main>
  );
};

export default Contact;