import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
`;

const Title = styled.h1`
`;

const Top = styled.div`
`;

const TopButton = styled.button`
`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
`;


const Cart = () => {
  return (
    <Container>
    <Navbar />
      <Announcement />
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
      
    </Container>
  );
};

export default Cart;
