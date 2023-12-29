import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'
import HeaderPage from './menu'
import { Footer } from './footer'

export const Layout = () => {
  return (
    <>
      <HeaderPage />
      <Box as="section">
        <Outlet />
      </Box>
      <Footer />
    </>
  )
}
