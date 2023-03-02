import React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import Landing from "./pages/Landing"
import Fonts from "./components/Fonts"
import SpaceFrogsStudio from "./pages/SpaceFrogsStudio"

const WIP: boolean = true

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {WIP ? <SpaceFrogsStudio /> : <Landing />}
    </ChakraProvider>
  )
}

export default App
