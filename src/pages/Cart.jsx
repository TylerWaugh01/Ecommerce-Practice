import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Annoucement from "../components/Annoucement";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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

const TopTexts = styled.div``;

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

const Product = styled.div`
`;

const ProductDetail = styled.div`
`;

const Image = styled.img`
`;

const Details = styled.div`
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
`;

const ProductAmountContainer = styled.div`

`;

const ProductAmount = styled.div`

`;

const ProductPrice = styled.div`

`;

const Hr = styled.hr`

`;


const SummaryTitle = styled.h1`

`;

const SummaryItem = styled.div`

`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`

`;

const Summary = styled.div`
  flex: 1;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue To The Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(5)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOE
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor/>
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                Product
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Details>
                  <ProductName>
                    <b>Product:</b>T Shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b>93813718293
                  </ProductId>
                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$50</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
