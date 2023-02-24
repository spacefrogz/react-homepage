import { Button } from "@chakra-ui/button"
import { Box, Text } from "@chakra-ui/layout"
import { useToast } from "@chakra-ui/toast"
import { useEffect, useState } from "react"
import CachedRoundedIcon from '@mui/icons-material/CachedRounded'
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded'
import useWindowDimensions from "../hooks/useWindowDimensions"
import getRandomEmoji from "../utils/emojis"

const Landing = () => {
  const toast = useToast()
  const { height, width } = useWindowDimensions()

  const [emojis, setEmojis] = useState<string>("")
  const [reload, setReload] = useState<boolean>(false)

  useEffect(() => {
    setEmojis(`${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()} ${getRandomEmoji()}`)
  }, [reload])

  const copiedToClipboard = () =>
    toast({
      title: `Copied ${emojis}`,
      status: 'success',
      duration: 9000,
      isClosable: false,
      position: "top"
    })

  const somethingWentWrong = () =>
    toast({
      title: `Something went wrong...`,
      description: `Try reloading the website.`,
      status: `error`,
      duration: 9000,
      isClosable: false,
      position: "top"
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
    <Box display={"flex"} flex={1} height={height} width={width} justifyContent={"center"} alignItems={"center"} >

      <Box flexDirection={"column"} paddingX={12}>

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

export default Landing
