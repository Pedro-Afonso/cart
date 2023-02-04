import styled from 'styled-components'

export const Content = styled.div`
  padding: 6.4rem 4.7rem 1rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  gap: 2.8rem;
`

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: auto 4.7rem 4rem;
  font-weight: 700;
  font-size: 2.8rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: auto 3.2rem 3.5rem;
  }
`

export const CheckoutButton = styled.button`
  height: 9.7rem;
  width: 100%;
  font-weight: 700;
  font-size: 2.8rem;
  line-height: 1.5rem;
  background-color: #000;
  border: none;
  margin-top: auto;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${props => props.theme.colors.neutral[3]};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 6.6rem;
    font-size: 2rem;
    line-height: 1.5rem;
  }
`
