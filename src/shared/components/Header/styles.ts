import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 0 6.4rem;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 4.8rem;
    padding: 0 2rem;
  }
`

export const Logo = styled.h1`
  font-size: 4rem;
  line-height: 1.9rem;
  font-weight: 600;
  text-transform: uppercase;
  & span {
    font-size: 2rem;
    line-height: 1.9rem;
    font-weight: 300;
    text-transform: capitalize;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 3.2rem;
    & span {
      font-size: 1.6rem;
    }
  }
`
