import React from 'react'
import Zoom from 'react-reveal/Zoom'
import { Box, Text } from '@chakra-ui/react'
import SpaceFrogzStudio from "../components/SpaceFrogzStudio"
import { colors, rainbowGradient } from "../utils/colors"
import strings from "../utils/strings"
import useWindowDimensions from "../hooks/useWindowDimensions"

const Home = () => {
  const { height } = useWindowDimensions()
  return (
    <Box>
      <Box height={10} bgGradient={rainbowGradient}></Box>
      <SpaceFrogzStudio />
      <Box height={10} bgGradient={rainbowGradient}></Box>
      <Box height={height} justifyContent={"center"} alignItems={"center"} textAlign={"center"} />
      <Zoom>
        <Text fontFamily={"Poppins-Regular"} fontSize={16} color={colors.bej} textAlign={"center"}>{strings.builtByHorik}</Text>
      </Zoom>
    </Box>
  )
}

export default Home
