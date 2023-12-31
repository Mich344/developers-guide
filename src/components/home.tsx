/* Components Chakra ui */
import {
  Box,
  Heading,
  Text,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'

import { Search2Icon } from '@chakra-ui/icons'

export const Home = () => {
  return (
    <Box>
      <Stack textAlign="center">
        <Heading>
          Developer Resource <br /> Guide
        </Heading>
        <Text>Documenting technologies including frameworks and language</Text>
      </Stack>

      <Stack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Search2Icon color="gray.300" />
          </InputLeftElement>
          <Input type="text" placeholder="Que es react?" />
        </InputGroup>
      </Stack>
    </Box>
  )
}
