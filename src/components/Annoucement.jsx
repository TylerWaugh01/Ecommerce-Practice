import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0a12ea;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const Annoucement = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders Over $50</Container>
  )
}
