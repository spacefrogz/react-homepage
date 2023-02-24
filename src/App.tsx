import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Landing from "./pages/Landing"

const App = () => {

  return (
    <ChakraProvider>
      <Landing />
    </ChakraProvider>
  )
}

export default App
