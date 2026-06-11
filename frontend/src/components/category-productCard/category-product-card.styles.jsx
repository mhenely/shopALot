import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%; 
  display: flex; 
  flex-direction: column; 
  height: 350px; 
  align-items: center; 
  position: relative; 
  
  img { 
    width: 100%; 
    height: 95%; 
    object-fit: cover; 
    margin-bottom: 5px; 
  } 
  
  button { 
    width: 80%; 
    opacity: 0.7; 
    position: absolute; 
    top: 255px; 
    display: none; 
  } 
  
  &:hover { 
    img { 
      opacity: 0.8; 
    } 
    button 
    { 
      opacity: 0.85; 
      display: flex; 
    } 
  } 
`;

export const Footer = styled.div`
  width: 100%; 
  height: 5%; 
  display: flex; 
  justify-content: space-between; 
  font-size: 18px; 
`;

export const Name = styled.span`
  margin-top: .25rem; 
  font-size: 0.875rem;
  line-height: 1.25rem; 
  color: #374151; 
`;

export const Button = styled.button`
  // min-width: 165px; 
  width: auto; 
  height: 50px; 
  letter-spacing: 0.5px; 
  line-height: 50px; 
  padding: 0 35px 0 35px; 
  font-size: 1.125rem; 
  background-color: black; 
  color: white; 
  text-transform: uppercase; 
  font-family: 'Open Sans Condensed'; 
  font-weight: bolder; 
  border: none; 
  cursor: pointer; 
  display: flex; 
  justify-content: center;
  aligh-items: center; 
  
  &:hover { 
    background-color: white; 
    color: black; 
    border: 1px solid black; 
`;

export const Price = styled.span`
  margin-top: 0.25rem; 
  font-size: 1.125rem;
  line-height: 1.75rem; 
  font-weight: 500; 
  color: #111827; 
`;