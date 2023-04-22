import styled from "styled-components";
import { categories } from "../data";

const Container = styled.div`
  
`;

const Image = styled.img`
`;

const Info = styled.div`
`;

const Title = styled.h1`
`;

const Button = styled.button`
`;

export default function CategoryItem({item}) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
       
        <Button>SHOP NOW</Button>
       <Button>SAVE NOW<NOW></NOW></Button>
      </Info>
    </Container>
  )
}
