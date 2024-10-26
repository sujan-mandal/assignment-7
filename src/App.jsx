import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Headers from "./components/Header/Headers";
import Navbar from "./components/Header/Navbar";
import PlayersSection from "./components/PlayersSection/PlayersSection";
import { toast } from "react-toastify";

function App() {
  const [balance, setBalance] = useState(0);

  const handleClaim = () => {
    const claimed = 6000000;
    setBalance(balance + claimed);
    toast.success(`You have claimed ${claimed} coins.`);
  };

  const handlePurchasesPlayer = (amount) => {
    if (Number(balance) < Number(amount)) {
      toast.warning("Insufficient balance!");

      return false;
    }

    setBalance(balance - amount);
    return true;
  };

  return (
    <>
      <Navbar balance={balance} />
      <Headers handleClaim={handleClaim} />

      <PlayersSection handlePurchases={handlePurchasesPlayer} />

      <Footer />
    </>
  );
}

export default App;
