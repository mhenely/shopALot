import styled from "styled-components";


export const SmallImageContainer = styled.div`
  display: grid 
  margin-top: 1rem; 
  grid-template-columns: repeat(2, minmax(0, 1fr)); 
  gap: 1rem; 

  @media (min-width: 640px) { 
    margin-top: 1.5rem; 
  gap: 1.5rem; 
  }

  @media (min-width: 1024px) { 
    margin-top: 2rem; 
  gap: 2rem; 
  }
`