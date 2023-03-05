import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom'
import { Box, Text } from '@chakra-ui/react'
import SpaceFrogzStudio from "../components/SpaceFrogzStudio"
import { colors, rainbowGradient } from "../utils/colors"
import strings from "../utils/strings"
import useWindowDimensions from "../hooks/useWindowDimensions"
import { Image } from "@chakra-ui/image"
import image from "../assets/logo.png"
import gopher from "../assets/the_gopher_frog.png"

const Home = () => {
  const { width } = useWindowDimensions()
  const imageLat = width / 4

  const [imgSrc, setImgSrc] = useState(image)
  return (
    <Box>
      <Box height={10} bgGradient={rainbowGradient}></Box>
      <SpaceFrogzStudio />
      <Box height={10} bgGradient={rainbowGradient}></Box>
      <Box display={"flex"} flex={1} flexWrap={"wrap"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(e => {
          return (
            <Image
              width={imageLat}
              height={imageLat}
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
          )
        })}
      </Box>
      <Zoom>
        <Text fontFamily={"Poppins-Regular"} fontSize={16} color={colors.bej} textAlign={"center"}>{strings.builtByHorik}</Text>
      </Zoom>
    </Box>
  )
}

export default Home
