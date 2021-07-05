import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const TopBarDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
  ${props => (props.type === 'container-left' ? `
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
  ` : null)}
  ${props => (props.type === 'container-center' ? `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
  ` : null)}
  ${props => (props.type === 'container-right' ? `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
  ` : null)}
    
`;

const Span = styled.span`
  ${props => (props.type === 'container-left' ? `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  ` : null)}
  ${props => (props.type === 'container-center' ? `
    cursor: pointer;
    margin-right: 5%;
    &:last-child{
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  ` : null)}
  ${props => (props.type === 'container-right' ? `
    cursor: pointer;
  ` : null)}
`;
const TopBar = () => {
  return (
    <TopBarDiv>
      <Container>
        <Container type="container-left">
          <Span type="container-left">TOPICS</Span><Span type="container-left">SEARCH</Span>
        </Container>
        <Container type="container-center">
          <Span type="container-center">GENERAL</Span><Span type="container-center">BROWNBAG</Span><Span type="center">RANDOM</Span><Span type="center">MUSIC</Span><Span type="center">ANNOUNCEMENTS</Span>
        </Container>
        <Container type="container-right">
          <Span type="container-right">LOG IN</Span>
        </Container>
      </Container>
    </TopBarDiv>
  )
}

export default TopBar;