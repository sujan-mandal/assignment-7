/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AvailableCard from "./AvailableCard";
import SelectedCard from "./SelectedCard";
import { toast } from "react-toastify";
const PlayersSection = ({ handlePurchases }) => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);


  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  const handleSelectPlayer = (data) => {
    const isExist = selectedPlayers.find((item) => item.id === data.id);

    if (isExist) {
      return toast.warning("You have already select!");
    } else if (selectedPlayers.length >= 6) {
      return toast.warning("You can't select more than 6 players.");
    }

    const isPurchased = handlePurchases(data.price);
    console.log(isPurchased);
    if (isPurchased) {
      setSelectedPlayers([...selectedPlayers, data]);
      toast.success("You have successfully selected!");
    }
  };

  const handleDelete = (id) => {
    const availablePlayers = selectedPlayers.filter((item) => item.id !== id);
    setSelectedPlayers(availablePlayers);
  };

  return (
    <div className="md:flex max-w-7xl mx-auto">
      <div className="w-full">
        <div className="flex flex-col sm:flex-row w-full justify-between mb-5">
        <div>
          {isAvailable && (
             <h1 className="text-3xl font-bold">
             Available Players: {allPlayers.length}
           </h1>
          )}

          {!isAvailable && (
             <h1 className="text-3xl font-bold">
             Selected Players: ({selectedPlayers.length} / 6 )
           </h1>
          )}
        </div>
          <div className="flex gap-2">
            <button
              className={`btn px-10 ${
                isAvailable && "btn-success"
              }`}
              onClick={() => setIsAvailable(true)}
            >
              Available
            </button>
            <button
              className={`btn px-10  ${
                !isAvailable && "btn-success"
              }`}
              onClick={() => setIsAvailable(false)}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>
        <div>
          {isAvailable && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {allPlayers.map((i) => (
                <AvailableCard
                  handleSelect={handleSelectPlayer}
                  key={i.id}
                  data={i}
                />
              ))}
            </div>
          )}

          {!isAvailable && (
            <div>
              {selectedPlayers.map((i) => (
                <SelectedCard handleDelete={handleDelete} key={i.id} data={i} />
              ))}
              <button className="btn btn-outline mb-5 btn-success" onClick={() => setIsAvailable(true)}>Add More Player</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayersSection;
