import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.135);
`

export const ImageContainer = styled.div`
  margin: 1.8rem 0 1.4rem;
  height: 13.8rem;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 15.8rem;
  }
`

export const Text = styled.div`
  height: 2.5rem;
  padding: 0 1rem;
`
export const Description = styled.div`
  font-size: 1rem;
  line-height: 2;
  margin-bottom: 4rem;
  padding: 0 2.5rem;
`

export const Button = styled.div`
  height: 3.2rem;
  font-size: 3.2rem;
  line-height: 1;

  margin-top: auto;

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 3.6rem;
  }
`
