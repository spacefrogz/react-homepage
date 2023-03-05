import React from 'react'
import Fade from 'react-reveal/Fade'
import { Text } from "@chakra-ui/react"
import { isMobile } from 'react-device-detect'
import { colors } from "../utils/colors"
import useDimensions from "../hooks/useCustomDimensions"

const SpaceFrogzStudio = () => {
  const { sectionH } = useDimensions()

  return (
    <Fade big cascade>
      <Text flexDirection={isMobile ? "column" : "row"} fontSize={isMobile ? "6xl" : "8xl"} fontWeight={"thin"} fontFamily={"Synkopy-Flipside"} textAlign={"center"} height={sectionH} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Text display={"flex"} color={colors.bej}>
          <Text _hover={{ fontFamily: "Synkopy" }}>S</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>p</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>a</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>c</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>e</Text>
        </Text>
        <Text display={"flex"} color={colors.bej}>
          <Text _hover={{ fontFamily: "Synkopy" }}>F</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>r</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>o</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>g</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>z</Text>
        </Text>
        <Text display={"flex"} color={colors.bej}>
          <Text _hover={{ fontFamily: "Synkopy" }}>S</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>t</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>u</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>d</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>i</Text>
          <Text _hover={{ fontFamily: "Synkopy" }}>o</Text>
        </Text>
      </Text>
    </Fade>
  )
}

export default SpaceFrogzStudio
