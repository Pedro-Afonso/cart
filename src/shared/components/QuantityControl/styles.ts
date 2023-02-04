import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 2rem;
  width: 5rem;
  background-color: #fff;
  border: 0.03rem solid #bfbfbf;
  border-radius: 0.4rem;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 3.5rem;
    width: 9.5rem;
  }
`

export const Quantity = styled.span`
  flex: 1;
  font-size: 0.8rem;
  line-height: 2rem;
  font-weight: 400;
  text-align: center;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &::after,
  &::before {
    content: '';
    height: 11px;
    width: 0.1rem;
    background-color: #bfbfbf;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2rem;
  }
`
export const Button = styled.button`
  flex: 1;
  font-size: 1.2rem;
  background-color: #fff;
  border: none;
  border-radius: 0.4rem;
  color: #000;
  cursor: pointer;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 2.2rem;
  }
`
