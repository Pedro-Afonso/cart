import { CartButton } from '../CartButton'
import { Container, Logo } from './styles'

export const Header = () => {
  return (
    <Container>
      <Logo>
        Mks <span>Sistemas</span>
      </Logo>
      <CartButton />
    </Container>
  )
}
