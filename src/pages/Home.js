import React from 'react'
import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.div`
  background-color: #fff;
  color: #f06078;
  border: 2px solid #f06078;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10px;
  width: 300px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return <HomeWrapper>
    <ContentWrapper>
      <Center>
        <Button>Create a Room</Button>
      </Center>
      <Center>
        <Button>Join Room</Button>
      </Center>
    </ContentWrapper>
  </HomeWrapper>
}

export default Home;