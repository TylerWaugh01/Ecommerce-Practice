import styled from "styled-components";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Annoucement from "../components/Annoucement";

const Container = styled.div`
`
const Wrapper = styled.div`
`
const Title = styled.div`
`
const Top = styled.div`
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