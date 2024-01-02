import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Code,
  CardFooter,
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

type QuestionsProps = {
  level: string
  title: string
  text: string
  color: string
}

const levelQuestion = {
  principiante: 'principiante',
  intermedio: 'intermedio',
  avanzado: 'avanzado',
}

const PropsQuestions: React.FC<QuestionsProps> = ({
  level,
  title,
  text,
  color,
}) => {
  return (
    <Card>
      <CardHeader pb="0px">
        <Code colorScheme={color} textTransform="uppercase">
          {level}
        </Code>
      </CardHeader>

      <CardBody>
        <Stack>
          <Box>
            <Heading fontSize="1.1rem">{title}</Heading>
            <Text pt="2" fontSize="sm">
              {text}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter pt="0px" color="red" textAlign="left">
        <Link
          to={{
            pathname: 'React',
            search: `?respuesta = ${title}`,
          }}
        >
          Leer mas
        </Link>
      </CardFooter>
    </Card>
  )
}
export const Questions = () => {
  return (
    <Box>
      <SimpleGrid columns={3} spacing={5}>
        <PropsQuestions
          level={levelQuestion.principiante}
          title="Como cancelar una peticion fetch"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae hic velit nihil quibusdam dolorem ut et? Maiores, vitae nulla."
          color="green"
        />
        <PropsQuestions
          level={levelQuestion.intermedio}
          title="Es react una biblioteca o framework"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae hic velit nihil quibusdam dolorem ut et? Maiores, vitae nulla."
          color="yellow"
        />
        <PropsQuestions
          level={levelQuestion.avanzado}
          title="¿Que hace el hook useld?"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae hic velit nihil quibusdam dolorem ut et? Maiores, vitae nulla."
          color="red"
        />
      </SimpleGrid>
    </Box>
  )
}
