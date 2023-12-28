import React, { useState, useEffect } from 'react'
import {
  Box,
  ChakraProvider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Spacer,
  Stack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

import { Link as Enlace } from 'react-router-dom'

// import Logo from '../../Icons/Svg/Logo.svg'
// import Closed from '../../Icons/Svg/Closed.svg'
// import menu from '../../Icons/Svg/Menu.svg'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const HeaderPage = () => {
  const [isTransparent, setTransparent] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  const Transparent = () => {
    if (window.scrollY > 50) {
      setTransparent(false)
    } else {
      setTransparent(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', Transparent)
    return () => {
      window.addEventListener('scroll', Transparent)
    }
  }, [])

  return (
    <ChakraProvider>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding={4}
        bg={isTransparent ? 'transparent' : 'white'}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        transition="background-color 0.3s"
      >
        <Link href="/">
          <Image
            src="https://th.bing.com/th/id/R.41a0cd3749bb3614ba5938e3a33f0fc6?rik=TzPH1mOV4zcsew&pid=ImgRaw&r=0"
            w="50px"
            h="50px"
            ml="25%"
          />
        </Link>
        <Spacer />

        <Link display={{ base: 'block', md: 'none' }} mt="1%" onClick={onOpen}>
          <Image src="https://th.bing.com/th/id/R.41a0cd3749bb3614ba5938e3a33f0fc6?rik=TzPH1mOV4zcsew&pid=ImgRaw&r=0" />
        </Link>

        <Flex
          display={{ base: 'none', md: 'flex' }}
          fontFamily="Kallisto"
          fontSize="20px"
          textDecoration="none"
          color={isTransparent ? 'red' : 'black'}
        >
          <strong>
            <Link
              mr={30}
              href="#Inicio"
              _hover={{
                color: '#76E4F7',
              }}
            >
              Inicio
            </Link>
            <Link
              mr={30}
              href="#Sobre_mi"
              _hover={{
                color: '#76E4F7',
              }}
            >
              Sobre mi
            </Link>
            <Link
              mr={30}
              href="#Servicios"
              _hover={{
                color: '#76E4F7',
              }}
            >
              Servicios
            </Link>
            <Link
              mr={30}
              href="#Habilidades"
              _hover={{
                color: '#76E4F7',
              }}
            >
              Habilidades
            </Link>
            <Link
              mr={30}
              href="#Proyectos"
              _hover={{
                color: '#76E4F7',
              }}
            >
              Proyectos
            </Link>
            <Link
              mr={30}
              href="#Contacto"
              _hover={{
                color: '#76E4F7',
              }}
            >
              Contacto
            </Link>
            <Menu>
              <MenuButton
                px={4}
                py={1}
                transition="all 0.2s"
                borderRadius="full"
                boxShadow="1px 1px 11px 3px #76E4F7"
                _hover={{ boxShadow: '1px 1px 11px 3px white' }}
              >
                Idioma
              </MenuButton>
              <Enlace
                to={{
                  pathname: '/English',
                }}
              >
                <MenuList
                  bg={isTransparent ? '#333' : 'white'}
                  border="1px solid #333"
                >
                  <MenuItem
                    icon={<ExternalLinkIcon />}
                    _hover={{ color: '#76E4F7' }}
                    command="En"
                    bg={isTransparent ? '#333' : 'white'}
                  >
                    Ingles
                  </MenuItem>
                </MenuList>
              </Enlace>
            </Menu>
          </strong>
        </Flex>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          fontFamily="Kallisto"
          fontSize="20px"
          textDecoration="none"
        ></Flex>
      </Flex>

      {isOpen && (
        <Box
          pos="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          onClick={onClose}
        />
      )}

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <Image
                onClick={onClose}
                src="https://th.bing.com/th/id/R.41a0cd3749bb3614ba5938e3a33f0fc6?rik=TzPH1mOV4zcsew&pid=ImgRaw&r=0"
                ml="90%"
              />
            </DrawerHeader>
            <DrawerBody>
              <Stack fontFamily="Kallisto" fontSize="20px" textAlign="center">
                <Link
                  color="black"
                  w="100%"
                  href="#Inicio"
                  my={5}
                  onClick={onClose}
                  _hover={{
                    color: '#76E4F7',
                  }}
                >
                  Inicio
                </Link>
                <Link
                  color="black"
                  w="100%"
                  href="#Sobre_mi"
                  my={5}
                  onClick={onClose}
                  _hover={{
                    color: '#76E4F7',
                  }}
                >
                  Sobre mi
                </Link>
                <Link
                  color="black"
                  w="100%"
                  href="#Servicios"
                  my={5}
                  onClick={onClose}
                  _hover={{
                    color: '#76E4F7',
                  }}
                >
                  Servicios
                </Link>
                <Link
                  w="100%"
                  href="#Habilidades"
                  my={5}
                  onClick={onClose}
                  _hover={{
                    color: '#76E4F7',
                  }}
                >
                  Habilidades
                </Link>
                <Link
                  color="black"
                  w="100%"
                  href="#Proyectos"
                  my={5}
                  onClick={onClose}
                  _hover={{
                    color: '#76E4F7',
                  }}
                >
                  Proyectos
                </Link>
                <Link
                  color="black"
                  w="100%"
                  href="#Contacto"
                  my={5}
                  onClick={onClose}
                  _hover={{
                    color: '#76E4F7',
                  }}
                >
                  Contacto
                </Link>
                <Menu>
                  <MenuButton
                    px={4}
                    py={1}
                    transition="all 0.2s"
                    borderRadius="full"
                    boxShadow="1px 1px 11px 3px #76E4F7"
                    _hover={{ boxShadow: '1px 1px 11px 3px white' }}
                  >
                    Idioma
                  </MenuButton>
                  <Link href="English">
                    <MenuList
                      bg={isTransparent ? '#333' : 'white'}
                      border="1px solid #333"
                    >
                      <MenuItem
                        icon={<ExternalLinkIcon />}
                        _hover={{ color: '#76E4F7' }}
                        command="En"
                        bg={isTransparent ? '#333' : 'white'}
                      >
                        Ingles
                      </MenuItem>
                    </MenuList>
                  </Link>
                </Menu>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  )
}

export default HeaderPage
