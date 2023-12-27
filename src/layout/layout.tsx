import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Box as="section">
        <Outlet />
      </Box>
    </>
  )
}
