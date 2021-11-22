import { useState } from "react";
import styled from "styled-components";

function DesktopDrawer({ filterStay }) {
  const [location, setLocation] = useState("Helsinki");
  const [guest, setGuest] = useState(0);

  let cities = ["Helsinki", "Turku", "Vaasa", "Oulu"];

  return (
    <>
      <Drawer>
        <Filter>
          <Location>
            <span>location</span>
            <input
              type="text"
              value={`${location}, Finland`}
              onChange={(e) => setLocation(e.target.value)}
              readOnly={true}
            />
          </Location>
          <Guest>
            <span>Guest</span>
            <input
              type="number"
              min={0}
              placeholder="Add guests"
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
            />
          </Guest>
          <Search>
            <button onClick={() => filterStay(guest, location)}>
              <span className="material-icons icon">search</span>
              <span className="text">Search</span>
            </button>
          </Search>
        </Filter>
        <LocationList>
          {cities.map((city) => (
            <div onClick={() => setLocation(city)} key={city}>
              <span className="material-icons icon">place</span>
              <span>{city}, Finland</span>
            </div>
          ))}
        </LocationList>
      </Drawer>
    </>
  );
}

export default DesktopDrawer;
const Drawer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 460px;
  top: 0;
  background-color: white;
  padding: 93px 96px;
  z-index: 99;
`;

const Filter = styled.div`
  width: 100%;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-radius: 16px;
  grid-gap: 2px;
`;

const Location = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    right: -2px;
    background-color: #ccc;
  }
  span {
    position: absolute;
    margin-left: 27px;
    top: 12px;
    font-size: 9px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.5;
  }

  input {
    width: 100%;
    padding: 30px 27px 10px 27px;
    border-radius: 16px;
    border: none;
  }
`;

const Guest = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    right: -2px;
    background-color: #ccc;
  }

  span {
    position: absolute;
    margin-left: 27px;
    top: 12px;
    font-size: 9px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2.5;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 30px 27px 10px 27px;
    border-radius: 16px;
    border: none;
  }
`;

const Search = styled.div`
  padding: 4px;
  background-color: white;
  border: none;

  button {
    cursor: pointer;

    margin: auto;
    background-color: #eb5757;
    height: 100%;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 15px 25px;
    border-radius: 16px;

    .icon {
      margin-right: 4px;
    }
  }
`;

const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 18px 16px;
    border-radius: 16px;

    &:hover {
      background-color: #ccc;
    }

    .icon {
      margin-right: 6px;
    }
  }
`;
