import styled from "styled-components";

function Property({ stay }) {
  return (
    <Container>
      <img src={stay.photo} alt={stay.title} />
      <Info>
        {stay.superHost && <div className="superhost">Super Host</div>}

        <span className="type">{`${stay.type} ${
          stay.beds ? ". " + stay.beds + " beds" : ""
        } `}</span>
        <div className="rating">
          <span className="material-icons icon">star</span>
          <span>{stay.rating}</span>
        </div>
      </Info>
      <Title>{stay.title}</Title>
    </Container>
  );
}

export default Property;

const Container = styled.div`
  margin-bottom: 40px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    max-height: 269px;
    object-fit: cover;
    border-radius: 24px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  margin-top: 21px;

  .superhost {
    font-size: 12px;
    padding: 8px;
    border: 1px solid #4f4f4f;
    border-radius: 12px;
    margin-right: 11px;
    font-weight: 700;
  }

  .type {
    flex: 1;
    font-size: 14px;
    color: #828282;
  }

  .rating {
    font-size: 14px;
    display: flex;
    align-items: center;
    font-size: 14px;

    .icon {
      font-size: 16px;
      color: #eb5757;
      margin-right: 7px;
    }
  }
`;

const Title = styled.div`
  margin-top: 12px;
  font-weight: 600;
`;
