import React from 'react';
import styled from "styled-components"

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const MyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
    @media (min-width: 1280px) {
      width: 1280px;
    }
    h1{
      font-size: 60px;
      font-family: Didot, serif;
      font-weight: bold;
      flex: 8;
      text-align: center;
      color: #000;}
  `;

  const Span = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  ${props => (props.type === 'date' ? `
    margin-left: 25px;
    flex: 1;
  ` : null)}
  ${props => (props.banana === 'temp' ? `
    text-align: right;
    margin-right: 25px;
    flex: 1;
  ` : null)}
`;


const Header = () => {
  return (
    <MyHeader>
      <Span type="date">MARCH 32, 2018</Span>
      <h1>Lambda Times</h1>
      <Span banana="temp">98°</Span>
    </MyHeader>
  )
}

export default Header