import { Box, Stack, Heading } from '@chakra-ui/react'
import ReactPlayer from 'react-player'
export const Found = () => {
  const video = require('../video/video.mp4')
  return (
    <Box>
      {/* <AspectRatio
        w="full"
        h="50vh"
        display="flex"
        position="relative"
        alignItems="center"
        justifyContent="center"
        ratio={1}
        right="0"
        bottom="0"
        zIndex="-1"
        p="0 5%"
      > */}
      <ReactPlayer width="100%" height="100%" url={video} autoPlay muted />
      {/* </AspectRatio> */}
      <Stack position="relative">
        <Box position="absolute" placeSelf="center" bottom="350px">
          <Heading color="red">I am Michel Osorio</Heading>
        </Box>
      </Stack>
    </Box>
  )
}
