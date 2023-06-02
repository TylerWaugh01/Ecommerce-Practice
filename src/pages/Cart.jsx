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
`
const Top = styled.div`
padding-left: 30;
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
       <Top></Top>
       <Bottom></Bottom>
        </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart