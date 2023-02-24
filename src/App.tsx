import { Button } from "@chakra-ui/button"
import { Box, Text } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { useEffect, useState } from "react"
import emoji from "./utils/emojis"
import CachedRoundedIcon from '@mui/icons-material/CachedRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import useWindowDimensions from "./hooks/useWindowDimensions"

const App = () => {
  const toast = useToast()
  const { height } = useWindowDimensions()

  const [emojis, setEmojis] = useState<string>("")
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    setEmojis(`${emoji()} ${emoji()} ${emoji()} ${emoji()} ${emoji()} ${emoji()} ${emoji()} ${emoji()}`)
  }, [reload])

  const copiedToClipboard = () =>
    toast({
      title: `Copied ${emojis}`,
      status: 'success',
      duration: 9000,
      isClosable: false,
    })

  const somethingWentWrong = () =>
    toast({
      title: `Something went wrong...`,
      description: `Try reloading the website.`,
      status: `error`,
      duration: 9000,
      isClosable: false,
    })


  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(emojis)
      copiedToClipboard()
    } catch (error) {
      console.log('Failed to copy: ', error)
      somethingWentWrong()
    }
  }

  const reloadEmojis = () => setReload(!reload)


  return (
    <Box display={"flex"} flex={1} height={height} justifyContent={"center"} alignItems={"center"} >

      <Box flexDirection={"column"} >

        <Text fontSize={44} fontWeight={"semibold"} color={"#F0EBEB"}>
          {emojis}
        </Text>
        <Box display={"flex"} flex={1} justifyContent={"space-between"} flexDirection={"row"} marginTop={8}>
          <Button backgroundColor={"#424242"} onClick={reloadEmojis} borderRadius={100} marginRight={3}>
            <CachedRoundedIcon />
          </Button>
          <Button backgroundColor={"#424242"} flex={1} onClick={copyContent} borderRadius={100} marginLeft={3}>
            <ContentCopyRoundedIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default App