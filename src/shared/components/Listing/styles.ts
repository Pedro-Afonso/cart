import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(21.8rem, max-content));
  gap: 2.2rem;
  justify-content: center;
  width: 100%;
  max-width: 93.8rem;
  margin: 11.6rem auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: 1.8rem;
    margin-bottom: 3.8rem;
  }
`
