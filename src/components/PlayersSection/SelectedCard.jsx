import { RiDeleteBin5Line } from "react-icons/ri";
import PropTypes from "prop-types";
const SelectedCard = ({ data, handleDelete }) => {
  const { author, author_img, id} = data;

  return (
    <div className="flex justify-between border mb-4 rounded-lg p-3">
      <div className="flex">
        <img
          className="h-16 w-16 mx-3 object-cover rounded-lg"
          src={author_img}
          alt=""
        />
        <div>
          <h3 className="text-2xl">{author}</h3>
          <p>Left Hand bat{}</p>
        </div>
      </div>
      <button onClick={() => handleDelete(id)} className="text-2xl mr-4 text-red-500">
      <RiDeleteBin5Line />
      </button>
    </div>
  );
};

SelectedCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default SelectedCard;
