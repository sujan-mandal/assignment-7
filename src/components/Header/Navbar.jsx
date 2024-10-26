import profile from "../../assets/image/logo.png";
const Header = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between text-center p-3">
        <div>
          <img src={profile} alt="" />
        </div>
        <div className="flex space-x-4 font-bold py-3">
          <a href="#">Home</a>
          <a href="#">Fixture</a>
          <a href="#">Teams</a>
          <a href="#">Schedules</a>
                  <div>
                      <h2>Coin</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
