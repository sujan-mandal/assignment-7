import "./App.css";
import Footer from "./components/Footer";
import Headers from "./components/Header/Headers";
import Navbar from "./components/Header/Navbar";
import PlayersSection from "./components/PlayersSection/PlayersSection";

function App() {
  return (
    <>
      <Navbar />
      <Headers />
      <div>
        <PlayersSection />
      </div>
      
      <Footer />
    </>
  );
}

export default App;
