import { BasicLayout } from '@/layouts'
import { CartSidebar, Listing } from '@/components'

export default function Home() {
  return (
    <>
      <BasicLayout>
        <Listing />
        <CartSidebar />
      </BasicLayout>
    </>
  )
}
