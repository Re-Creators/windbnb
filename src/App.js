import { useState } from "react";
import "./App.css";
import FilterDrawer from "./components/FilterDrawer";
import Header from "./components/Header";
import Properties from "./components/Properties";
import data from "./data/stays.json";
import { CSSTransition } from "react-transition-group";
import ModalOverlay from "./components/ModalOverlay";

function App() {
  const [stays, setStays] = useState([...data]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [city, setCity] = useState("Helsinki");
  const [guest, setGuest] = useState("");

  function filterStay(guest, city) {
    setCity(city);
    setGuest(guest);
    setStays(
      data.filter((stay) => guest <= stay.maxGuests && city === stay.city)
    );

    setShowDrawer(false);
  }
  return (
    <div className="App">
      <CSSTransition
        in={showDrawer}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <FilterDrawer
          filterStay={filterStay}
          toggleDrawer={() => setShowDrawer(false)}
        />
      </CSSTransition>

      <Header
        toggleDrawer={() => setShowDrawer(true)}
        city={city}
        guest={guest}
      />
      <ModalOverlay
        showDrawer={showDrawer}
        toggleDrawer={() => setShowDrawer(false)}
      />
      <Properties stays={stays} />
    </div>
  );
}

export default App;
