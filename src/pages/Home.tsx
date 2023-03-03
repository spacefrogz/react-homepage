import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { Box, Text } from '@chakra-ui/react'
import SpaceFrogzStudio from "../components/SpaceFrogzStudio"

const Home = () => {
  return (
    <Box>
      <SpaceFrogzStudio />
      <Zoom>
        <Text fontFamily={"GenosRoman-Medium"} fontSize={16} bgClip={"text"} bgGradient={"linear(to-l, #aa4b6b, #6b6b83, #3b8d99)"} textAlign={"center"}>Built with ❤️‍🔥 by Horik</Text>
      </Zoom>
    </Box >
  )
}

export default Home
