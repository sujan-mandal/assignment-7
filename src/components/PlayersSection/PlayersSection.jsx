import { useEffect, useState } from "react";
import AvailableCard from "./AvailableCard";
import SelectedCard from "./SelectedCard";
const PlayersSection = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [allPlayers, setAllPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setAllPlayers(data));
  }, []);

  return (
    <div className="md:flex max-w-7xl mx-auto">
      <div className="w-full">
        <div className="flex w-full justify-between mb-5">
          <h1 className="text-3xl font-bold">
            Available Players: {allPlayers.length}
          </h1>
          <div className="flex gap-2">
            <button
              className={`border px-5 py-2 rounded-lg ${
                isAvailable && "bg-lime-400"
              }`}
              onClick={() => setIsAvailable(true)}
            >
              Available
            </button>
            <button
              className={`border px-5 py-2 rounded-lg ${
                !isAvailable && "bg-lime-400"
              }`}
              onClick={() => setIsAvailable(false)}
            >
              Selected
            </button>
          </div>
        </div>
        <div>
          {isAvailable && (
            <div className="blogs-container">
              {allPlayers.map((i) => (
                <AvailableCard key={i.id} data={i} />
              ))}
            </div>
          )}

          {!isAvailable && (
            <div>
              {allPlayers.map((i) => (
                <SelectedCard key={i.id} data={i} />
              ))}

              <button>Add More Player</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayersSection;
