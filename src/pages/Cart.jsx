import styled from "styled-components";
import Annoucement from "../components/Annoucement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
const Container = styled.div``;


const Wrapper = styled.div`
padding: 20px;
text-align: Center;
`;

const Title = styled.h1`
font-weight: 300;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
`;

const Summary = styled.div`
`;




const Cart = () => {
  return (
    <Container>
    <Navbar />
    <Annoucement/>
    <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
    </Wrapper>
    <Bottom>
      <Info>Info</Info>
      <Summary>Summary</Summary>
    </Bottom>
    <Footer />
    <Newsletter/>
      <Footer />
      
    </Container>
  );
};

export default Cart;
