import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Box, Text } from '@chakra-ui/react'
import SpaceFrogzStudio from "../components/SpaceFrogzStudio"
import { colors } from "../utils/colors"
import strings from "../utils/strings"
import { Image } from "@chakra-ui/image"
import image from "../assets/logo.png"
import gopher from "../assets/the_gopher_frog.png"
import Rainbow from "../components/Rainbow"
import useCustomDimensions from "../hooks/useCustomDimensions"

const Home = () => {
  const { sectionH, circleLat } = useCustomDimensions()

  const [imgSrc, setImgSrc] = useState(image)
  return (
    <Box>
      <Rainbow />
      <SpaceFrogzStudio />
      <Rainbow />
      <Box display={"flex"} height={sectionH} justifyContent={"center"} alignItems={"center"}>
        <Zoom>
          <Image
            width={circleLat}
            height={circleLat}
            src={imgSrc}
            onClick={() => {
              if (imgSrc === gopher) {
                setImgSrc(image)
              } else {
                setImgSrc(gopher)
              }
            }}
            alt="A Circle Image"
          />
        </Zoom>
      </Box>
      <Rainbow />
      <Zoom>
        <Text fontFamily={"Poppins-Regular"} fontSize={16} color={colors.bej} textAlign={"center"}>{strings.builtByHorik}</Text>
      </Zoom>
    </Box>
  )
}

export default Home
