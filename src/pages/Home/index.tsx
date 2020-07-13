import React from 'react'
import { ScrollView, Dimensions } from 'react-native'

import {
  Container,
  Header,
  HeaderTitle,
  Board,
  BoardContainer,
  BoardItem,
  BoardTextTitle,
  BoardTextCount,
  Content
} from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Covid em Bandeirantes</HeaderTitle>
      </Header>
      <Board>
        <BoardContainer>
          <BoardItem>
            <BoardTextTitle>Confirmados</BoardTextTitle>
            <BoardTextCount>336,851</BoardTextCount>
          </BoardItem>
          <BoardItem>
            <BoardTextTitle>Obitos</BoardTextTitle>
            <BoardTextCount>336,851</BoardTextCount>
          </BoardItem>
        </BoardContainer>
      </Board>
      <Board>
        <BoardContainer>
          <BoardItem>
            <BoardTextTitle>Recuperados</BoardTextTitle>
            <BoardTextCount>336,851</BoardTextCount>
          </BoardItem>
          <BoardItem>
            <BoardTextTitle>Suspeitos</BoardTextTitle>
            <BoardTextCount>336,851</BoardTextCount>
          </BoardItem>
        </BoardContainer>
      </Board>
      <Content></Content>
    </Container>
  )
}

export default Home
