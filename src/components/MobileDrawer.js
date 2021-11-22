import styled from "styled-components";
import { useState } from "react";

function MobileDrawer({ filterStay, toggleDrawer }) {
  const [location, setLocation] = useState("Helsinki");
  const [guest, setGuest] = useState(0);

  let cities = ["Helsinki", "Turku", "Vaasa", "Oulu"];
  return (
    <Container>
      <Head>
        <h4>Edit your search</h4>
        <button onClick={() => toggleDrawer()}>X</button>
      </Head>
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
            value={guest ? guest : ""}
            onChange={(e) => setGuest(e.target.value)}
          />
        </Guest>
      </Filter>
      <LocationList>
        {cities.map((city) => (
          <div onClick={() => setLocation(city)} key={city}>
            <span className="material-icons icon">place</span>
            <span>{city}, Finland</span>
          </div>
        ))}
      </LocationList>
      <SearchButton onClick={() => filterStay(guest, location)}>
        <span className="material-icons">search</span>
        <span>Search</span>
      </SearchButton>
    </Container>
  );
}

export default MobileDrawer;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 632px;
  top: 0;
  background-color: white;
  z-index: 99;
  padding: 18px 22px;
`;

const Filter = styled.div`
  margin-top: 16px;
  width: 100%;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: white;
    border: none;
    font-size: 24px;
  }
`;

const Location = styled.div`
  position: relative;
  border-bottom: 1px solid #ccc;

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

const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;

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

const SearchButton = styled.div`
  position: absolute;
  bottom: 24px;
  background-color: #eb5757;
  padding: 15px 27px;
  border-radius: 16px;
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  margin: auto;
  left: 50%;
  transform: translatex(-50%);

  span:nth-child(1) {
    margin-right: 8px;
  }
`;
