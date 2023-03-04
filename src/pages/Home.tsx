import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { Box, Text } from '@chakra-ui/react'
import SpaceFrogzStudio from "../components/SpaceFrogzStudio"
import useWindowDimensions from "../hooks/useWindowDimensions"

const Home = () => {
  const { height } = useWindowDimensions()

  return (
    <Box>
      <SpaceFrogzStudio />
      <Box height={height} backgroundColor={"#aa4b6b"}></Box>
      <Box height={height} backgroundColor={"#6b6b83"}></Box>
      <Box height={height} backgroundColor={"#3b8d99"}></Box>
      <Zoom>
        <Text fontFamily={"GenosRoman-Medium"} fontSize={16} bgClip={"text"} bgGradient={"linear(to-r, #aa4b6b, #6b6b83, #3b8d99)"} textAlign={"center"}>Built with ❤️‍🔥 by Horik • 2023</Text>
      </Zoom>
    </Box>
  )
}

export default Home
