import logo from "../assets/image/logo.png";
import backgroundImage from "../assets/image/bg-shadow.png";
function Footer() {
  return (
    <div className="max-w-7xl mx-auto mt-24 relative">
      <div className="absolute top-0 right-0 w-full -mt-24">
        <div className="border  w-[90%] mx-auto p-5 rounded-2xl bg-white bg-opacity-10">
          <div className="bg-white rounded-2xl overflow-hidden" >
<div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
      }} className="p-5 grid justify-center">
            <h1 className="text-4xl mb-3 text-black">Subscribe to our Newsletter</h1>
            <p className="text-black">Get the latest updates and news right in your inbox!</p>
            <div className="join mx-auto mt-5">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-1/2 join-item"
              />
              <button type="submit" className="btn btn-primary join-item">
                Subscribe
              </button>
            </div>
        </div>
          </div>
        
      </div>
      </div>
      <div className="bg-black p-10">
      <div className="text-center mt-24 mb-6">
        <img src={logo} alt="Company Logo" className="mx-auto h-28 w-28 object-cover" />
      </div>
      <footer className=" footer mb-5 bg-black text-white">
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
                className="input input-bordered w-1/2 join-item"
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
    </div>
  );
}

export default Footer;
