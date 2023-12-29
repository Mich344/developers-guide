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
  Divider,
  Center,
  Image,
  Stack,
} from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import ReactJs from '../svg/React.svg'
import Angular from '../svg/Angular.svg'
import Vuejs from '../svg/Vuejs.svg'
import Net from '../svg/Net.svg'
import Laravel from '../svg/Laravel.svg'
import Django from '../svg/Django.svg'
import Spring from '../svg/Spring.svg'

import { Link } from 'react-router-dom'

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
        <Link
          to={{
            pathname: '/prueba',
            search: `?prueba=${title}`,
          }}
        >
          <CardFooter
            borderRadius="0px 0px 10px 10px  "
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

export const ArticlesFrameworks = () => {
  return (
    <Box>
      <Stack>
        <Box pb="50px">
          <Heading fontSize="1.5rem">Frameworks and Library</Heading>
        </Box>
      </Stack>
      <SimpleGrid spacing={5} columns={4}>
        <PropsArticle
          image={ReactJs}
          title="React"
          text="Library Javascript"
          color="#00CADF"
        />
        <PropsArticle
          image={Angular}
          title="Angular"
          text="Framework"
          color="#E23237"
        />
        <PropsArticle
          image={Django}
          title="Django"
          text="Framework"
          color="#092E20"
        />
        <PropsArticle
          image={Vuejs}
          title="Vue.js"
          text="Framework"
          color="#3FB680"
        />
        <PropsArticle
          image={Laravel}
          title="Laravel"
          text="Framework"
          color="#FF2D1D"
        />
        <PropsArticle
          image={Net}
          title=".Net"
          text="Framework"
          color="#512BD4"
        />
        <PropsArticle
          image={Spring}
          title="Spring"
          text="Framework"
          color="#77BC1F"
        />
      </SimpleGrid>
    </Box>
  )
}
