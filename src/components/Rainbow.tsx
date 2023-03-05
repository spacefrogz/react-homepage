import { Box } from "@chakra-ui/react"
import { rainbowGradient } from "../utils/colors"


const Rainbow = () => {
  return (
    <Box height={10} bgGradient={rainbowGradient}></Box>
  )
}

export default Rainbow