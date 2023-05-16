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
flex: 3;
`;

const Summary = styled.div`
flex: 1;
background-color: red;
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
      <Info>
        <Product>
          <ProductDetail></ProductDetail>
          <PriceDetail>
            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
          <Details>
            <ProductName>Jessie Thunder Shoes</ProductName>
          </Details>
          </PriceDetail>
        </Product>
      </Info>
      <Summary>Summary</Summary>
    </Bottom>
    <Footer />
    <Newsletter/>
      <Footer />
      
    </Container>
  );
};

export default Cart;
