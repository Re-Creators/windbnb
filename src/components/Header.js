import styled from "styled-components";

function Header({ toggleDrawer, city, guest }) {
  return (
    <Container>
      <img src="/images/bnblogo.svg" alt="Winbnb Loog" />
      <SearchContainer onClick={toggleDrawer}>
        <span>{city}, Finland</span>
        <span>{guest !== "" ? guest : "Add Guest"}</span>
        <span className="material-icons icon">search</span>
      </SearchContainer>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    @media (max-width: 768px) {
      width: 96px;
    }
  }
`;

const SearchContainer = styled.div`
  width: 297px;
  display: grid;
  grid-template-columns: 2.5fr 2fr 1fr;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
  border-radius: 16px;
  justify-item: center;
  text-align: center;

  @media (max-width: 768px) {
    margin: auto;
    margin-top: 39px;
  }

  span:nth-child(1),
  span:nth-child(2) {
    border-right: 1px solid #ccc;
    padding: 1rem;
    font-size: 14px;

    @media (max-width: 768px) {
      padding: 19px 0.8rem;
    }
  }

  .icon {
    font-size: 24px;
    color: #eb5757;

    @media (max-width: 768px) {
      padding: 18px;
    }
  }
`;
