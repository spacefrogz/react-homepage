//@ts-nocheck
import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { isMobile } from 'react-device-detect'
import Fade from 'react-reveal/Fade';

const SpaceFrogsStudio = () => {
  const { height } = useWindowDimensions()

  console.log("is mobile?", isMobile)

  return (
    <Box>
      <Fade bottom big cascade>
        <Text fontSize={"7xl"} fontWeight={"thin"} fontFamily={"Synkopy-Flipside"} textAlign={"center"} height={height} display={"flex"} justifyContent={"center"} alignItems={"center"} flexWrap={"wrap"}>
          <Text display={"flex"}>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>S</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>p</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>a</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>c</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#aa4b6b"}>e</Text>
          </Text>
          <Text display={"flex"}>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>F</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>r</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>o</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>g</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#6b6b83"}>z</Text>
          </Text>
          <Text display={"flex"}>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>S</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>t</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>u</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>d</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>i</Text>
            <Text _hover={{ fontFamily: "Synkopy" }} color={"#3b8d99"}>o</Text>
          </Text>
        </Text>
      </Fade>
      <Text fontFamily={"GenosRoman-Medium"} fontSize={16} bgClip={"text"} bgGradient={"linear(to-l, #aa4b6b, #6b6b83, #3b8d99)"} textAlign={"center"}>Built with ❤️‍🔥 by Horik</Text>
    </Box >
  )
}

export default SpaceFrogsStudio
