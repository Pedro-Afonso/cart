import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-height: 9.5rem;
  border-radius: 0.8rem;
  background-color: #fff;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    min-height: 22rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  width: 100%;
  /* place-items: center; */
  align-items: center;
  justify-items: center;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-auto-rows: min-content min-content auto;
    height: 22rem;
  }
`

export const ImageContainer = styled.div`
  /* place-items: stretch; */
  align-self: stretch;
  justify-self: stretch;
  position: relative;
  margin: 1.8rem 1rem;
  & img {
    object-fit: contain;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 1.6rem 1rem;
    height: 10rem;
    grid-column: 1/5;
  }
`

export const Text = styled.h3`
  font-size: 1.3rem;
  line-height: 1.7rem;
  font-weight: 400;
  color: #2c2c2c;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-column: 1/5;
  }
`

export const QuantityWrapper = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-column: 1/3;
  }
`

export const Price = styled.span`
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 700;
  color: #000;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-column: 3/5;
    height: 3.5rem;
    font-size: 1.5rem;
    line-height: 3.5rem;

    color: #fff;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background-color: #373737;
  }
`

export const CloseButton = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  top: -0.4rem;
  right: -0.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.1s ease-in;
  &:hover {
    color: grey;
  }
  & svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 3.5rem;
    height: 3.5rem;
    position: absolute;
    top: 0;
    right: 0;
  }
`
