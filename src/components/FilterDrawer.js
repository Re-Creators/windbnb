import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DesktopDrawer from "./DesktopDrawer";
import MobileDrawer from "./MobileDrawer";

function FilterDrawer({ filterStay, toggleDrawer }) {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return ReactDOM.createPortal(
    width < breakpoint ? (
      <MobileDrawer filterStay={filterStay} toggleDrawer={toggleDrawer} />
    ) : (
      <DesktopDrawer filterStay={filterStay} />
    ),
    document.getElementById("portal")
  );
}

export default FilterDrawer;
