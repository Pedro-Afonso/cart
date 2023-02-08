import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Button, Container, Description, ImageContainer, Text } from './styles'

export const CardSkeleton = () => {
  return (
    <Container>
      <ImageContainer>
        <Skeleton height="100%" />
      </ImageContainer>

      <Text>
        <Skeleton borderRadius={4} />
      </Text>

      <Description>
        <Skeleton count={2} borderRadius={4} />
      </Description>
      <Button>
        <Skeleton />
      </Button>
    </Container>
  )
}
