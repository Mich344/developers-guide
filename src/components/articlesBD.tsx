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
import Mysql from '../svg/Mysql.svg'
import MongoDB from '../svg/MongoDB.svg'
import PostgreSQL from '../svg/PostgreSQL.svg'
import DynamoDB from '../svg/DynamoDB.svg'
import Cassandra from '../svg/Cassandra.svg'

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

export const ArticlesBD = () => {
  return (
    <Box>
      <Stack>
        <Box pb="50px">
          <Heading fontSize="1.5rem">Database engines</Heading>
        </Box>
      </Stack>
      <SimpleGrid spacing={5} columns={4}>
        <PropsArticle
          image={Mysql}
          title="MySQL"
          text="Library Javascript"
          color="#0A7A93"
        />
        <PropsArticle
          image={MongoDB}
          title="MongoDB"
          text="Framework"
          color="#4EAA40"
        />
        <PropsArticle
          image={PostgreSQL}
          title="PostgreSQL"
          text="Framework"
          color="#336791"
        />
        <PropsArticle
          image={DynamoDB}
          title="DynamoDB"
          text="Framework"
          color="#2D72B8"
        />
        <PropsArticle
          image={Cassandra}
          title="Cassandra"
          text="Framework"
          color="#BBE6FB"
        />
        {/* <PropsArticle image={Html} title="Html" text="HyperText Language" /> */}
      </SimpleGrid>
    </Box>
  )
}
