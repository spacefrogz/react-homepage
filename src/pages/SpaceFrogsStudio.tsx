import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import useWindowDimensions from '../hooks/useWindowDimensions'

const SpaceFrogsStudio = () => {
  const { height } = useWindowDimensions()

  return (
    <Box height={height} display={"flex"} justifyContent={"center"} alignItems={"center"} >
      <Heading color={"#F2F2F2"} fontSize={"7xl"} fontWeight={"thin"}>Space Frogz Studio</Heading>
    </Box>
  )
}

export default SpaceFrogsStudio
