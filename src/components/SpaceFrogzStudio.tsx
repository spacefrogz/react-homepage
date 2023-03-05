import { Box, Text } from "@chakra-ui/react"
import { isMobile } from 'react-device-detect'
import { colors } from "../utils/colors"
import useDimensions from "../hooks/useCustomDimensions"
import { Fade } from "react-awesome-reveal"
import strings from "../utils/strings"

const SpaceFrogzStudio = () => {
  const { sectionH } = useDimensions()

  return (
    <Box height={sectionH} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Fade duration={3000} key={"SpaceFrogzStudio"}>
        <Text display={"flex"} flexDirection={isMobile ? "column" : "row"} fontSize={isMobile ? "6xl" : "8xl"} fontWeight={"thin"} fontFamily={"Synkopy-Flipside, sans-serif !important;"} textAlign={"center"}>
          <Text display={"flex"} color={colors.bej} marginX={2}>
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
      <Fade delay={1500} duration={3000} key={"MadeByHorik"}>
        <Text fontFamily={"Synkopy"} color={colors.bej}>{strings.builtByHorik}</Text>
      </Fade>
    </Box>
  )
}

export default SpaceFrogzStudio
