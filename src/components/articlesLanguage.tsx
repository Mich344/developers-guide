import React from 'react'

/* eslint-disable no-unused-vars */
import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Link,
  Divider,
  Center,
  Image,
  Stack,
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import Html from '../svg/Html.svg'
import Php from '../svg/Php.svg'
import Js from '../svg/Javascript.svg'
import Java from '../svg/Java.svg'
import Cmas from '../svg/C++.svg'
import Typescript from '../svg/Typescript.svg'
import Python from '../svg/Python.svg'

type CardArticle = {
  image: string
  title: string
  text: string
  color?: string
}

const PropsArticle: React.FC<CardArticle> = ({ image, title, text, color }) => {
  return (
    <Box w="220px">
      <Card
        bg="linear-gradient(180deg, rgba(176,176,176,0.12572951543898814) 0%, rgba(255,255,255,1) 77%);"
        textAlign="center"
        borderRadius="10px"
        display="flex"
        justifyContent="space-between"
        _hover={{
          boxShadow: `0px 0px 10px 1px ${color}`,
          cursor: 'pointer',
        }}
      >
        <CardHeader>
          <Center>
            <Image src={image} w="80px" h="80px" />
          </Center>
        </CardHeader>
        <CardBody py="0px">
          <Heading size="md" pb="10px">
            {title}
          </Heading>
          <Text pb="15px">
            <strong>{text}</strong>
          </Text>
        </CardBody>
        <Divider borderColor="#e5e5e5" />
        <Link>
          <CardFooter
            borderRadius="0px 0px 10px 10px"
            p="7px"
            bg="white"
            textAlign="center"
            display="grid"
          >
            <Text>
              Ver mas <ExternalLinkIcon mt="-3px" />
            </Text>
          </CardFooter>
        </Link>
      </Card>
    </Box>
  )
}

export const ArticlesLanguaje = () => {
  return (
    <Box>
      <Stack>
        <Heading textAlign="center">Articles</Heading>
        <Box pb="50px">
          <Heading fontSize="1.5rem">Language Programming</Heading>
        </Box>
      </Stack>
      <SimpleGrid spacing={5} columns={4}>
        <PropsArticle image={Php} title="Php" text="Language" color="#777BB3" />
        <PropsArticle
          image={Js}
          title="Javascript"
          text="Language"
          color="#FFDF00"
        />
        <PropsArticle
          image={Typescript}
          title="Typescript"
          text="Language"
          color="#3178C6"
        />
        <PropsArticle
          image={Java}
          title="Java"
          text="Language"
          color="#DE8E2F"
        />
        <PropsArticle
          image={Cmas}
          title="C++"
          text="Language"
          color="#659AD2"
        />
        <PropsArticle
          image={Python}
          title="Python"
          text="Language"
          color="#FFD849"
        />
        {/* <PropsArticle image={Html} title="Html" text="HyperText Language" /> */}
      </SimpleGrid>
    </Box>
  )
}
