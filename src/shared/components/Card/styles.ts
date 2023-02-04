import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  background-color: white;
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.135);
`

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1.4rem 0 1.6rem;
`

export const ImageContainer = styled.div`
  position: relative;
  margin: 1.8rem 0 1.4rem;
  height: 13.8rem;
  & img {
    object-fit: contain;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 15.8rem;
  }
`

export const Text = styled.h3`
  font-size: 1.6rem;
  line-height: 1.9rem;
  font-weight: 400;
  color: #2c2c2c;
  height: 3.8rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`
export const Description = styled.h4`
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 300;
  color: #2c2c2c;
  margin: 0.8rem 1.2rem 1.2rem 1.6rem;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`

export const Price = styled.span`
  padding: 0.4rem 0.6rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: bold;
  background-color: #373737;
  color: #fff;
  border-radius: 0.5rem;
`

export const Button = styled.button`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  height: 3.2rem;
  cursor: pointer;
  margin-top: auto;
  border: none;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${props => props.theme.colors.neutral[1]};
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 3.6rem;
  }
`
