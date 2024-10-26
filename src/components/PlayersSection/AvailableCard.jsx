import PropTypes from "prop-types";
const AvailableCard = ({ data }) => {
  const {
    title,
    cover,
    author,
    author_img,
    country,
    Rating,
    Left_Hand_Bat,
    price,
  } = data;

  return (
      <div className="border rounded-xl mb-5 p-5">
      <img
        className="w-full h-80 rounded-xl object-center mb-5"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex mb-6">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={author_img}
          alt=""
        />
        <div className="ml-4 text-center justify-center">
          <h3 className="text-2xl">{author}</h3>
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <p className="font-bold text-gray-500">{country}</p>
        <button className="border p-2 rounded-lg bg-gray-100">
          All-Rounder
        </button>
      </div>
      <hr />
      <h5 className="text-lg font-bold mt-5 mb-3">Rating: {Rating}</h5>
      <h3 className="text-lg font-bold mb-3">Left-Hand-Bat{Left_Hand_Bat}</h3>
      <div className="flex justify-between">
        <div>
          <h4 className="text-lg font-bold mb-5">Price:${price}</h4>
        </div>
        <div>
          <button
            className="p-2 border rounded-lg"
            onClick={() => alert("Button Clicked!")}
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

AvailableCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AvailableCard;
