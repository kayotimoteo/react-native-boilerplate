import { Dimensions } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 0}px;
`
export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: 'Roboto-Bold';
`
export const Board = styled.View`
  padding: 0px 24px;
  flex-direction: row;
`
export const BoardContainer = styled.View`
  flex-direction: row;
  width: 100%;
  border-radius: 5px;
`
export const BoardItem = styled.View`
  flex: 1;
  height: 100px;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background: #ffb259;

  justify-content: space-between;
`
export const BoardTextTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Roboto-Regular';
`
export const BoardTextCount = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: 'Roboto-Bold';
`
export const Content = styled.View`
  flex: 1;
  height: 200px;
  background: white;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`
