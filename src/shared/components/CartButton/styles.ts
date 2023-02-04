import styled from 'styled-components'

export const Button = styled.button`
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 700;
  height: 4.5rem;
  width: 9rem;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 2.6rem;
    width: 5.2rem;
    font-size: 1.2rem;
    line-height: 1.5rem;

    & svg {
      height: 1rem;
      width: 1rem;
    }
  }
`
