export const formatPrice = (price: number): string => {
  const real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  })
  return real.format(price)
}
