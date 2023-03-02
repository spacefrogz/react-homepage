import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import useWindowDimensions from '../hooks/useWindowDimensions'

const SpaceFrogsStudio = () => {
  const { height } = useWindowDimensions()

  return (
    <Box fontSize={"7xl"} fontWeight={"thin"} fontFamily={"Synkopy-Regular"} textAlign={"center"} height={height} display={"flex"} justifyContent={"center"} alignItems={"center"} >
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>S</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>p</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>a</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>c</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>e</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>F</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>r</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>o</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>g</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>z</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>S</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>t</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>u</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>d</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>i</Text>
      <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>o</Text>
    </Box>
  )
}

export default SpaceFrogsStudio
