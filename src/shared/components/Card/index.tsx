import { FC } from 'react'
import Image from 'next/image'

import { formatPrice } from '@/utils'

import {
  Box,
  Button,
  Container,
  Description,
  ImageContainer,
  Price,
  Text
} from './styles'

import { IProduct } from '@/services'
import { useAppDispatch } from '@/hooks'
import { addProduct } from '@/slices/cartSlice'

interface ICardProps {
  product: IProduct
}

export const Card: FC<ICardProps> = ({ product }) => {
  const { name, price, description, photo } = product

  const dispatch = useAppDispatch()

  const onClick = () => {
    dispatch(addProduct(product))
  }

  return (
    <Container data-testid="card-id">
      <ImageContainer>
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 768px) 250rem,
              200rem"
        />
      </ImageContainer>
      <Box>
        <Text>{name}</Text>
        <Price data-testid="price-id">{formatPrice(Number(price))}</Price>
      </Box>
      <Description>{description}</Description>
      <Button onClick={onClick}>Comprar</Button>
    </Container>
  )
}
