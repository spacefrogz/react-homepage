import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import SpaceFrogzStudio from "../components/SpaceFrogzStudio"
import Rainbow from "../components/Rainbow"
import { scrollToTop } from "../utils/behaviours"

const Home = () => {
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <Box>
      <Rainbow />
      <SpaceFrogzStudio />
      <Rainbow />
    </Box>
  )
}

export default Home
