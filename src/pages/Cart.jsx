import styled from "styled-components";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Annoucement from "../components/Annoucement";

const Container = styled.div`
`
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
`
const Bottom = styled.div`
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
       <Title>Your Bag</Title>
       <Top>

        <TopButton>Continue Shopping</TopButton>
        <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
        <TopButton>Checkout</TopButton>
       </Top>
       <Bottom></Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart