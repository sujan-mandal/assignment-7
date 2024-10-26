/* eslint-disable react/prop-types */
import { TbCoinFilled } from "react-icons/tb";
import profile from "../../assets/image/logo.png";
const Header = ({ balance }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-5 items-center justify-between text-center p-3">
        <div>
          <img src={profile} alt="" />
        </div>
        <div className="flex flex-wrap justify-center items-center space-x-9 font-bold py-3 text-gray-500">
          <a href="#">Home</a>
          <a href="#">Fixture</a>
          <a href="#">Teams</a>
          <a href="#">Schedules</a>
          <div className="px-3 py-2 text-black font-semibold flex items-center gap-2 border rounded-lg">
            <p>{balance}</p>
            <h2 className="flex items-center gap-1">Coin<TbCoinFilled className="text-amber-500 text-xl" /></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
