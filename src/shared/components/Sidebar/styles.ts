import styled from 'styled-components'

export const Container = styled.div`
  width: 48.6rem;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 33rem;
  }
`

export const CloseButton = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.1s ease-in;

  &:hover {
    color: white;
  }
`

export const Header = styled.div`
  position: relative;
  margin: 3.6rem 3.6rem 0 4.7rem;
`

export const Title = styled.h2`
  font-size: 2.7rem;
  line-height: 3.3rem;
  font-weight: 700;
`
