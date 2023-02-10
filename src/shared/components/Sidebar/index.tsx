import { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import { AiFillCloseCircle } from 'react-icons/ai'

import { EPortalLocation, Portal } from '@/components'

import { CloseButton, Container, Header, Title } from './styles'

interface ISidebarProps {
  isOpen?: boolean
  onClose: () => void
  title: ReactNode | string
  children: ReactNode
}

export const Sidebar: FC<ISidebarProps> = ({
  isOpen = false,
  onClose,
  title,
  children
}) => {
  const router = useRouter()

  const { isReady } = router

  const sidebarWrapper = isOpen ? (
    <>
      <Container data-testid="sidebar-id">
        <Header>
          <Title>{title}</Title>
          <CloseButton aria-label="close" onClick={onClose}>
            <AiFillCloseCircle size="3.8rem" />
          </CloseButton>
        </Header>
        {children}
      </Container>
      <div role="none" onClick={onClose}></div>
    </>
  ) : null

  if (isReady) {
    return Portal({
      wrapper: sidebarWrapper,
      portalLocation: EPortalLocation.SIDEBAR
    })
  } else {
    return null
  }
}
