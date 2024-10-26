/* eslint-disable react/prop-types */

import backgroundImage from "../../assets/image/bg-shadow.png";
import photos from "../../assets/image/banner-main.png";
const Headers = ({ handleClaim }) => (
  <div className="max-w-7xl mx-auto bg-black rounded-2xl overflow-hidden mb-20">
    <header
      style={{
        padding: "50px",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div className="flex justify-center mb-5">
        <img src={photos} alt="" />
      </div>
      <h1 className="text-5xl font-bold mb-5">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-xl font-bold text-gray-400 mb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <button className="btn btn-outline btn-warning"  
        onClick={handleClaim}
      >
        Claim Free Credit
      </button>
    </header>
  </div>
);

export default Headers;
