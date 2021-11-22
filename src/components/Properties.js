import styled from "styled-components";
import Property from "./Property";

function Properties({ stays }) {
  return (
    <Container>
      <Title>
        <h2>Stays in Finland</h2>
        <span>{stays.length > 12 ? "12+" : stays.length} stays</span>
      </Title>
      <PropertyContainer>
        {stays.map((stay, index) => (
          <Property stay={stay} key={index} />
        ))}
      </PropertyContainer>
    </Container>
  );
}

export default Properties;

const Container = styled.div`
  margin-top: 61px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 14px;
    color: #4f4f4f;
  }
`;

const PropertyContainer = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 34px;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
