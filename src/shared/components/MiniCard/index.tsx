import { AiFillCloseCircle } from 'react-icons/ai'
import Image from 'next/image'
import { FC } from 'react'

import { removeProduct } from '@/slices/cartSlice'
import { CounterControl } from '@/components'
import { useAppDispatch } from '@/hooks'
import { formatPrice } from '@/utils'
import { IProduct } from '@/services'

import {
  Grid,
  Text,
  Price,
  Container,
  ImageContainer,
  QuantityWrapper,
  CloseButton
} from './styles'

interface IMiniCardProps {
  product: IProduct
  quantity: number
}
export const MiniCard: FC<IMiniCardProps> = ({ product, quantity }) => {
  const { id, name, photo, price } = product

  const dispatch = useAppDispatch()

  const handleOnCloseButton = () => {
    const isConfirmed = confirm(`Deseja remover ${name} do carrinho?`)
    if (isConfirmed) {
      dispatch(removeProduct(id))
    }
  }

  return (
    <Container data-testid="mini-card-id">
      <CloseButton data-testid="remove-item-id" onClick={handleOnCloseButton}>
        <AiFillCloseCircle />
      </CloseButton>
      <Grid>
        <ImageContainer>
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 768px) 70rem,
              200rem"
          />
        </ImageContainer>
        <Text>{name}</Text>
        <QuantityWrapper>
          <CounterControl product={product} quantity={quantity} />
        </QuantityWrapper>
        <Price data-testid="price-id">
          {formatPrice(Number(price) * quantity)}
        </Price>
      </Grid>
    </Container>
  )
}
