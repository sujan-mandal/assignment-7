import logo from "../assets/image/logo.png";
function Footer() {
  return (
    <div className="bg-black p-10 max-w-7xl mx-auto">
      <div className="text-center mb-6">
        <img src={logo} alt="Company Logo" className="mx-auto h-28 w-28 object-cover" />
      </div>
      <footer className=" footer bg-black p-10 text-white">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p>
            We are a passionate team <br /> dedicated to providing the best{" "}
            <br /> services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a href="#" className="link link-hover">
            Home
          </a>
          <a href="#" className="link link-hover">
            Services
          </a>
          <a href="#" className="link link-hover">
            About
          </a>
          <a href="#" className="link link-hover">
            Contact
          </a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">
                Subscribe to our newsletter for the <br /> latest updates.
              </span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button type="submit" className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <hr />
      <p className="text-center text-gray-400 mt-10">@2024 Your Company All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
